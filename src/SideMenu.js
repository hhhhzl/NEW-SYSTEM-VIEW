import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import { Container, NavLink } from 'react-bootstrap';
import { Nav} from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';



const sideMenudata =[
    {
        title:"Home",
        Icon:<HomeIcon />,
        link: "/home"
    },
    {
        title:"Mailbox",
        Icon:<HomeIcon />,
        link: "/mailbox"
    },
    {
        title:"Table",
        Icon:<HomeIcon />,
        link: "/home"
    },

]


export default function SideMenu() {
    return (
        <div className = 'side-menu'>
            <Nav>  
            <Navbar> 
                <Nav.Link href="#home"><img src="zky1.png"  height="70"/></Nav.Link>           
                
            </Navbar>
            <br />
            <Navbar className = 'side-text'>
                    <Nav.Link style={{color: "white"}} href="#home"><HomeIcon/>评估系统</Nav.Link>
            </Navbar>
            <Navbar className = 'side-text' expand="lg">    
                    <Nav.Link style={{color: "white"}} href="#institute"><AccountBalanceIcon/>机构设置</Nav.Link>               
            </Navbar>
            <Navbar className = 'side-text' expand="lg">    
                    <Nav.Link style={{color: "white"}} href="#member"><AccountBoxIcon/>人员设置</Nav.Link>               
            </Navbar>
            <Navbar className = 'side-text' expand="lg">
                    <NavDropdown style={{color: "white"}} title = "Dropdown">
                        <NavDropdown.Item  href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item  href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item  href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item  href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
            </Navbar>
            </Nav>
        </div>
    )
}
