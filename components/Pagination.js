import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button } from 'reactstrap';


function Pagination(props) {
    const {previous, next} = props;

    return (
        <div>
            <Link prefetch passHref href={{pathname: '/project', query: {slug: previous ? previous.slug : null}}} as={`/${previous.slug}`}>
                <Button>
                    Previous Project
                </Button>
            </Link>
            <Link prefetch href={{pathname: '/project', query: {slug: next ? next.slug : null}}} as={`/${next.slug}`}>
                <Button className="ml-5">
                    Next Project
                </Button>
            </Link>
        </div>
    );
}

Pagination.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Pagination;
