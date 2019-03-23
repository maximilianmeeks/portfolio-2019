
import Layout from '../components/Layout';
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class extends Component{
    render(){
        return(
            <Layout header={true} menu={true}>
                <Container className="vh-80">
                    <Row>
                        <Col xs="12" md="8" lg="6" className="mx-auto my-3">
                            <h1 className="mb-4 text-primary text-lowercase">About me</h1>

                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="8" lg="6" className="mx-auto mb-3">
                        <p>Full stack web developer with a passion for design.</p>

                        </Col>
                    </Row>
                    <Row>
                    <Col xs="3"  className="mb-5">
                            <i className="fab fa-html5 fa-3x text-primary"></i>
                        </Col>
                        <Col xs="3"  className="mb-5">
                            <i className="fab fa-css3-alt fa-3x text-primary"></i>
                        </Col>
                        <Col xs="3"  className="mb-5">
                            <i className="fab fa-js fa-3x text-primary"></i>
                        </Col>
                        <Col xs="3"  className="mb-5">
                            <i className="fab fa-react fa-3x text-primary"></i>
                        </Col>
                        <Col xs="3"  className="mb-5">
                            <i className="fab fa-node fa-3x text-primary"></i>
                        </Col>
                        <Col xs="3"  className="mb-5">
                            <i className="fas fa-database fa-3x text-primary"></i>
                        </Col>
                        <Col xs="3"  className="mb-5">
                            <i className="fab fa-adobe fa-3x text-primary"></i>
                        </Col>
                    </Row>

                    

                </Container> 
            </Layout>
        )
    }
}


