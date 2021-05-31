import Cookies from 'cookies';

function post(request, response){
    try {

        var cookies = new Cookies(request, response);

        const compilarDatasForm = {
            "max_fish": parseInt(request.body.max_fish)
        };

        cookies.set('COMPILAR_VERIFY', JSON.stringify(compilarDatasForm));

        return response.redirect('/');

    } catch (err) {
        console.log('Erro Add Link API Server: ' + err);
        return response.json({err: err});
    }
}

export default post;