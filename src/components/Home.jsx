import React from 'react';
import starwar from "../images/starwar.png";

const Home=()=>{
    return(
            <div className="hero_div">
                <div className="hero_content">
                    <h1>STAR WARS</h1>
                    <h4>The Legacy Of Legend</h4>
                </div>
                <div className="hero_img">
                    <img src={starwar} alt="star war"></img>
                </div>
            </div>
    );
}
export default Home;