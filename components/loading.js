import { Container, Row, Col } from "reactstrap";

const Loading = () => 
<Container className="vh-100">
    <Row className="h-100 justify-content-center align-items-center">
        <Col xs="12" className="d-flex justify-content-center align-items-center">
            <i className="far fa-smile fa-spin fa-3x loading"></i>
        </Col>
    </Row>
</Container>

export default Loading;
