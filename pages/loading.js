
import Layout from '../components/Layout';
import React, { Component } from "react";
import { Container } from "reactstrap";
import Loading from "../components/loading";

export default class extends Component{
    render(){
        return(
            <Layout header={true} menu={true}>
                <Container>
                    <Loading/>
                    <p>about</p>
                </Container> 
            </Layout>
        )
    }
}


