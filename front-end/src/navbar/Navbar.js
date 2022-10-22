import { useContext } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import WanderflixLogo from "../images/WLogo.png";

export default function Navbar() {
  const { userSignedIn } = useContext(GlobalContext);

  //still need to dispatch user signed in to false when we press sign out
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={WanderflixLogo} alt="Wanderflix Logo" />
      </Link>
      <ul>
        <CustomLink to="/Watchlist">
          <i className="fa-sharp fa-solid fa-heart"></i>WATCHLIST
        </CustomLink>
        {!userSignedIn && (
          <>
            <CustomLink to="/SignIn">SIGN IN</CustomLink>
            <CustomLink to="/SignUp">SIGN UP</CustomLink>
          </>
        )}
        {userSignedIn && <CustomLink to="/SignIn">SIGN OUT</CustomLink>}
      </ul>
    </nav>
  );
}

/// This function allows the user to see which page
/// is selected as 'active' and then connected with
/// the CSS will show up as a different colour in the NavBar.

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
