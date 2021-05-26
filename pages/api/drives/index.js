import {gdriveCookie} from 'pinkybrain';

async function drives(request, response){

    if(request.query.code){
        
        const credentials = process.env.CREDENTIALS;

        const oAuth2Client = await gdriveCookie.getAccessToken(request, response, credentials);
    }

    return response.redirect('/files');
}

export default drives;