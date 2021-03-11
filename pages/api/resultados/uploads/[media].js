import { useRouter } from 'next/router';

const gdrive = require('../gdrive');

async function upload(request, response){
    const router = useRouter();
    const midia = router.query.midia;
    
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
        if (err) return console.log(err);

        const fileId = await gdrive.fileUpload(files.midia.name, files.midia.path, files.midia.type, fields.folder);
        const midia = `https://drive.google.com/uc?export=view&id=${fileId}`;
    });
  
    response.json({
      midia: midia
    });
    
  }
  
  export default upload;