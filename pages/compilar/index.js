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

  /*export async function getServerSideProps(ctx){

    try {
      //JSON DATA => API pages dashboard
      const proxyUrl = 'http://localhost:3000/api/pages/compilar';
  
      const options = {
        headers: {
          cookie: ctx.req ? ctx.req.headers.cookie : null
        }
      };
  
      const data = await fetch(proxyUrl, options);
      const dataJson = await data.json(); 
    
      if(!dataJson['checkCookie']['LINK_SERVER']['cookieBool']){
        return {
          redirect: {
            destination: dataJson['checkCookie']['LINK_SERVER']['url'],
            permanent: false,
          },
        };
      }
  
      return { props: {} };

    } catch (err) {
      console.log('The Page Compilar Err: ' + err);
  
      return { props: {} };
    }
  }*/

const compilar = (props) => {

    return (
        <>
            <OtherHeader />
            {/* Page content */}
            <Container className="mt--7" fluid>
              <Row>
                <Col className="mb-5 mb-xl-0" xl="6">
                  <Card className="shadow">
                    <CardHeader className="bg-transparent">
                      <Row className="align-items-center">
                        <div className="col">
                          <h6 className="text-uppercase text-muted ls-1 mb-1">
                            Upload
                          </h6>
                          <h2 className="mb-0">Carregar Vídeo</h2>
                        </div>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      {/* form video */}
                        <form action="api/datas/compilar/post" method="POST" encType="multipart/form-data">
                            <select name="folder" class="select-folder">
                                <option value="1kQ0iL9QlV0GVEhNieX6aadxd8TNByoky">Colab Files</option>
                            </select>
                            <button class="btn-input-file">Selecionar vídeo de upload</button>
                            <input type="file" class="input-file-video" name="video" />
                            <br /> <br />
                            <input type="text" name="max_fish" placeholder="Digite o Max Fish" class=""/>
                            <br /> <br /><br />
                            <input type="submit" value="Executar" />
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