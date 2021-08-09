import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import './App.css';
import { Container } from 'react-bootstrap';
import { Nav} from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

export default function NavBarTest() {
    return (
        <Navbar className="App-header" variant="info">
            <Container>
            <Navbar> 
                <Nav.Link><img src="zky2.png"  height="50"/></Nav.Link>           
                
            </Navbar>
                <Nav className="me-auto">
                </Nav>
                欢迎你，超级管理员 
                <Nav className="ml-auto">
                    
                    <NavDropdown
                        title={<div><Image src="何炙霖一寸.png" width="30" height="40"border = "1" roundedCircle/></div>}
                        id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">修改密码</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">退出</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>

    );
}