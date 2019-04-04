import React from "react";
import Link from "next/link";
import { Container } from "reactstrap";
import Spirale from "../svgs/portfolio_sonne.svg";
import Sun from "../svgs/circle.svg";

const Header = () => (
    
    <Container className="bg-light pt-3 position-relative">
{/*         <Spirale id="header-icon" className="spin"/>
        <Sun id="sun" className="spin-inverse"/> */}
        <img src="/static/rauchbock.png" alt="" className="header-bock position-absolute"/>
        <Link href="/">
        <a className="text-decoration-none">
            <h2 className="text-primary text-right text-lowercase custom-header">Maximilian Meeks</h2>
            <div className="text-right">
                <span className="text-secondary text-right">Junior Frontend Developer</span>
            </div>
        </a>
        </Link>
    
    </Container>
)

export default Header