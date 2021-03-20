import { drive } from "gdrive-node";
const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
const TOKEN_PATH = process.env.TOKEN;
import fs from 'fs';
import formidable from "formidable";
import { google }  from 'googleapis';

function getOAuthClient(credential_path) {
    const credentials = JSON.parse(fs.readFileSync(credential_path));

    const { client_secret, client_id, redirect_uris } = credentials.web;

    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);

    return oAuth2Client;
}

async function getAuthorization(credential_path, response) {
    const oAuth2Client = getOAuthClient(credential_path);

    if (!fs.existsSync(TOKEN_PATH)) {
        getAccessToken(oAuth2Client);
    }

    //const token = JSON.parse(fs.readFileSync(TOKEN_PATH));
    //oAuth2Client.setCredentials(token);

    //return oAuth2Client;
}

async function getAccessToken(oAuth2Client) {
    try {
        const authUrl = await oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: SCOPES,
        });

        console.log('Authorize this app by visiting this url:', authUrl);
        
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
        });

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
      bodyParser: false,
    },
}

async function upload(request, response){
    const media = request.query.media;
    const credential = process.env.CREDENTIAL;
    const form = new formidable.IncomingForm();

    form.parse(request, async (err, fields, files) => {
        if (err) return console.log(err);
    
        //const fileId = await fileUpload(
        //    credential, 
        //    files[media].name, 
        //    files[media].path, 
        //    files[media].type, 
        //    fields.folder);
//
        //const mediaUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;

        const fileId = getAuthorization(credential);

        response.json({
            fileId: fileId
        });
    
    });
  }
  
  export default upload;