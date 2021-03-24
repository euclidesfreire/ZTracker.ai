import fs from "fs";

const LINK_API_PATH = "linkapi.json";

function getLink(){
    const link = JSON.parse(fs.readFileSync(LINK_API_PATH));

    return link;
}

function get(request, response){
    const link = getLink();

    response.json({
        linkApi:  link,
    });
}

export default get;