import React from 'react';
import './Contact.css';
import {Form, Button} from 'react-bootstrap';
export default function Contact() {
  return(
 <div>
      <h1 className="Cont">Contact me</h1>;
      <h2 className="C2">+216 xx xxx xxx</h2>
   
   
<Form className="Formulaire">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Write your message here</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <br/>
  
  <Button variant="primary" type="submit" className="Buut">
    Submit
  </Button>
</Form>
</div>
  )
};