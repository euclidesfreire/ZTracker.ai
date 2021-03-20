import { drive } from "gdrive-node";

const SCOPES = ['https://www.googleapis.com/auth/drive.file'];
const TOKEN_PATH = process.env.TOKEN;
import fs from 'fs';
import google  from 'googleapis';

function getOAuthClient(credential_path) {
    credentials = JSON.parse(fs.readFileSync(credential_path));

    const { client_secret, client_id, redirect_uris } = credentials.installed;
    return new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
}

async function getAuthorization(credential_path, response) {
    const oAuth2Client = getOAuthClient(credential_path);

    if (!fs.existsSync(TOKEN_PATH)) {
        const url = await oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: SCOPES,
        });
        return response.redirect(url);
    }

    const token = JSON.parse(fs.readFileSync(TOKEN_PATH));
    oAuth2Client.setCredentials(token);

    return oAuth2Client;
}

async function getAccessToken(request, response) {
    try {
        const oAuth2Client = getOAuthClient(credential_path);
        const {tokens} = await oAuth2Client.getToken(request.query.code);
        fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens));
        return getAuthorization(response);
    } catch (err) {
        return console.error('Error retrieving access token', err);
    }
}

async function fileUpload(credential_path, fileName, filePath, mimeType, folderId) {
    const oauthClient = await getAuthorization(credential_path);
    const fileMetadata = { 
        name: fileName,
        parents: [folderId]
    };

    const media = {
        mimeType,// "image/jpeg",
        body: fs.createReadStream(filePath)
    }

    const drive = google.drive({ version: 'v3', auth: oauthClient });

    try {
        const file = await drive.files.create({
            resource: fileMetadata,
            media: media
        });
        
        return file.data.id;
    } catch (err) {
        return console.log('The API returned an error: ' + err);
    }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '50mb',
    },
  },
}

async function auth(request, response){

    const credential = process.env.CREDENTIAL;

    const oauthClient = await getAuthorization(credential, response);
  
    response.send(JSON.stringify(oauthClient));    
  }
  
export default auth;