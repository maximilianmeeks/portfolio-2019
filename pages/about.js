
import Layout from '../components/Layout';
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class extends Component{
    render(){
        return(
            <Layout title="| About Me" description="Author: Maximilian Meeks | DCI Berlin, Digital Career Institute, 
                                                        HdM Stuttgart, Hochschule der Medien, Web Development and Media Design, 
                                                        10 years of experience, Frontend, Backend" 
                                                        header={true} menu={true} footer={true}>
                <Container className="vh-80">
                    <Row>
                        <Col xs="12" md="8" lg="6" className="mx-auto my-3">
                            <h1 className="custom-header mb-4 text-lowercase">About me</h1>

                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="8" lg="6" className="mx-auto mb-3 text-dark">
                            <p>I am a frontend web developer with a background in media design. Currently enrolled in DCI's one year course, I am trained in frontend as well as backend programming languages like React, NodeJS and MongoDB.</p>
                            <p>My background in media design includes a bachelor's degree in Audiovisual Media from Stuttgart's Hochschule der Medien and over 10 years of experience with Adobe's Creative Suite.</p>
                            <p>I have created everything from websites to exhibition designs and would be happy help you with your next project!</p>
                        </Col>
                    </Row>

                </Container> 
            </Layout>
        )
    }
}


