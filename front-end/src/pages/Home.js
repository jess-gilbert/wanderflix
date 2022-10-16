import "./Home.css";
import SearchBar from "../searchBar";
import WanderflixFullLogo from "../images/WFLogoNew.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="logo-overlaid">
          <Link to="/">
            <img src={WanderflixFullLogo} alt="Wanderflix Logo" />
          </Link>
        </div>
        <p className="Title">
          MOVIE AND TV RECOMMENDATIONS SO YOU CAN TRAVEL THE WORLD WITHOUT
          LEAVING YOUR COUCH
        </p>
        <SearchBar />
      </div>
    </>
  );
}
