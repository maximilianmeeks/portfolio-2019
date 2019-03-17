import React from "react";
import { Container, Row, Col } from "reactstrap";
import Spirale from "../svgs/spirale2.svg";
import Abstract from "../svgs/abstract.svg"

const Loading = () => 
<Container className="vh-100">
    <Row className="h-100 justify-content-center align-items-center">
        <Col xs="12" className="d-flex justify-content-center align-items-center">
            <Spirale id="loading-icon" className="spin"/>   
        </Col>
    </Row>
</Container>

export default Loading;
