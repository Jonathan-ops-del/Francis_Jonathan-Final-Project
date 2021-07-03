import React from 'react'
import { Form, FormGroup, Col, Input, Label, Button, Container, CardBody, Card, CardText } from 'reactstrap'
import axios from "axios"



const Contact = () => {
    return (
        <Container>
            <Card className="text-white bg-secondary my-5 py-4 text-center">
                <CardBody>
                    <CardText className="text-white m-0">Use form to reach me, I'll get back to you within 24 hours!</CardText>
                </CardBody>
            </Card>
            <Form className="my-5" onSubmit={(e)=>contact(e)}>
                <FormGroup row>
                    <Label for="emailEntry" sm={2}>Email</Label>
                    <Col sm={10}>
                    <Input type="email" name="email" id="emailEntry" placeholder="Enter email to contact" required />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="phoneEntry" sm={2}>Phone Number</Label>
                    <Col sm={10}>
                    <Input type="phone" name="phone" id="phoneEntry" placeholder="Enter phone number" required  />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="nameEntry" sm={2}>Full Name</Label>
                    <Col sm={10}>
                    <Input type="name" name="name" id="nameEntry" placeholder="Enter your first name only" required />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="messageEntry" sm={2}>Type your Message Here</Label>
                    <Col sm={10}>
                    <Input type="textarea" name="text" id="messageEntry" placeholder="Type Here!" required />
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                    <Button color="success">Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        </Container>
      )
    }

function contact(e){
    e.preventDefault();
    let newEntries = {
        name: document.getElementById("nameEntry").value,
        email: document.getElementById("emailEntry").value,
        phoneNumber : document.getElementById("phoneEntry").value,
        content: document.getElementById("messageEntry").value
}
axios.post("http://localhost:4001/contact_form/entries", newEntries)
.then(resp => {
    alert(resp.data.message)
})
.catch(err =>{
    console.log(err);
})
}



    export default Contact
