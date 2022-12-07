import React from "react";
import bannerworldflags from "./images/bannerworldflags.jpg";

function Home () {

    return (
        <div>
            <h1 className="headerText">Herzlich Willkommen!</h1>
            <h2>Welcome to Patrick's Language Database!</h2>
            <h3>This database keeps tracks of languages, their dialects, and how many people speak a given language.</h3>
            <h3>To view or add a language to the database, simply click the "Languages" button above!</h3>
            <img id="homeImage" src={bannerworldflags} alt = "World Flags"/>
            
        </div>
    )
}

export default Home;