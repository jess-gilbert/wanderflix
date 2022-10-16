import './Home.css';
import SearchBar from '../searchBar';

export default function Home() {
    return (
        <>
            <div className="Wallpaper">
                <p></p>
                <p className='Title'> MOVIE AND TV RECOMMENDATIONS SO YOU CAN TRAVEL THE WORLD WITHOUT LEAVING YOUR COUCH</p>
                <SearchBar/>
            </div>
        </>
    )
}