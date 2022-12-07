import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import DisplayLanguages from "./DisplayLanguages";
import LanguageList from "./LanguageList";
import AddLanguage from "./AddLanguage";

function LanguagePage ( {displayLanguages, setDisplayLanguages} ) {

    const match = useRouteMatch();

    return (<div>
        <LanguageList displayLanguages={displayLanguages}/>
        <Route path={`${match.url}/:languagesId`}>
            <DisplayLanguages displayLanguages={displayLanguages} setDisplayLanguages={setDisplayLanguages} />
        </Route>
        <AddLanguage setDisplayLanguages={setDisplayLanguages}/>
    </div>
)}

export default LanguagePage;