import {gdrive} from 'pinkybrain';

async function resultados(request, response){

    if(request.query.code){
        const oAuth2Client = await gdrive.getAccessToken(request, response);
        
        response.redirect('/files');
    }

    return;
}

export default resultados;