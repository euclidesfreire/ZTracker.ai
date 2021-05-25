import cookie from "js-cookie";

const LINK_API_PATH = "linkapi.json";

function getLink(){
    try {

        const linkapi = cookie.get('link');

        console.log(linkapi);

        return linkapi;

    } catch (err) {
        return console.log('Erro Get Link Function Server: ' + err);
    }
}

function get(request, response){
    try {
        const linkapi = getLink();

        return response.json({
            linkapi,
        });

    } catch (err) {
        return console.log('Erro Get Link API Server: ' + err);
    }
}

export default get;