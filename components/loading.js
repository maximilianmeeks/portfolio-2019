import React, {Component} from "react";
import { Container, Row, Col, Spinner } from "reactstrap";

export default class Loading extends Component {
    render() {
        return(
                <Container className="vh-100">
                    <Row className="justify-content-center align-items-center">
                        <Col xs="12" className="d-flex justify-content-center align-items-center">
                            <div className="spacer"></div>
                            <Spinner color="primary"/>
                        </Col>
                    </Row>
                </Container>
        )
    }
}





