import React from "react";
import { Link } from "react-router-dom";


function LanguageList ( {displayLanguages} ) {

    const renderLanguages = displayLanguages.map((entry)=>{
    return <h2 key={entry.id}>
        <Link to={`/languages/${entry.id}`}>{entry.language}</Link>
    </h2>
    })

    return (
    <div>
        <ul>{renderLanguages}</ul>
    </div>)
}

export default LanguageList;