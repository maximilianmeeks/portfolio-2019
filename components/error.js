import { Container, Row, Col } from "reactstrap";

const Error = () => 
<Container className="vh-100">
    <Row className="h-100 justify-content-center align-items-center">
        <Col xs="12" className="d-flex justify-content-center align-items-center">
            <span>Ooops, looks like an Error :(</span>
        </Col>
    </Row>
</Container>

export default Error;