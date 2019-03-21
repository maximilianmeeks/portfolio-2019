import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem} from "reactstrap";
import Link from "next/link";


export default class Filter extends Component {

    render() {
        return(
            <Breadcrumb>
                <BreadcrumbItem active>
                    <Link href={{pathname: '/work', query: {category: "all"}}} >
                        <a>All Projects</a>
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link href={{pathname: '/work', query: {category: "development"}}} >
                        <a>Development</a>
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link href={{pathname: '/work', query: {category: "graphic-design"}}} >
                        <a>Graphic Design</a>
                    </Link>
                </BreadcrumbItem>
            </Breadcrumb>
        )
    }
}
