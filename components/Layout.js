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
    
    menuHandler (props) {
        if (props.menu===true){
            return <Menu/>
            
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

    render() { 
        return(
            <Fragment>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta name="Description" content={this.props.description}/>
                    <style dangerouslySetInnerHTML={{__html: Styles}}/>
                    <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
                    <title>Maximilian Meeks | {this.props.title}</title>
                </Head>
                
                <Container className="vh-100 main-container">
                    {this.headerHandler(this.props)}
                    {this.menuHandler(this.props)}
                    <Container>
                        <Row>
                            <Col className="bg-light px-0" lg="12">
                                <main>
                                    {this.props.children}
                                </main>
                            </Col>
                        </Row>
                    </Container>
                    {this.footerHandler(this.props)}
                </Container>
            </Fragment>
        )
    }
}

export default Layout;