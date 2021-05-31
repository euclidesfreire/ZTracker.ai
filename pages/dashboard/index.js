import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
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
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import {
  chartOptions,
  parseOptions,
  chartVelocidade,
  chartDistancia,
  chartPolarizacao,
  chartTablePeixes,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export async function getServerSideProps(ctx){

 /* try {
    //JSON DATA => API pages dashboard
    const proxyUrl = 'http://localhost:3000/api/pages/dashboard';

    const options = {
      headers: {
        cookie: ctx.req ? ctx.req.headers.cookie : null
      }
    };

    const data = await fetch(proxyUrl, options);
    const dataJson = await data.json(); 
  
    if(!dataJson['checkCookie']['COMPILAR_VERIFY']['cookieBool']){
      return {
        redirect: {
          destination: dataJson['checkCookie']['COMPILAR_VERIFY']['url'],
          permanent: false,
        },
      };
    }*/

    const fileId = '1-CX04UX8UQuExfxX7WZ7YJQcLsJLbQi-';

    const urlOutput = 'https://drive.google.com/file/d/' + fileId + '/preview';

    return {
      props: {
        urlOutput: urlOutput
      }
  }
  /*} catch (err) {
    console.log('The Page Dashboad Err: ' + err + " DOMINIO: " + process.env.DOMINIO);

    return { props: {} };
  }*/
}

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

const Dashboard = (props) => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Resultado
                    </h6>
                    <h2 className="mb-0">Vídeo</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* video */}
                <figure><div class="boxVideo">
                   <iframe width="100%" height="380px" src={props.urlOutput}>
                   </iframe>
                </div></figure>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Dados
                    </h6>
                    <h2 className="mb-0">Outros Resultados</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* filter */}
                <div>
                  <button class="btn-resultados"> <div><i class="fas fa-table"></i></div> Tabelas </button> <br/><br/>
                  <button class="btn-resultados"> <div><i class="fas fa-fish"></i></div> Dados por Peixe</button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Gráfico
                    </h6>
                    <h2 className="mb-0">Velocidade por Peixe</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Bar
                    data={chartTablePeixes.data}
                    options={chartTablePeixes.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Gráfico
                    </h6>
                    <h2 className="mb-0">Velocidade</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Line
                    data={chartVelocidade.data}
                    options={chartVelocidade.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="6">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Gráfico
                    </h6>
                    <h2 className="mb-0">Distância</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Line
                    data={chartDistancia.data}
                    options={chartDistancia.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-5 mb-xl-0" xl="6">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Gráfico
                    </h6>
                    <h2 className="mb-0">Polarização</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Line
                    data={chartPolarizacao.data}
                    options={chartPolarizacao.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

Dashboard.layout = Admin;

export default Dashboard;
