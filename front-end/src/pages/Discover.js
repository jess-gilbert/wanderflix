import "./Discover.css";
import RomeSkyline from "../images/RomeSkyline.png";
import ParisSkyline from "../images/ParisSkyline.png";
import LondonSkyline from "../images/LondonSkyline.png";
import SingaporeSkyline from "../images/SingaporeSkyline.png";

export default function Discover() {
  return (
    <>
     <h1 className="discover-title">Explore your next destination...</h1>
      <h2 className="sub-title">
          Not sure where to head next? Discover curated lists of movies from cities around the globe.
      </h2>
      <div className="grid-container">
        <div className="grid-item">
          <img className = "london-skyline" src={LondonSkyline} alt="London Sky Line" />
          <h3 class="box-title-1">
            LONDON
        </h3>
        </div>
        <div className="grid-item">
          <img className = "rome-skyline" src={RomeSkyline} alt="Rome Sky Line" />
          <h3 class="box-title-2">
            ROME
        </h3>
        </div>
        <div className="grid-item">
          <img className = "paris-skyline" src={ParisSkyline} alt="Paris Sky Line" />
          <h3 class="box-title-3">
            PARIS
          </h3>
        </div>
        <div className="grid-item4">
          <img className = "singapore-skyline" src={SingaporeSkyline} alt="Singapore Sky Line" />
          <h3 class="box-title-4">
            SINGAPORE
        </h3>
        </div>
      </div>
    </>
  )
}
