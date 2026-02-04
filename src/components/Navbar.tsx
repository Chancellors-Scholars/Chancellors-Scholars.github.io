import {NavLink} from "react-router-dom";
import CSAIcon from '../img/csa-icon-no-letter.png';

import  { useState } from 'react';
function Navbar() {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
    return(
        <header className="topnav wrapper">
           
                
                    
                <nav>
                    <div >
                    <NavLink to="/" id ="navbar-brand">
                        <img
                            alt="navbar home icon"
                            width="40" height="40"
                            src={CSAIcon}
                            loading="eager"
                            />
                    </NavLink>
                    </div>
                    <button className="burger-menu" onClick={updateMenu}>
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                    </button>
                    <div className="links-desktop">
                            <ul className="topnav__links">
                                <li className="topnav__item"><NavLink to="/" className="topnav__link">Home</NavLink></li>
                                <li className="topnav__item"><NavLink to="/events" className="topnav__link">Events</NavLink></li>
                                <li className="topnav__item"><NavLink to="/about" className="topnav__link">About</NavLink></li>
                                {/*<li className="topnav__item"><NavLink to="/journals" className="topnav__link">CS Journals</NavLink></li> */}
                                <li className="topnav__item"><NavLink to="/meet-the-board" className="topnav__link">Meet the Board</NavLink></li>
                                <li className="topnav__item"><NavLink to="/peer-mentoring" className="topnav__link"> Peer Mentoring </NavLink></li>
                                <li className="topnav__item"><NavLink to="/leaderboard" className="topnav__link"> Leaderboard </NavLink></li>
                                <li className="topnav__item"><NavLink to="/spotlight" className="topnav__link"> Spotlight </NavLink></li>
                                <li className="topnav__item"><NavLink to="/contact" className="topnav__link">Contact</NavLink></li>
                            </ul>
                    </div>
                </nav>
           
            <div className={menu_class}>
                    
                    <ul className="topnav__links" id ="mobile-menu-links">
                        <li className="topnav__item"><NavLink to="/" className="topnav__link">Home</NavLink></li>
                        <li className="topnav__item"><NavLink to="/events" className="topnav__link">Events</NavLink></li>
                        <li className="topnav__item"><NavLink to="/about" className="topnav__link">About</NavLink></li>
                        {/*<li className="topnav__item"><NavLink to="/journals" className="topnav__link">CS Journals</NavLink></li> */}
                        <li className="topnav__item"><NavLink to="/meet-the-board" className="topnav__link">Meet the Board</NavLink></li>
                        <li className="topnav__item"><NavLink to="/peer-mentoring" className="topnav__link"> Peer Mentoring </NavLink></li>
                        <li className="topnav__item"><NavLink to="/spotlight" className="topnav__link"> Spotlight </NavLink></li>
                        <li className="topnav__item"><NavLink to="/contact" className="topnav__link">Contact</NavLink></li>
                    </ul>
            </div>
            
        </header>




        /*
            <nav className="navbar navbar-default csa-nav">
            <div className="container-fluid">
            {/*Brand and toggle get grouped for better mobile display  
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#csa-top-nav"
                aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                </button>
                <NavLink className="navbar-brand" id="navbar-brand" to="/">
                    <img
                        alt="navbar home icon"
                        width="40" height="40"
                        src={CSAIcon}
                        loading="eager"
                        />
                </NavLink>
            </div>

            {/*Collect the nav links, forms, and other content for toggling 
            <div className="collapse navbar-collapse" id="csa-top-nav">
                
            </div>/.navbar-collapse 
          </div>/.container-fluid 
            </nav>
        */
    );
}


export default Navbar;