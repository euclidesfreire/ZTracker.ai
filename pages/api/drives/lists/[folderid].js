import {gdrive} from 'pinkybrain';

export const config = {
    api: {
      bodyParser: false
    },
}

async function list(request, response){
    const credentials = process.env.CREDENTIALS;

    const folderId = request.query.folderid;

    const query =  "'" + folderId + "' in parents";

    const listFile = await gdrive.listFiles(credentials, response, query);

    response.json(listFile.files);
  }
  
  export default list;