import React, { Component, Fragment } from 'react';
import { Button, Container, Row, Col} from "reactstrap";
import Link from "next/link";


export default class Filter extends Component {

    render() {
        return(
            <Fragment>

                <Button className="btn btn-secondary my-1 mx-1" size="sm"> 
                    <Link href={{pathname: '/work'}} >
                        <a className="text-light text-decoration-none btn-filter-text">All Projects</a>
                    </Link>
                </Button>

            
                <Button className="btn btn-secondary my-1 mx-1" size="sm"> 
                    <Link href={{pathname: '/work', query: {category: "development"}}}>
                        <a className="text-light text-decoration-none btn-filter-text">Development</a>
                    </Link>
                </Button>
                                    
                <Button className="btn btn-secondary my-1 mx-1" size="sm">
                    <Link href={{pathname: '/work', query: {category: "graphic-design"}}}>
                        <a className="text-light text-decoration-none btn-filter-text">Graphic Design</a>
                    </Link>
                </Button>

                <Button className="btn btn-secondary my-1 mx-1" size="sm">
                    <Link href={{pathname: '/work', query: {category: "illustration"}}}>
                        <a className="text-light text-decoration-none btn-filter-text">Illustration</a>
                    </Link>
                </Button>
                                
                <Button className="btn btn-secondary my-1 mx-1" size="sm">
                    <Link href={{pathname: '/work', query: {category: "layout"}}}>
                        <a className="text-light text-decoration-none btn-filter-text">Layout</a>
                    </Link>
                </Button>
            
                <Button className="btn btn-secondary my-1 mx-1" size="sm">
                    <Link href={{pathname: '/work', query: {category: "video-editing"}}}>
                        <a className="text-light text-decoration-none btn-filter-text">Video Editing</a>
                    </Link>
                </Button>

                <Button className="btn btn-secondary my-1 mx-1" size="sm">
                    <Link href={{pathname: '/work', query: {category: "motion-design"}}}>
                        <a className="text-light text-decoration-none btn-filter-text">Motion Design</a>
                    </Link>
                </Button>
            
                <Button className="btn btn-secondary my-1 mx-1" size="sm">
                    <Link href={{pathname: '/work', query: {category: "lighting"}}}>
                        <a className="text-light text-decoration-none btn-filter-text">Lighting</a>
                    </Link>
                </Button>
                                
            </Fragment>
        )
    }
}
