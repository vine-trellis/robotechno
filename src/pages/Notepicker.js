import React, { useState } from 'react';
import { Table, Container, Button, Row, Col, Navbar, InputGroup, Form, Image } from 'react-bootstrap';
import { Instrument } from 'musical.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faVolumeUp, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import drums from '../assets/instruments/drums.png';
import triangle from '../assets/instruments/triangle.png';
import trumpet from '../assets/instruments/trumpet.png';
import './Notepicker.css';


const SEMITONES = ['C', '^C', 'D', '^D', 'E', 'F', '^F', 'G', '^G', 'A', '^A', 'B'].reverse();

export default function Notepicker() {
  let inst = new Instrument();
  const [username, setUsername] = useState('');
  const [bpm, setBpm] = useState(200);
  const [numberNotes, setNumberNotes] = useState(4);
  const [numberSubdivisions, setNumberSubdivisions] = useState(4);
  const INITIAL_NOTES = new Array(numberNotes * numberSubdivisions).fill('z');
  const [notes, setNotes] = useState(INITIAL_NOTES);
  const [instrument, setInstrument] = useState('trumpet');

  return (
    <Container>
      <Navbar>
        <Navbar.Brand href="#">Robo-Techno</Navbar.Brand>
        <Navbar.Brand>
          <InputGroup>
            <Form.Control as="input" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            <InputGroup.Append>
              <Button disabled variant="outline-secondary">
                <FontAwesomeIcon icon={faPencilAlt} />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Help
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Row className="my-3">
        <Col md={{ span: 3, offset: 4 }}>
          <Form.Group as={Row}>
            <Form.Label column>
              # Notes:
          </Form.Label>
            <Col md={4}>
              <Form.Control as="select" value={numberNotes} onChange={(e) => setNumberNotes(e.target.value)}>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={6}>6</option>
              </Form.Control>
            </Col>
          </Form.Group>
        </Col>
        <Col md={{ span: 3 }}>
          <Form.Group as={Row}>
            <Form.Label column>
              # Note subdivisions:
          </Form.Label>
            <Col md={4}>
              <Form.Control as="select" value={numberSubdivisions} onChange={(e) => setNumberSubdivisions(e.target.value)}>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </Form.Control>
            </Col>
          </Form.Group>
        </Col>
        <Col md={{ span: 2 }} className='right-button'>
          <Button
            variant="outline-dark"
            onClick={() => {
              setNumberNotes(4);
              setNumberSubdivisions(4);
              setNotes(INITIAL_NOTES);
            }}>Clear All</Button>
        </Col>
      </Row>
      <Row className="my-2">
        <Col>
          <Table bordered>
            <tbody>
              {
                SEMITONES.map((tone) => {
                  return <tr key={tone}>
                    <td className='note-label'>
                      {tone}
                    </td>
                    {[...Array(numberNotes * numberSubdivisions).keys()].map((i) => {
                      return <td
                        className={notes[i] === tone ? "selected-note" : "unselected-note"}
                        key={i + tone}
                        onClick={() => {
                          inst.tone(tone);
                          let temp_notes = notes.slice();
                          temp_notes[i] = tone;
                          setNotes(temp_notes);
                        }} />
                    })}
                  </tr>
                })
              }
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="my-2">
        <Col md={{ span: 3 }}>
          <Button onClick={() => {
            console.log(notes.join(""));
            inst.play({ tempo: bpm }, notes.join(""));
          }}
            className="mx-1"
          ><FontAwesomeIcon icon={faPlay} /></Button>
          <Button
            className="mx-1"
          ><FontAwesomeIcon icon={faVolumeUp} /></Button>
        </Col>
        <Col md={6}>
          <div id='instrument-picker'>
            <Image
              className={instrument === 'drums' ? 'selected-instrument' : 'unselected-instrument'}
              onClick={() => setInstrument('drums')}
              src={drums}
            />
            <Image
              className={instrument === 'triangle' ? 'selected-instrument' : 'unselected-instrument'}
              onClick={() => setInstrument('triangle')}
              src={triangle}
            />
            <Image
              className={instrument === 'trumpet' ? 'selected-instrument' : 'unselected-instrument'}
              onClick={() => setInstrument('trumpet')}
              src={trumpet}
            />
          </div>
        </Col>
        <Col>
          <h6>Create you own tune on this keyboard and click submit when you are ready to play with your friends!</h6>
        </Col>
      </Row>
      <Row className="my-2">
        <Col md={{ span: 2, offset: 10 }} className="right-button">
          <Button variant="dark" as={Link} to="/listen">
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
