import React from "react";
import { useNavigate } from "react-router-dom";
import "./Discover.css";
import RomeSkyline from "../images/RomeSkyline.png";
import ParisSkyline from "../images/ParisSkyline.png";
import LondonSkyline from "../images/LondonSkyline.png";
import SingaporeSkyline from "../images/SingaporeSkyline.png";

const cities = [
  {
    city: "London",
    city_id: 212,
    class: "london-skyline",
    src: LondonSkyline,
    alt: "London Sky Line",
  },

  {
    city: "Paris",
    city_id: 90,
    class: "paris-skyline",
    src: ParisSkyline,
    alt: "Paris Sky Line",

  },

  {
    city: "Rome",
    city_id: 588,
    class: "rome-skyline",
    src: RomeSkyline,
    alt: "Rome Sky Line",
  },

  {
    city: "Singapore",
    city_id: 4224,
    class: "singapore-skyline",
    src: SingaporeSkyline,
    alt: "Singapore Sky Line",
  },
];

export default function Discover() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="discover-title">Explore your next destination...</h1>
      <h2 className="sub-title">
        Not sure where to head next? Discover curated lists of movies from
        cities around the globe.
      </h2>
      <p className="p1">
      Click through to explore some of our favourite destinations well served by cinema, from the 
      stunning historic back-drops of Rome to the romantic scenery of Paris. </p>

      <p className="p2">Not all of these movies are masterpieces (although there are a few that 
      are) each of them effectively immerses you in the culture of the destination.
      </p>
      <div className="grid-container">
        {cities.map((city) => (
          <div className="grid-item">
            <img
              className={city.class}
              src={city.src}
              alt={city.alt}
              onClick={() =>
                navigate(`/DiscoverResults/${city.city_id}/${city.city}`)
              }
            />
          </div>
        ))}
      </div>
    </>
  );
}
