import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import DisplayLanguages from "./DisplayLanguages";

function LanguagePage ( {displayLanguages, setDisplayLanguages} ) {

    const match = useRouteMatch();
    console.log("match", match);

    return (<div>
        <DisplayLanguages displayLanguages={displayLanguages} setDisplayLanguages={setDisplayLanguages} />
        <Route path={`${match.url}/:languagesId`}>
            <DisplayLanguages />
        </Route>
    </div>
)}

export default LanguagePage;