import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap'
import axios from "axios"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: ''
        }
        this.login = this.login.bind(this);
    }

    login(e) {
        e.preventDefault();
           let registeredUser = {
              email: document.getElementById("emailEntry").value,
              password : document.getElementById("passwordEntry").value,
       }   
    
       axios.post("http://localhost:4001/auth", registeredUser)
       .then(res => {
           const token = res.data;
            localStorage.setItem("token", token)
            this.setState({token})
        })
       .catch(err =>{
        console.log(err);
        })
    }



    render() {
        const {token} = this.state;
        console.log("LOGIN PAGE TOKEN", token)

        if(token) return <Redirect to='/submissions'/>
        
        return (
            <Container>
              <Form className="my-5" onSubmit={(e)=>this.login(e)}>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="emailEntry" sm={2}>Email</Label>  
                      <Input type="email" name="email" id="emailEntry" placeholder="Enter email to contact" required />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="passwordEntry">Password</Label>
                      <Input type="password" name="password" id="passwordEntry" placeholder="Valid password" required/>
                    </FormGroup>
                  </Col>
                </Row>
                <Button color="success">Sign in</Button>
              </Form>
          </Container>
        )
    }
}

export default Login