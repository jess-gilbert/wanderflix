import { useContext } from "react";
import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import WanderflixLogo from "../images/WLogo.png";

export default function Navbar() {
  const { userSignedIn, setUserSignedIn, setUserId, clearWatchlist } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  const signOutOnClick = () => {
    setUserId(null);
    setUserSignedIn(false);
    clearWatchlist();
    navigate("/SignIn");
  };

  //still need to dispatch user signed in to false when we press sign out
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img className="nav-logo" src={WanderflixLogo} alt="Wanderflix Logo" />
      </Link>
      <ul>
        <CustomLink to="/Discover">DISCOVER</CustomLink>
        {userSignedIn && (
          <CustomLink to="/Watchlist">
            <i className="fa-sharp fa-solid fa-heart"></i>WATCHLIST
          </CustomLink>
        )}
        {!userSignedIn && (
          <>
            <CustomLink to="/SignIn">SIGN IN</CustomLink>
            <CustomLink to="/SignUp">SIGN UP</CustomLink>
          </>
        )}
      </ul>
      {userSignedIn && (
        <button className="sign-out" onClick={signOutOnClick}>
          SIGN OUT
        </button>
      )}
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
