import {gdrive} from 'pinkybrain';

export const config = {
    api: {
      bodyParser: false
    },
}

async function lists(request, response){

  try {
      const credentials = process.env.CREDENTIALS;

      const folderId = request.query.folderid;

      const query =  "'" + folderId + "' in parents";

      const listFile = await gdrive.listFiles(credentials, response, query);

      console.log(listFile.files);

      return response.json(listFile.files);

    } catch (err) {
        return console.log('The API Drive Lists: ' + err);
    }
  }
  
  export default lists;