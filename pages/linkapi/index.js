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

const linkApi = (props) => {

    return (
        <>
            <OtherHeader />
            {/* Page content */}
            <Container className="mt--7" fluid>
              <Row>
              <Col xl="4">
                  <Card className="shadow">
                    <CardHeader className="bg-transparent">
                      <Row className="align-items-center">
                        <div className="col">
                          <h6 className="text-uppercase text-muted ls-1 mb-1">
                            Link API
                          </h6>
                          <h2 className="mb-0">Inserir Link</h2>
                        </div>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      {/* form link */}
                      <form action="api/datas/links/add" method="POST">
                          <input type="text" name="linkapi" />
                          <input type="submit" value="Inserir" />
                      </form>
                    </CardBody>
                  </Card>
                </Col>
                </Row>
            </Container>            
        </>
    )

}

linkApi.layout = Admin;

export default linkApi;