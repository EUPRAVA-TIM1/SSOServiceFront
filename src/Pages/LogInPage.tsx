import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import LogInForm from '../Components/LogInForm.tsx'

function LogInPage() {
  return (
    <div className='d-flex flex-column min-vh-100 justify-content-center align-items-center bg-light'>
          <h1 className='mb-3'>Dobrodošli</h1>
          <LogInForm></LogInForm>
    </div>
  )
}

export default LogInPage