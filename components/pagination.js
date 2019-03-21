import React from 'react';
import Link from 'next/link';
import {Container, Row, Col} from "reactstrap";


function Pagination(props) {
    const {previous, next} = props;

    return (
        <Container>
            <Row>
                <Col xs="12" className="d-flex justify-content-between align-items-center">
                    {previous ?
                    <Link prefetch passHref
                          href={{pathname: '/project', query: {slug: previous ? previous.slug : null}}} as={`/project/${previous.slug}`}>
                        <a className="d-flex justify-content-between align-items-center">

                            <i className="fas fa-angle-left text-secondary"></i>
                            <span className="text-secondary ml-2">previous</span>

                        </a>
                    </Link>
                    : <div/>}
                    {next &&
                    <Link prefetch href={{pathname: '/project', query: {slug: next ? next.slug : null}}} as={`/project/${next.slug}`}>
                        <a className="d-flex justify-content-center align-items-center">

                            <span className="text-secondary mr-2">next</span>
                            <i className="fas fa-angle-right text-secondary"></i>

                        </a>
                    </Link>
                    }
                </Col>
            </Row>
        </Container>
    );
}


export default Pagination;
