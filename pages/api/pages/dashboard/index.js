import Cookies from 'cookies';

function checkCookies(request, response){
    try{
        const cookie = new Cookies(request, response);
        
        //const AuthBool = cookie.get('TOKEN_GDRIVE') ? true : false;
        const LinkServerBool = cookie.get('LINK_SERVER') ? true : false;

        const checkCookieJson = {
            "LINK_SERVER": { 
                "cookieBool": LinkServerBool,
                "url": "/linkapi"
            }    
        };
        
        return JSON.stringify(checkCookieJson);

    } catch (err) {
        console.log('The API Pages App (Function checkCookies): ' + err);

        return false;
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
        //const filesJson = await listFilesDrive(request, response);        

        return response.json({
            checkCookie: JSON.parse(checkCookieJson)
        });
    
    } catch (err) {
        console.log('The API Pages Dashboard Lists: ' + err);

        return response.json({
            checkCookie: false
        });
    }
}

export default dashboard;