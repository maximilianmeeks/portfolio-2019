import React from "react";
import Link from "next/link";
import { Container } from "reactstrap";
import Spirale from "../svgs/portfolio_sonne.svg";
import Sun from "../svgs/circle.svg";

const Header = () => (
    
    <Container className="bg-light">
        <Spirale id="header-icon" className="spin"/>
        <Sun id="sun" className="spin-inverse"/>
        <Link href="/">
        <a className="text-decoration-none">
            <h2 className="text-secondary text-right text-lowercase">Maximilian Meeks</h2>
            <div className="text-right">
                <span className="text-primary text-right">Junior Full Stack Web Developer</span>
            </div>
        </a>
        </Link>
    
    </Container>
)

export default Header