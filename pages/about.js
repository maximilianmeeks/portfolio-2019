
import Layout from '../components/Layout';
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class extends Component{
    render(){
        return(
            <Layout title="About Me" description="Maximilian Meeks | Frontend + Backend Developer, DCI Berlin, Digital Career Institute, 
                                                        HdM Stuttgart, Hochschule der Medien, Web Development and Media Design" 
                                                        header={true} menu={true} footer={true}>
                <Container>
                    <Row>
                        <Col xs="12" md="8" lg="6" className="mx-auto my-3">
                            <h1 className="custom-header mb-4 text-lowercase">About me</h1>

                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="8" lg="6" className="mx-auto mb-3 text-dark">
                            <p>I am a frontend developer with a background in media design. As a successful graduate of DCI's one year course, I was trained in frontend as well as backend programming languages like React, Node.js, and MongoDB.</p>
                            <p>My background in media design includes a bachelor's degree in Audiovisual Media from Stuttgart's Hochschule der Medien and over 10 years of experience with Adobe's Creative Suite.</p>
                            <p>I have created everything from websites to exhibition designs and would be happy help you with your next project!</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="8" lg="6" className="mx-auto mb-3">
                            <img className="w-100" src="static/portrait_web.jpg" alt="Maximilian Meeks - Frontend Developer - Portrait" />
                        </Col>
                    </Row>
                </Container> 
            </Layout>
        )
    }
}


