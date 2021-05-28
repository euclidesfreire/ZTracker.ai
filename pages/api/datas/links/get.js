import Cookies from 'cookies';

function get(request, response){
    try {

        var cookies = new Cookies(request, response);

        const linkApi =  cookies.get('LINK_SERVER');

        return response.json({
            linkApi,
        });

    } catch (err) {
        return console.log('Erro Get Link API Server: ' + err);
    }
}

export default get;