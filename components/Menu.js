import React, { Component, Fragment } from "react";
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Col,
    Row } from 'reactstrap';
import Link from "next/link";


class Menu extends Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render(){
        return(
            <Navbar color="light" light expand="md" className="pb-4">
                        
            <NavbarToggler onClick={this.toggle} className="ml-auto"/>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mx-auto" navbar>
                <NavItem>
                    <Link href="/about" >
                        <a className="nav-link">
                           About
                        </a>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="/work" >
                        <a className="nav-link">
                            Work
                        </a>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="/contact" >
                        <a className="nav-link">
                           Contact
                        </a>
                    </Link>
                </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        )
    }
}

export default Menu;