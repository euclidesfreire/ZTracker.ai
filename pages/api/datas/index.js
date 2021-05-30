import Cookies from "cookies";

async function getDatas(request, response){
    try {
        const cookie = new Cookies(request, response);

        const proxyDatasAPI = cookie.get("LINK_SERVER");

        console.log('proxyDatasAPI: ' + proxyDatasAPI);

        const fetchDatas = await fetch(proxyDatasAPI);
        const fetchDatasJson = await fetchDatas.json();

        console.log("fetchDatasJson: " + fetchDatasJson);

        return fetchDatasJson;
    } catch (error) {
        console.log('The API Datas Function getDatas: ' + err);
        return false;
    }
}

async function datas(request, response){
    try {

        const datasJson = await getDatas(request, response);

        return response.json({
            verifyDatas: { 
                verifyBool: true
            },
            datas: datasJson
        });
        
    } catch (error) {
        console.log('The API Datas: ' + err);

        return response.json({
            verifyDatas: { 
                verifyBool: false
            }
        });
    }
}

export default datas;