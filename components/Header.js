import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";

const Header = () => (
    
    <Container className="bg-light pt-3 position-relative">
        <Row>
            <Col xs="2">
                <img src="/static/headerfisch.png" alt="" className="header-fisch"/>
            </Col>
            <Col xs="10">
                <Link href="/">
                    <a className="text-decoration-none">
                        <h2 className="text-primary text-right text-lowercase custom-header">Maximilian Meeks</h2>
                        <div className="text-right">
                            <span className="text-secondary text-right">Junior Frontend Web Developer</span>
                        </div>
                    </a>
                </Link>
            </Col>
        </Row>
    </Container>
)

export default Header