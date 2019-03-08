import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Row } from "reactstrap";


function Pagination (props) {
    const {previous, next} = props;

    return (
        <Row className="mx-auto text-center">
            <Link prefetch passHref href={{pathname: '/project', query: {slug: previous ? previous.slug : null}}}>
                <a>
                    <Row>
                    <i className="fas fa-angle-left fa-3x text-secondary pl-3"></i>
                    </Row>
                    <Row>
                    <span className="text-secondary">previous</span>
                    </Row>
                
                </a>
            </Link>
            <Link prefetch href={{pathname: '/project', query: {slug: next ? next.slug : null}}}>
                <a>
                    <Row>
                        <i className="fas fa-angle-right fa-3x text-secondary ml-5"></i>
                    </Row>
                    <Row>
                        <span className="text-secondary">next</span>
                    </Row>
                </a>
            </Link>
        </Row>
    );
}

Pagination.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default Pagination;
