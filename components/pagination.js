import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Container, Row, Col } from "reactstrap";


function Pagination (props) {
    const {previous, next} = props;

    return (
        <Container>
            <Row /* className="d-flex justify-content-center align-items-center mx-0" */>
                <Col xs="12" className="d-flex justify-content-between align-items-center">
                <Link prefetch passHref href={{pathname: '/project', query: {slug: previous ? previous.slug : null}}}>
                    <a className="d-flex justify-content-center align-items-center">
                      
                            <i className="fas fa-angle-left fa-lg text-secondary"></i>
                            <span className="text-secondary ml-2">previous</span>
                        
                    </a>
                </Link>
                <Link prefetch href={{pathname: '/project', query: {slug: next ? next.slug : null}}}>
                    <a className="d-flex justify-content-center align-items-center">
                        
                            <span className="text-secondary mr-2">next</span>
                            <i className="fas fa-angle-right fa-lg text-secondary"></i>   
                        
                    </a>
                </Link>
                </Col>
            </Row>
        </Container>
    );
}

/* Pagination.propTypes = {
    classes: PropTypes.object.isRequired,
}; */


export default Pagination;
