import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap'
import { NavLink as RouteLink } from 'react-router-dom'


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        
        <Navbar dark color="dark" expand="md" fixed="top" className="navbar">
            <Container>
            <NavbarBrand href="">Jonathan Francis</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={RouteLink} to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                       <NavLink tag={RouteLink} to="/resume">Resume</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouteLink} to="/portfolio">Portfolio</NavLink>
                    </NavItem>
                    <NavItem>
                       <NavLink tag={RouteLink} to="/contact">Create Entry</NavLink>
                    </NavItem>
                    <NavItem>
                       <NavLink tag={RouteLink} to="/user">Create User</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouteLink} to="/login">Login</NavLink>
                    </NavItem>
                </Nav>
            </Collapse> 
            </Container>
        </Navbar>
       
    )
}

export default Navigation