import React from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import Spirale from "../svgs/spirale2.svg";
import Abstract from "../svgs/abstract.svg"

export default class Loading extends React.Component {
    render() {
        return(
                <Container className="vh-100">
                    <Row className="h-100 justify-content-center align-items-center">
                        <Col xs="12" className="d-flex justify-content-center align-items-center">
                            <Spinner color="primary"/>
                        </Col>
                    </Row>
                </Container>
        )
    }
}





