
import Layout from '../components/Layout';
import React, { Component } from "react";
import { Container } from "reactstrap";

export default class extends Component{
    render(){
        return(
            <Layout header={true} menu={true}>
                <Container>
                    <p>about</p>
                </Container> 
            </Layout>
        )
    }
}


