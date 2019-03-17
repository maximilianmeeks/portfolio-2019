import React from "react";
import Link from "next/link";
import { Container } from "reactstrap";
import Spirale from "../svgs/spirale2.svg";

const Header = () => (
    
    <Container className="bg-light">
        <Spirale id="header-icon" className="spin mt-3"/> 
        <Link href="/">
        <a className="text-decoration-none">
            <h1 className="text-secondary text-right text-lowercase">Maximilian Meeks</h1>
            <div className="text-right">
                <span className="text-primary text-right">Junior Full Stack Web Developer</span>
            </div>
        </a>
        </Link>
    
    </Container>
)

export default Header