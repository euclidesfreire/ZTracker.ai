async function teste(request, response){
    
    const varTestResponse = await fetch("http://34601bfcb5ee.ngrok.io/api/test");
    const varTestResponseJson = await varTestResponse.json();
    const texto = varTestResponseJson.teste;
    
    response.json({
        texto: texto
    });
}

export default teste;