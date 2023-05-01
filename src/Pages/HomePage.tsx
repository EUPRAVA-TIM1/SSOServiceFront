import React from 'react'
import { Navbar,Button,Container,Row,Col,Image } from 'react-bootstrap'
import logo from '../img/LogoTxt.png'
import data from '../Data/data.ts'
import ServiceCard from '../Components/ServiceCard.tsx'


function HomePage() {
  return (
    <>
    <Navbar bg="light" expand="lg" className='mb-5'>
      <Container>
      <Image fluid ={true} src={logo} style={{ maxWidth: "18vh"}}></Image>
        <Button variant="warning" size="lg" type="submit" className='mb-3'>
            Odjavite se
        </Button>
      </Container>
    </Navbar>
    <Container className="min-vh-100">
      <Row>
       {data.allServices.map(data =>{
        return (<Col><ServiceCard service={data}></ServiceCard></Col>)
       })}
      </Row>
    </Container>
    </>
  )
}

export default HomePage