import React, { useState } from 'react';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function Join() {
  const [username, setUsername] = useState('')
  const [sessionCode, setSessionCode] = useState('')
  return (
    <Container className="h-100" style={{maxWidth: '25rem'}}>
      <Row className="h-100" >
        <Col className="my-auto" >
          <Row className="d-flex justify-content-center">
            <h1 className='mb-5'>
              Robo-Techno
            </h1>
          </Row>
          <Row>
            <Form.Control className='mt-4 mb-3 py-4' as="input" placeholder="Your Name" value={username} onChange={e => setUsername(e.target.value)} />
          </Row>
          <Row>
            <Form.Control className='mb-3 py-4' as="input" placeholder="Session Code" value={sessionCode} onChange={e => setSessionCode(e.target.value)} />
          </Row>
          <Row>
            <Button variant="dark" className="mb-3 w-100" as={Link} to="/notepicker">
              Join Session
            </Button>
          </Row>
          <Row>
            <Link to="/">Starting a new session?</Link>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
