import './Header.css'
import  { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="headerContainer">
            <Link className="home_link" to="/">
                <span className="home">&gt; $ cd ~</span>
            </Link>
        </div>
    )
}


export default Header;