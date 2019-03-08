import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Container, Row, Col } from "reactstrap";


function Pagination (props) {
    const {previous, next} = props;

    return (
        <Container>
            <Row className="d-flex justify-content-center align-items-center">
                <Link prefetch passHref href={{pathname: '/project', query: {slug: previous ? previous.slug : null}}}>
                    <a className="">
                        <Col xs="6" className="d-flex justify-content-center align-items-center">
                            <i className="fas fa-angle-left fa-3x text-secondary"></i>
                            <span className="text-secondary">previous</span>
                        </Col>
                    </a>
                </Link>
                <Link prefetch href={{pathname: '/project', query: {slug: next ? next.slug : null}}}>
                    <a className="">
                        <Col xs="6" className="d-flex justify-content-center align-items-center">
                        <span className="text-secondary">next</span>
                            <i className="fas fa-angle-right fa-3x text-secondary"></i>   
                        </Col>
                    </a>
                </Link>
            </Row>
        </Container>
    );
}

Pagination.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default Pagination;
