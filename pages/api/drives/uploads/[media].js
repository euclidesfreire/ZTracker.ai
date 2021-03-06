import {gdriveCookie} from 'pinkybrain';
import formidable from "formidable";

export const config = {
    api: {
      bodyParser: false
    },
}

async function uploads(request, response){

    try {
        const media = request.query.media;
        const credentials = process.env.CREDENTIALS;
        const form = new formidable.IncomingForm();

        form.parse(request, async (err, fields, files) => {
            if (err) return console.log(err);
    
            const fileId = await gdriveCookie.fileUpload(
                request,
                response,
                credentials, 
                files[media].name, 
                files[media].path, 
                files[media].type, 
                fields.folder
            );

            const mediaUrl = `https://drive.google.com/uc?export=view&id=${fileId}`
    
        });

        return response.redirect('/');

    } catch (err) {
        return console.log('The API Drive Uploads: ' + err);
    }

  }
  
  export default uploads;