import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import DisplayLanguages from "./DisplayLanguages";
import LanguageList from "./LanguageList";

function LanguagePage ( {displayLanguages, setDisplayLanguages} ) {

    const match = useRouteMatch();
    console.log("match", match);

    return (<div>
        <LanguageList displayLanguages={displayLanguages}/>
        <Route path={`${match.url}/:languagesId`}>
            <DisplayLanguages displayLanguages={displayLanguages} setDisplayLanguages={setDisplayLanguages} />
        </Route>
    </div>
)}

export default LanguagePage;