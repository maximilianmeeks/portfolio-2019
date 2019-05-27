import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";

const Footer = () => (
    
    <Container className="bg-light pt-3 position-relative">
        <Row>
            <Col xs="6" md="3" lg="3" className="d-flex justify-content-center align-content-center mx-auto border-top py-2">
                <Link href="https://github.com/maximilianmeeks">
                    <a target="_blank">
                        <i className="portfolio-link fab fa-github-square fa-2x"></i>
                    </a>
                </Link>
                <Link href="https://www.linkedin.com/in/maximilianmeeks/">
                    <a target="_blank">
                        <i className="portfolio-link fab fa-linkedin fa-2x"></i>
                    </a>
                </Link>
                <Link href="mailto:maximilian.meeks@gmail.com">
                    <a target="_blank">
                        <i className="portfolio-link fas fa-envelope fa-2x"></i>
                    </a>
                </Link>
                
            </Col>
        </Row>  
    </Container>
)

export default Footer