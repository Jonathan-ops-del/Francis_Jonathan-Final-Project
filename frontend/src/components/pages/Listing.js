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
                        <ol>
                        <li> User Id: {user.id}</li>
                        <li> Name: {user.name} </li>
                        <li> Email: {user.email} </li>
                        <li> Phone Number: {user.phoneNumber} </li>
                        <li> Content: {user.content} </li>
                        </ol>
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