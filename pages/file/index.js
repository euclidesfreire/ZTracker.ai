import Admin from "layouts/Admin.js";
import Header from "components/Headers/Header.js";

const upload = (props) => {

    return (
        <>
            <Header />
            <form action="api/resultados/uploads/auth" method="POST">
                <input type="submit" value="Autorizar" />
            </form>
            <form action="api/resultados/uploads/video" method="POST" enctype="multipart/form-data">
                <select name="folder">
                <option value="1kQ0iL9QlV0GVEhNieX6aadxd8TNByoky">Colab Files</option>
              </select>
                <input type="file" name="video" />
                <input type="submit" value="Enviar" />
            </form>
        </>
    )

}


upload.layout = Admin;

export default upload;