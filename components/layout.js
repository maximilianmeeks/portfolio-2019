import React, { Component, Fragment } from "react";
/* import Router from "next/router"; */
import Head from "next/head";
import Link from "next/link";
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
    DropdownItem } from 'reactstrap';
import Header from "../components/header";
import Styles from "../css/index.scss";

export default class extends Component {
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
    render() {
        return(
            <Fragment>
                <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <style dangerouslySetInnerHTML={{__html: Styles}}/>
                </Head>
                <Container>
                <Header/>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link href="/contact/">Contact</Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/about/">About</Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/works/">Works</Link>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
                
            </Fragment>
        )
    }
}