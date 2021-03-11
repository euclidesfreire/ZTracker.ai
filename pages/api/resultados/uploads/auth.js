const gdrive = require('../gdrive');

async function auth(request, response){
    const oauthClient = await gdrive.getAuthorization(response);
  
    response.send(JSON.stringify(oauthClient));
    
  }
  
  export default auth;