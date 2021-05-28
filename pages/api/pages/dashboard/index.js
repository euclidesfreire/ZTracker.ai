import Cookies from 'cookies';

function checkCookies(request, response){
    try{
        const cookie = new Cookies(request, response);
        console.log('cookie.get(TOKEN_GDRIVE):' + cookie.get('TOKEN_GDRIVE'));
        const AuthBool = cookie.get('TOKEN_GDRIVE') ? true : false;
        const LinkServerBool = cookie.get('LINK_SERVER') ? true : false;

        const checkCookieJson = {
            "TOKEN_GDRIVE": { 
                "cookieBool": AuthBool,
                "url": "/auth"
            },
            "LINK_SERVER": { 
                "cookieBool": LinkServerBool,
                "url": "/linkapi"
            }    
        };
        
        return JSON.stringify(checkCookieJson);

    } catch (err) {
        return console.log('The API Pages App (Function checkCookies): ' + err);
    }
}

async function listFilesDrive(request, response){

    try {
        const dominio = process.env.DOMINIO;
        const folderId = '1kQ0iL9QlV0GVEhNieX6aadxd8TNByoky';
        const url = dominio + 'api/drives/lists/' + folderId;

        const options = {
            headers: {
              cookie: request.headers.cookie
            }
          };
         
        const files = await fetch(url, options);
        const filesJson = await files.json();

        return filesJson;

    } catch (err) {
        return console.log('The API Pages App (Function listFilesDrive): ' + err);
    }

}

async function dashboard(request, response){
    try {

        const checkCookieJson = checkCookies(request, response);
        const filesJson = await listFilesDrive(request, response);        

        return response.json({
            files: filesJson,
            checkCookie: JSON.parse(checkCookieJson)
        });
    
    } catch (err) {
        return console.log('The API Pages Dashboard Lists: ' + err);
    }
}

export default dashboard;