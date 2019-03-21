import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem} from "reactstrap";
import Link from "next/link";


export default class Filter extends Component {

    render() {
        return(
            <Breadcrumb>
                <BreadcrumbItem active>
                    <Link href={{pathname: '/work'}} >
                        <a>All Projects</a>
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link href={{pathname: '/work', query: {category: "development"}}} as={`/work/development`}>
                        <a>Development</a>
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link href={{pathname: '/work', query: {category: "graphic-design"}}}  as={`/work/graphic-design`}>
                        <a>Graphic Design</a>
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link href={{pathname: '/work', query: {category: "illustration"}}}  as={`/work/illustration`}>
                        <a>Illustration</a>
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link href={{pathname: '/work', query: {category: "lighting"}}}  as={`/work/lighting`}>
                        <a>Lighting</a>
                    </Link>
                </BreadcrumbItem>   
            </Breadcrumb>
        )
    }
}
