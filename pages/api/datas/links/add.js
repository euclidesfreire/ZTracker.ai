import Cookies from 'cookies';

function add(request, response){
    try {

        var cookies = new Cookies(request, response);

        cookies.set('link', request.body.linkapi);

        return response.redirect('/api/datas/links/get');

    } catch (err) {
        return console.log('Erro Add Link API Server: ' + err);
    }
}

export default add;