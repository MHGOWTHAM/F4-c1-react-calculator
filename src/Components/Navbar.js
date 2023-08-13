import React from "react";
import "../style.css"

const Navbar = () =>{
    return(
        <nav className="navbar">
            <h1>Gowtham M H</h1>
            <div className="menu">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    )
}
export default Navbar;