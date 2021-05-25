import cookie from "js-cookie";

function setLink(link_api) {
    try {

        return cookie.set('link', link_api);

    } catch (err) {
        return console.log('Erro Set Link Function Server: ' + err);
    }
}

function add(request, response){
    try {
        
        console.log(setLink(request.body.linkapi));

        return response.redirect('/api/datas/links/get');

    } catch (err) {
        return console.log('Erro Add Link API Server: ' + err);
    }
}

export default add;