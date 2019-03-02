import Link from "next/link";

const Header = () => (
    
        <div className="container bg-light">
        <i class="fab fa-react fa-spin"></i>
        <Link href="/">
        <a className="text-decoration-none">
        <h1 className="text-secondary text-right text-lowercase">Maximilian Meeks</h1>
        </a>
        </Link>
        
    <div className="text-right">
    <span className="text-primary text-right">Some sick shit is gonna go down here</span>
    </div>
    
    </div>
    

)

export default Header