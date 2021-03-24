import {gdrive} from 'pinkybrain';

async function drives(request, response){

    if(request.query.code){
        
        const credentials = process.env.CREDENTIALS;

        const oAuth2Client = gdrive.getAccessToken(credentials, request, response);
    }

    response.redirect('/files');
}

export default drives;