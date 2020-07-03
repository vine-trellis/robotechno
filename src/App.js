import React from 'react';
import './App.css';
import Notepicker from './Notepicker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faLink } from '@fortawesome/free-solid-svg-icons';

import { Navbar, Row, Col, Button, Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Navbar>
        <Navbar.Brand href="#">Robotechno</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <FontAwesomeIcon icon={faLink}/>
          </Navbar.Text>
          <Navbar.Text>
            <FontAwesomeIcon icon={faCog}/>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row>
          <Col md={12}>
            <Notepicker />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Button>trumpet</Button>
            <Button>snare</Button>
            <Button>saxophone</Button>
          </Col>
          <Col md={3}>
            {/* <Button>play</Button> */}
            <Button>change time signature</Button>

          </Col>
          <Col md={3}>
            <Button>submit</Button>

          </Col>
        </Row>
      </Container>



    </>
  );
}

export default App;
