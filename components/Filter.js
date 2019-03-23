import React, { Component, Fragment } from 'react';
import { Button, Container, Row, Col} from "reactstrap";
import Link from "next/link";


export default class Filter extends Component {

    render() {
        return(
            <Fragment>

                            <Button outline className="btn btn-secondary my-1 mx-1" size="sm"> 
                                <Link href={{pathname: '/work'}} >
                                    <a className="text-light text-decoration-none">All Projects</a>
                                </Link>
                            </Button>

                        
                            <Button className="btn btn-secondary my-1 mx-1" size="sm"> 
                                <Link href={{pathname: '/work', query: {category: "development"}}} as={`/work/development`}>
                                    <a className="text-light text-decoration-none">Development</a>
                                </Link>
                            </Button>
                                                
                            <Button className="btn btn-secondary my-1 mx-1" size="sm">
                                <Link href={{pathname: '/work', query: {category: "graphic-design"}}}  as={`/work/graphic-design`}>
                                    <a className="text-light text-decoration-none">Graphic Design</a>
                                </Link>
                            </Button>
                        
                        
                            <Button className="btn btn-secondary my-1 mx-1" size="sm">
                                <Link href={{pathname: '/work', query: {category: "illustration"}}}  as={`/work/illustration`}>
                                    <a className="text-light text-decoration-none">Illustration</a>
                                </Link>
                            </Button>
                        
                        
                            <Button className="btn btn-secondary my-1 mx-1" size="sm">
                                <Link href={{pathname: '/work', query: {category: "layout"}}}  as={`/work/layout`}>
                                    <a className="text-light text-decoration-none">Layout</a>
                                </Link>
                            </Button>
                        
                        
                            <Button className="btn btn-secondary my-1 mx-1" size="sm">
                                <Link href={{pathname: '/work', query: {category: "lighting"}}}  as={`/work/lighting`}>
                                    <a className="text-light text-decoration-none">Lighting</a>
                                </Link>
                            </Button>
                                
                    </Fragment>
        )
    }
}
