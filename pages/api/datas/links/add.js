import fs from "fs";
import formidable from "formidable";

const LINK_API_PATH = "link-api.json";

function setLink(link_api) {
    const link = {'link': link_api};
    fs.writeFileSync(LINK_API_PATH, JSON.stringify(link));
}

async function add(request, response){

    const form = new formidable.IncomingForm();

    form.parse(request, async (err, fields, files) => {
        if (err) return console.log(err);
    
        console.log("LINK: "+ fields + "ooo"+files);
        setLink(fields.linkapi);
    });
    
    response.redirect('/');
}

export default add;