import {gdrive} from 'pinkybrain';

export const config = {
    api: {
      bodyParser: false
    },
}

async function auth(request, response){

    const credentials = process.env.CREDENTIALS;

    const oauthClient = await gdrive.getAuthorization(credentials, response);

    response.json({
      oauthClient: oauthClient
    });
}
  
export default auth;