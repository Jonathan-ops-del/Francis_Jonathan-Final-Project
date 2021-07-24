import React, {Component} from 'react'
import axios from "axios"

export default class Listing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: []
        }
    }

    componentDidMount() {
        const token = localStorage.getItem("token")
        console.log("This is the token", token)
        const config = {
            headers :{
                Authorization :  `Bearer ${token}`
            }
        }
        
        axios.get("http://localhost:4001/contact_form/entries", config)
        .then(res => {
            console.log(res)
            this.setState({
                user: res.data
            })
        })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
            {
            this.state.user.length > 0 && (
                        <div>
                        <h2>Welcome, You have Successfully Logged in!</h2>
                  
                        {
                        this.state.user.map(user => (
                        <div>
                        <p> User Id: {user.id}</p>
                        <p> Name: {user.name} </p>
                        <p> Email: {user.email} </p>
                        <p> Phone Number: {user.phoneNumber} </p>
                        <p> Content: {user.content} </p>
                        </div>
                        ))
                        }
                        </div>
            )          
            }
          </div>
    
        )
    }
}