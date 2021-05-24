import {gdrive} from 'pinkybrain';

export const config = {
    api: {
      bodyParser: false
    },
}

async function auth(request, response){

  try {    
      const credentials = process.env.CREDENTIALS;

      const oauthClient = await gdrive.getAuthorization(credentials, response);

      return response.json({
        oauthClient: oauthClient
      });
  } catch (err) {
      return console.log('The API Auth: ' + err);
  }

}
  
export default auth;