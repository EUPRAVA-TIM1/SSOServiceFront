import React,{useEffect, useState} from 'react'
import { Navbar,Button,Container,Row,Col,Image } from 'react-bootstrap'
import logo from '../img/LogoTxt.png'
import data from '../Data/data.ts'
import ServiceCard from '../Components/ServiceCard.tsx'
import { useNavigate,useLocation } from 'react-router-dom'
import User from '../Data/user.ts'
import axios from 'axios'


function HomePage() {
  
  const {state} = useLocation();
  const [jwt,setJwt] = useState("")
  const[loggedIn,setLoggedIn] = useState(undefined as User|undefined)
  const navigate = useNavigate()

  useEffect(()=>{
    if(state != null){

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + state.token
      };
      setJwt(state.token)

      if(loggedIn === undefined || !loggedIn){
        axios.get(`${data.ssoServiceUrl + "Whoami"}`,{headers}).then((res) => {
          setLoggedIn(res.data as User)
        }).catch((err) => {
          console.log(err)
          navigate("/Login")
        })
      }
    }else{
      navigate("/Login")
    }
  },[loggedIn,state])

  const logOut = () =>{
    navigate("/Login")
    setLoggedIn(undefined)
  }

  return (
    <>
    <Navbar bg="light" expand="lg" className='mb-5'>
      <Container>
      <Image fluid ={true} src={logo} style={{ maxWidth: "18vh"}}></Image>
        <Button variant="warning" size="lg" type="submit" className='mb-3' onClick={logOut}>
            Odjavite se
        </Button>
      </Container>
    </Navbar>
    <Container className="min-vh-100">
      <Row className='mb-3'>
        <h1>Dobrodošli {loggedIn?.ime + " " + loggedIn?.prezime}</h1>
      </Row>
      <Row>
       {data.allServices.map(data =>{
        return (<Col key={data.name}><ServiceCard service={data} key={data.name} jwt={jwt}></ServiceCard></Col>)
       })}
      </Row>
    </Container>
    </>
  )
}

export default HomePage