import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";

const Footer = () => (
    
    <Container className="bg-light pt-3 position-relative">
        <Row>
            <Col xs="12" md="8" lg="6" className="d-flex justify-content-center align-content-center mx-auto border-top py-2">
                <Link href="https://github.com/Dorschnase" target="_blank">
                    <a>
                        <i className="portfolio-link fab fa-github-square fa-2x"></i>
                    </a>
                </Link>
                <Link href="https://www.linkedin.com/in/maximilian-meeks-27a6b2150/" target="_blank">
                    <a>
                        <i className="portfolio-link fab fa-linkedin fa-2x"></i>
                    </a>
                </Link>
                <Link href="mailto:maximilian.meeks@gmail.com" target="_blank">
                    <a>
                        <i class="portfolio-link fas fa-envelope fa-2x"></i>
                    </a>
                </Link>
                
            </Col>
        </Row>  
    </Container>
)

export default Footer