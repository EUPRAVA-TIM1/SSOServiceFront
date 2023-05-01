import React from 'react'
import { Card, Button, Form,Image } from 'react-bootstrap'
import logo from '../img/Logo.png'

function LogInForm() {
  return (
    <Card style={{ width: '40%' }}  bg="primary">
      <Card.Body className='text-center d-flex flex-column  justify-content-center align-items-center'>
        <Image fluid ={true} src={logo} style={{ maxWidth: "30%" , filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)'}}></Image>
        <Form style={{ width: '80%' }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='text-light' style={{ fontSize: '1.8em' }}>JMBG:</Form.Label>
            <Form.Control type="text" style={{ fontSize: '1.2em' ,padding: '10px'}} placeholder="Unesite jmbg" />
          </Form.Group>
          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Label style={{ fontSize: '1.8em' }} className='text-light'>Lozinka:</Form.Label>
            <Form.Control style={{ fontSize: '1.2em' ,padding: '10px'}} type="password" placeholder="Lozinka" />
          </Form.Group>
          <Button variant="warning" size="lg" type="submit" className='mb-3'>
            Ulogujte se
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default LogInForm