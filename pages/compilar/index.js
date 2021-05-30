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

const compilar = (props) => {

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
                            Compilar
                          </h6>
                          <h2 className="mb-0">Carregar Algoritmo</h2>
                        </div>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      {/* form video */}
                        <form action="api/pages/compilar" method="POST" encType="multipart/form-data">
                            <label>Vídeo de Saída</label> <br />
                            <select name="video-name" class="">
                                <option value="output.mp4">output.mp4</option>
                            </select>
                            <br /> <br />
                            <input type="text" name="size-fish" placeholder="Digite o Max Finsh" class=""/>
                            <br /> <br /><br />
                            <input type="submit" value="Compilar" />
                        </form>
                    </CardBody>
                  </Card>
                </Col>
                </Row>
            </Container>            
        </>
    )

}

compilar.layout = Admin;

export default compilar;