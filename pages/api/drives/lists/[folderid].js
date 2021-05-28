import {gdriveCookie} from 'pinkybrain';

export const config = {
    api: {
      bodyParser: false
    },
}

function formatListFiles(listFiles){
    const listFilesNew = {};

    for(var x in listFiles){
      listFilesNew[listFiles[x]['name']] = listFiles[x]['id'];
    }

    return listFilesNew;
}

async function lists(request, response){

  try {

      console.log("Cookie List: " + request.cookies['TOKEN_GDRIVE']);

      const credentials = process.env.CREDENTIALS;

      const folderId = request.query.folderid;

      const query =  "'" + folderId + "' in parents";

      const listFile = await gdriveCookie.listFiles(request, response, credentials, query);

      return response.json(formatListFiles(listFile.files));

    } catch (err) {
        return console.log('The API Drive Lists: ' + err);
    }
  }
  
  export default lists;