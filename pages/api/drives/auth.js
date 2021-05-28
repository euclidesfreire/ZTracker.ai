import {gdriveCookie} from 'pinkybrain';

export const config = {
    api: {
      bodyParser: false
    },
}

async function auth(request, response){

  try {    
      const credentials = process.env.CREDENTIALS;

      const oauthClient = await gdriveCookie.getAuthorization(request, response, credentials);

      return response.redirect('/');

  } catch (err) {
      return console.log('The API Auth: ' + err);
  }

}
  
export default auth;