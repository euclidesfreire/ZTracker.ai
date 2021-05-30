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


async function compilar(request, response){
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

export default compilar;