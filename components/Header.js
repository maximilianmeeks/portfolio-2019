import Link from "next/link";
import { Container } from "reactstrap";

const Header = () => (
    
    <Container className="bg-light">
        <i className="fab fa-react fa-spin"></i>
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