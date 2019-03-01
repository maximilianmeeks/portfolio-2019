import Link from 'next/link';
import React, { Component } from "react";
import { Container } from "reactstrap";
import Layout from "../components/layout";

export default class extends Component{
    render(){
        return(
        <Layout {...this.props}>
            <Container>
                <p>
                    Dis my stuff
                </p>
            </Container>
        </Layout>
        
        )
    }
}

