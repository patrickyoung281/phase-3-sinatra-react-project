import React from "react";
import { NavLink } from "react-router-dom";

function NavBar () {

    const linkStyles = {
        display: "inline-block",
        width: "150px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      };

    return (
        <div className="navBar">
            <h1>Patrick's Language Database</h1>
            <NavLink
                to="/home"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
                >Home</NavLink>

            <NavLink
                to="/languages"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
                >Languages</NavLink>
        </div>
    )
}

export default NavBar;