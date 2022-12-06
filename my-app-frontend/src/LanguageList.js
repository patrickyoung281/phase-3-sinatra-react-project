import React from "react";
import { Link } from "react-router-dom";


function LanguageList ( {displayLanguages} ) {

    const renderLanguages = displayLanguages.map((entry)=>{
    return <li key={entry.id}>
      <Link to={`/languages/${entry.id}`}>{entry.language}</Link>
    </li>
    })

    return (
    <div>
        <ul>{renderLanguages}</ul>
    </div>)
}

export default LanguageList;