import {gdrive} from 'pinkybrain';

async function drives(request, response){

    if(request.query.code){
        
        const credentials = process.env.CREDENTIALS;

        const oAuth2Client = await gdrive.getAccessToken(credentials, request, response);
    }

    return response.redirect('/files');
}

export default drives;