import { Link, useMatch, useResolvedPath } from "react-router-dom"
import WanderflixLogo from '../images/WFLogo.png';

export default function Navbar() {

    return (
        <nav className="nav">
            <Link to="/" className="site-title"><img src={WanderflixLogo} alt="Wanderflix Logo" /></Link>
            <ul>
                <CustomLink to="/Login">LOG IN / SIGN UP</CustomLink>
                <CustomLink to="/Watchlist"><i class="fa-sharp fa-solid fa-heart"></i>WATCHLIST</CustomLink>
            </ul>
        </nav>
    )
}

/// This function allows the user to see which page
/// is selected as 'active' and then connected with 
/// the CSS will show up as a different colour in the NavBar.

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )

}