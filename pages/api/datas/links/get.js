import fs from "fs";

const LINK_API_PATH = "linkapi.json";

function getLink(){
    const linkapi = JSON.parse(fs.readFileSync(LINK_API_PATH));

    return linkapi;
}

function get(request, response){
    const linkapi = getLink();

    response.json({
        linkapi,
    });
}

export default get;