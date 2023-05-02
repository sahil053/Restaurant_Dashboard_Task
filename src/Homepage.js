import Search from "./Searchbar";
import './HomePage.css'

function HomePage(){
    return(
        <>
            <nav className="vertical-menu-wrapper">
                <div className="vertical-menu-logo">
                <div>LOGO</div>
                <span className="open-menu-btn"><hr /><hr /><hr /></span>
                </div>
                <ul className="vertical-menu">
                    <li>Restaurants</li>
                    <li>Bookmarks</li>
                    <hr />
                </ul>
            </nav>
             <Search />
        </>
    );
}

export default HomePage;