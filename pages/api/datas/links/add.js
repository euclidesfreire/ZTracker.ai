import Cookies from 'cookies';

function add(request, response){
    try {

        var cookies = new Cookies(request, response);

        cookies.set('LINK_SERVER', request.body.linkapi);

        return response.redirect('/');

    } catch (err) {
        return console.log('Erro Add Link API Server: ' + err);
    }
}

export default add;