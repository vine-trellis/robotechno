import React from 'react';
import './App.css';
import Notepicker from './Notepicker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faLink } from '@fortawesome/free-solid-svg-icons';

import { Navbar, Row, Col, Button, Container } from 'react-bootstrap';

function App() {
  return (
    <Notepicker />
  );
}

export default App;
