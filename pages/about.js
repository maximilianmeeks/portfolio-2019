
import Layout from '../components/Layout';
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class extends Component{
    render(){
        return(
            <Layout header={true} menu={true} footer={true}>
                <Container className="vh-100">
                    <Row>
                        <Col xs="12" md="8" lg="6" className="mx-auto my-3">
                            <h1 className="mb-4 text-primary text-lowercase">About me</h1>

                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="8" lg="6" className="mx-auto mb-3 text-dark">
                            <p>I'm a skilled web developer and media designer based in Berlin, who has been working with Adobe's Creative Suite for over 10 years, including a Bachelor's degree in Audio Visual Media from Hochschule der Medien in Stuttgart.</p>
                            <p>Recently I expanded my repertoire of skills to include state-of-the-art programming languages like React and NextJs.</p>
                            <p>I create everything from websites to exhibition designs and would be happy to help you establish your brand on the market.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="8" lg="6" className="mx-auto mb-3">
                        <Container>
                            <Row className="my-3">
                                <h2 className="text-secondary text-lowercase">Technologies</h2>
                            </Row>
                            <Row>
                                <Col xs="2"  className="d-flex justify-content-center align-content-center mb-5">
                                    <i className="fab fa-html5 fa-2x text-primary"></i>
                                </Col>
                                <Col xs="2"  className="mb-5">
                                    <i className="fab fa-css3-alt fa-2x text-primary"></i>
                                </Col>
                                <Col xs="2"  className="mb-5">
                                    <i className="fab fa-js fa-2x text-primary"></i>
                                </Col>
                                <Col xs="2"  className="mb-5">
                                    <i className="fab fa-react fa-2x text-primary"></i>
                                </Col>
                                <Col xs="2"  className="mb-5">
                                    <i className="fab fa-node fa-2x text-primary"></i>
                                </Col>
                                <Col xs="2"  className="mb-5">
                                    <i className="fas fa-database fa-2x text-primary"></i>
                                </Col>
                                <Col xs="2"  className="mb-5">
                                    <i className="fab fa-adobe fa-2x text-primary"></i>
                                </Col>
                            </Row>
                            </Container>
                        </Col>
                    </Row>

                    

                </Container> 
            </Layout>
        )
    }
}


