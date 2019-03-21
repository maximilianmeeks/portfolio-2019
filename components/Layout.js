import React, { Component, Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

import Header from "./Header";
import Menu from "./Menu";
import Styles from "../css/index.scss";

import {
        Container,
        Col,
        Row} from 'reactstrap';

function headerHandler (props) {
    if (props.header===true){
        return  <Link href="/">
                    <Header/>
                </Link>
    } else {
        return null
    }
}

function menuHandler (props) {
    if (props.menu===true){
        return <Menu/>
        
    } else {
        return null
    }
}



class Layout extends Component {

    render() {
        
        return(
            <Fragment>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <style dangerouslySetInnerHTML={{__html: Styles}}/>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>
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
                </Container>
                
                
            </Fragment>
        )
    }
}

export default Layout;