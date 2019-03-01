import Link from "next/link";

const Header = () => (
    <div className="container bg-light">
        <i class="fab fa-react fa-spin"></i>
        <Link href="/">
        <h1 className="text-primary text-right text-lowercase">Maximilian Meeks</h1>
        </Link>
        
    <div className="text-right">
    <span className="text-secondary text-right">Some sick shit is gonna go down here</span>
    </div>
        
    </div>
)

export default Header