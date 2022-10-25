import RomeSkyline from "../images/RomeSkyline.png"
import "./DiscoverResults.css";

export default function HeroContainer() {

return (
  <div className = "row">
    <div className = "left">
      <img className = "london-skyline" src={LondonSkyline} alt="London Sky Line" />
    </div>

    <div className = "right">
      <div className = "content">
        <p> Rome is a destination well served by cinema, from its photogenic hilltop 
        towns and alfresco café culture to its cultural and romantic sensibilities. 
        The good news is that there is no shortage of movies set in Rome.</p>

        <p>Not all of these movies are masterpieces (although there are a few that 
        are). However, in some way, each of them effectively showcases the Italian 
        landscape, its culture or society.</p>

        <p>Discover the top movies featuring Rome below...</p>

      </div>
    </div>
  </div>
  )
}