import React, {Component} from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import Layout from "./Layout";

export default class Loading extends Component {
    render() {
        return(
            <Layout footer={false} header={false} menu={false}>
                <Container className="vh-100">
                    <Row className="justify-content-center align-items-center">
                        <Col xs="12" className="d-flex justify-content-center align-items-center">
                            <div className="spacer"></div>
                            <Spinner color="primary"/>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        )
    }
}





