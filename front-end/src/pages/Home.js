import './Home.css';
import WanderflixFullLogo from '../images/WFLogoNew.png';
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <div className="home-container">
                <div className='logo-overlaid'>
                    <Link to="/"><img src={WanderflixFullLogo} alt="Wanderflix Logo" /></Link>
                </div>
            </div>
        </>
    )
}