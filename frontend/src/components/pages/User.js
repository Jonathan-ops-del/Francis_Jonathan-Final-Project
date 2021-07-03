import React from 'react'
import { Form, FormGroup, Col, Input, Label, Button, Container, CardBody, Card, CardText } from 'reactstrap'
import axios from "axios"



const User = () => {
    return (
        <Container>
            <Card className="text-white bg-secondary my-5 py-4 text-center">
                <CardBody>
                    <CardText className="text-white m-0">Use form to reach me, I'll get back to you within 24 hours!</CardText>
                </CardBody>
            </Card>
            <Form className="my-5" onSubmit={(e)=>user(e)}>
            <FormGroup row>
                    <Label for="nameEntry" sm={2}>Full Name</Label>
                    <Col sm={10}>
                    <Input type="name" name="name" id="nameEntry" placeholder="Enter your first name only" required/>
                    </Col>
            </FormGroup>
            <FormGroup row>
                    <Label for="pwdEntry" sm={2}>Password (8 Character Mininum)</Label>
                    <Col sm={10}>
                    <Input type="password" name="pwd" id="pwdEntry" placeholder="Enter your Password" required />
                    </Col>
            </FormGroup>
            <FormGroup row>
                    <Label for="emailEntry" sm={2}>Email</Label>
                    <Col sm={10}>
                    <Input type="email" name="email" id="emailEntry" placeholder="Enter email to contact" required/>
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


function user(e){
    e.preventDefault();
      let newUser = {
         name: document.getElementById("nameEntry").value,
         email : document.getElementById("emailEntry").value,
         password: document.getElementById("pwdEntry").value,
    }

    axios.post("http://localhost:4001/users", newUser)
       .then(resp => {
          alert(resp.data.message)
    })

    .catch(err =>{
       console.log(err);
     })
}



    export default User;