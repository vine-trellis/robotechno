import React, { useState } from 'react';
import { Table, Container, Button, Row, Col, Navbar, InputGroup, Form, Image } from 'react-bootstrap';
import { Instrument } from 'musical.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faVolumeUp, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const SEMITONES = ['C', '^C', 'D', '^D', 'E', 'F', '^F', 'G', '^G', 'A', '^A', 'B'].reverse();

export default function Listen() {
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
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Help
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Row className="my-3">
        <Col>
          <h4>Collaborative Sandbox</h4>
        </Col>
      </Row>
      <Row className="my-2">
        <Col>
          <Table bordered>
            <tbody>
              {
                SEMITONES.map((tone) => {
                  return <tr key={tone}>
                    {/* <td className='note-label'>
                      {tone}
                    </td> */}
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
        <Col md={{ span: 3, offset: 1 }}>
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
      </Row>
      <Row className="my-2">
        <Col md={{ span: 1, offset: 10 }} className="right-button">
          <Button variant="outline-dark" as={Link} to="#">
            Save
          </Button>
        </Col>
        <Col md={{ span: 1 }} className="right-button">
          <Button variant="dark" as={Link} to="/notepicker">
            Iterate
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
