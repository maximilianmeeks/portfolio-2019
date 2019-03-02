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
    DropdownItem,
    Col,
    Row } from 'reactstrap';
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
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>
                </Head>

                <Container>
                <Link href="/">
                <Header />
                </Link>
                    <Navbar color="light" light expand="md" className="pb-4">
                        
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mx-auto" navbar>
                            <NavItem>
                                <Link href="/about/" >
                                    <a className="nav-link">
                                       About
                                    </a>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/work/" >
                                    <a className="nav-link">
                                        Work
                                    </a>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/contact/" >
                                    <a className="nav-link">
                                       Contact
                                    </a>
                                </Link>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    
                <Container>
                    <Row>
                        <Col className="bg-light px-0" lg="12">
                            {this.props.children}
                        </Col>
                    </Row>
                </Container>
                </Container>
                
                
            </Fragment>
        )
    }
}