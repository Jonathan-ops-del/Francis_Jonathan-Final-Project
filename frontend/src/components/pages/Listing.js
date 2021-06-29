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

  render(){
    // If we get a list of entries, display "Hi!"
    if (this.state.user.length > 0) return <h2>Welcome, You have Successfully Logged in!</h2>
    
    // If list of entires is empty, display "You are not logged in"
    return <h2>You are not logged in </h2>
  }   
}