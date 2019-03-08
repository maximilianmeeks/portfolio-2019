import Link from "next/link";
import { Container } from "reactstrap";

const Header = () => (
    
    <Container className="bg-light">
        <i className="fab fa-react fa-spin"></i>
        <Link href="/">
        <a className="text-decoration-none">
            <h1 className="text-secondary text-right text-lowercase">Gregor Baszak</h1>
            <div className="text-right">
                <span className="text-primary text-right">Sick shit is gonna happen here</span>
            </div>
        </a>
        </Link>
    
    </Container>
)

export default Header