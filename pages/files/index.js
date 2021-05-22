import Admin from "layouts/Admin.js";
import OtherHeader from "components/Headers/OtherHeader.js";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Progress,
    Table,
    Container,
    Row,
    Col,
  } from "reactstrap";

const upload = (props) => {

    return (
        <>
            <OtherHeader />
            {/* Page content */}
            <Container className="mt--7" fluid>
              <Row>
                <Col className="mb-5 mb-xl-0" xl="8">
                  <Card className="shadow">
                    <CardHeader className="bg-transparent">
                      <Row className="align-items-center">
                        <div className="col">
                          <h6 className="text-uppercase text-muted ls-1 mb-1">
                            Upload
                          </h6>
                          <h2 className="mb-0">Vídeo de Entrada</h2>
                        </div>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      {/* form video */}
                        <form action="api/drives/uploads/video" method="POST" encType="multipart/form-data">
                            <select name="folder" class="select-folder">
                                <option value="1kQ0iL9QlV0GVEhNieX6aadxd8TNByoky">Colab Files</option>
                            </select>
                            <input type="file" name="video" />
                            <input type="submit" value="Enviar" />
                        </form>
                    </CardBody>
                  </Card>
                </Col>
                </Row>
            </Container>            
        </>
    )

}

upload.layout = Admin;

export default upload;