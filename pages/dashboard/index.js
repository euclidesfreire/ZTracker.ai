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
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export async function getServerSideProps(ctx){

  try {
    //JSON DATA => API pages dashboard
    const dominio = process.env.DOMINIO;
    const proxyUrl = dominio + 'api/pages/dashboard';

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

    const fileId = '1-CX04UX8UQuExfxX7WZ7YJQcLsJLbQi-';

    const urlOutput = 'https://drive.google.com/file/d/' + fileId + '/preview';

    return {
      props: {
        urlOutput: urlOutput
      }
  }
  } catch (err) {
    console.log('The Page Dashboad Err: ' + err + " DOMINIO: " + process.env.DOMINIO);

    return { props: {} };
  }
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
                <div>
                   <iframe width="100%" height="350px" src={props.urlOutput}>
                   </iframe>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Filter
                    </h6>
                    <h2 className="mb-0">Carregar Paramentros</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* filter */}
                <div className="filter">
                  <div className={classes.root}>
                    <Typography id="discrete-slider" gutterBottom>
                      Movimento
                    </Typography>
                    <Slider
                      defaultValue={30}
                      getAriaValueText={valuetext}
                      aria-labelledby="discrete-slider"
                      valueLabelDisplay="auto"
                      step={10}
                      marks
                      min={10}
                      max={110}
                  />
                  </div>
                  <FormGroup row>
                    <FormControlLabel
                      control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                      label="Secondary"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={state.checkedB}
                          onChange={handleChange}
                          name="checkedB"
                          color="primary"
                        />
                      }
                      label="Primary"
                    />
                  </FormGroup>
                  <div className={classes.root}>
                    <Typography id="discrete-slider" gutterBottom>
                      Velocidade
                    </Typography>
                    <Slider
                      defaultValue={50}
                      getAriaValueText={valuetext}
                      aria-labelledby="discrete-slider"
                      valueLabelDisplay="auto"
                      step={10}
                      marks
                      min={10}
                      max={110}
                  />
                  </div>
                  <div>
                   
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="text-white mb-0">Sales value</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Month</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2,
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Week</span>
                          <span className="d-md-none">W</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Performance
                    </h6>
                    <h2 className="mb-0">Total orders</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
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
