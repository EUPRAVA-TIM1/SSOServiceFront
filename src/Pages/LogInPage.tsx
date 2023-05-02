import React from 'react'
import { Form} from 'react-bootstrap'
import LogInForm from '../Components/LogInForm.tsx'

function LogInPage() {
  return (
    <div className='d-flex flex-column min-vh-100 justify-content-center align-items-center bg-light'>
          <h1 style={{fontSize: '46px'}}>Dobrodošli</h1>
          <Form.Text className="text-muted mb-3" style={{fontSize: 'large'}}>
            Molimo vas da se ulogujete na portal e-uprave
          </Form.Text>
          <LogInForm></LogInForm>
    </div>
  )
}

export default LogInPage