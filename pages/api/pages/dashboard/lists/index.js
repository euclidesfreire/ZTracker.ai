async function list(request, response){
    try {
        const folderId = '1kQ0iL9QlV0GVEhNieX6aadxd8TNByoky';
        const url = 'http://localhost:3000/api/drives/lists/' + folderId;
        const resultados = await fetch(url);
        const resultadosJson = await resultados.json();

        const files = {};

        for(var x in resultadosJson){
            files[resultadosJson[x]['name']] = resultadosJson[x]['id'];
        }

        return response.json(files);
    
    } catch (err) {
        return console.log('The API Pages Dashboard Lists: ' + err);
    }
}

export default list;