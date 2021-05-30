import Cookies from 'cookies';

function add(request, response){
    try {

        var cookies = new Cookies(request, response);

        const linkapi = String(request.body.linkapi);

        cookies.set('LINK_SERVER', linkapi);

        return response.redirect('/');

    } catch (err) {
        return console.log('Erro Add Link API Server: ' + err);
    }
}

export default add;