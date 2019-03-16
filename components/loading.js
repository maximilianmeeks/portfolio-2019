import React from "react";
import { Container, Row, Col } from "reactstrap";
import Spirale from "../svgs/spirale.svg";

const Loading = () => 
<Container className="vh-100">
    <Row className="h-100 justify-content-center align-items-center">
        <Col xs="12" className="d-flex justify-content-center align-items-center">
            <Spirale className="spin"/>   
        </Col>
    </Row>
</Container>

export default Loading;
