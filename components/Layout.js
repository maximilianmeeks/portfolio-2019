import React, { Component, Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import Styles from "../css/index.scss";

import {
        Container,
        Col,
        Row} from 'reactstrap';




class Layout extends Component {
    headerHandler (props) {
        if (props.header===true){
            return  <Link href="/">
                        <Header/>
                    </Link>
        } else {
            return null
        }
    }
    
    footerHandler (props) {
        if (props.footer===true){
            return  <Footer/>
        } else {
            return null
        }
    }
    
    menuHandler (props) {
        if (props.menu===true){
            return <Menu/>
            
        } else {
            return null
        }
    }
    render() {
        
        return(
            <Fragment>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <style dangerouslySetInnerHTML={{__html: Styles}}/>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
                </Head>
                
                <Container className="vh-100">
                    {headerHandler(this.props)}
                    {menuHandler(this.props)}
                    <Container>
                        <Row>
                            <Col className="bg-light px-0" lg="12">
                                {this.props.children}
                            </Col>
                        </Row>
                    </Container>
                    {footerHandler(this.props)}
                </Container>
                
                
            </Fragment>
        )
    }
}

export default Layout;