import React from "react";
import OtherHeader from "components/Headers/OtherHeader.js";
import {
    Card,
    CardHeader,
    CardBody,
    Container,
    Row,
    Col,
  } from "reactstrap";

const Auth = (props) => {
    return (
        <>
            <OtherHeader />
            {/* Page content */}
            <Container className="mt--7">
            <Row>
                <Col xl="4">
                  <Card className="shadow">
                    <CardHeader className="bg-transparent">
                      <Row className="align-items-center">
                        <div className="col">
                          <h6 className="text-uppercase text-muted ls-1 mb-1">
                            Autenticar
                          </h6>
                          <h2 className="mb-0">Acesso com Google</h2>
                        </div>
                      </Row>
                    </CardHeader>
                    <CardBody >
                      {/* form auth */}
                        <form action="api/drives/auth" method="POST">
                            <input type="submit" value="Autorizar"/>
                        </form>
                    </CardBody>
                  </Card>
                </Col>
            </Row>
            </Container>
        </>
    );
}

export default Auth;