import React from 'react'
import {Form , Button} from 'react-bootstrap'

const FormPage = () => {
  return (
    <Form style={{width:'30%',background: 'rgba(255,255,255,0.5)',margin:'10rem',marginLeft:'30rem',padding:'2rem',borderRadius:'10%'}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{fontSize:'20px'}}>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text style={{color:'#535c68', fontSize:'15px'}} className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{fontSize:'20px'}}>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button style={{backgroundColor:'black',width:'50%', marginLeft:'6rem'}} variant="primary" type="submit">
    Submit
  </Button>
</Form>
  )
}

export default FormPage