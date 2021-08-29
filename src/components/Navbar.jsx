import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="brand">
                <NavLink exact to="/"><h2>STAR WARS</h2></NavLink>
            </div>
            <div className="nav_link">
                <ul>
                    <NavLink exact to="/people"><li>People</li></NavLink>
                </ul>
            </div>
        </div> 
    );
}
export default Navbar;