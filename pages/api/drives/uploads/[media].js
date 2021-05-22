import {gdrive} from 'pinkybrain';
import formidable from "formidable";

export const config = {
    api: {
      bodyParser: false
    },
}

async function upload(request, response){
    const media = request.query.media;
    const credentials = process.env.CREDENTIALS;
    const form = new formidable.IncomingForm();

    form.parse(request, async (err, fields, files) => {
        if (err) return console.log(err);
    
        const fileId = await gdrive.fileUpload(
            credentials, 
            response,
            files[media].name, 
            files[media].path, 
            files[media].type, 
            fields.folder
            );

        const mediaUrl = `https://drive.google.com/uc?export=view&id=${fileId}`
    
    });

    response.redirect('/');
  }
  
  export default upload;