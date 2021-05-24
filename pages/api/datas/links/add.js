import fs from "fs";

const LINK_API_PATH = "linkapi.json";

function setLink(link_api) {
    const link = {'link': link_api};
    fs.writeFileSync(LINK_API_PATH, JSON.stringify(link));
}

function add(request, response){

    setLink(request.body.linkapi);

    return response.redirect('/');
}

export default add;