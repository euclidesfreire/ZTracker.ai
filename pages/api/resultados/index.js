async function resultados(request, response){

    response.json({
        title: 'Express', 
        audio: '', 
        video: '', 
        image: '', 
        auth: false
    })
}

export default resultados;