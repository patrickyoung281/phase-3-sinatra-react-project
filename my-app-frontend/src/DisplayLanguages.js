import React, { useState } from "react";
import AddLanguage from "./AddLanguage";
import DeleteLanguage from "./DeleteLanguage";
import EditLanguage from "./EditLanguage";
import AddDialect from "./AddDialect";
import { useParams } from "react-router-dom";

function DisplayLanguages ( {displayLanguages, setDisplayLanguages} ) {

const [editThisLanguage, setEditThisLanguage] = useState(false)
const [addADialect, setAddADialect] = useState(false)

const button1 = <button onClick={onEditThisLanguage}>Click Here to Edit this Language</button>
const button2 = <button onClick={onAddADialect}>Click here to add a dialect!</button>

const params=useParams();
console.log("params", params)

const paramsID = displayLanguages[params.languageId]-1

function onEditThisLanguage () {
  setEditThisLanguage(current => !current)
}

function onAddADialect () {
  setAddADialect(current => !current)
}

  return (
    <div>
      <div>
        <h1>{displayLanguages[params.languagesId].language}</h1>
        <br></br>
        <h2>{displayLanguages[params.languagesId].number_of_speakers}</h2>
        <h3>{displayLanguages[params.languagesId].dialects.map((entry)=>{
          return <h3>{entry.dialect_name}</h3>
        })}</h3>
      </div>
      <div>
        <div>{button2}</div>
        <div>{addADialect ? <AddDialect id={paramsID} languageName={paramsID.language} setDisplayLanguages={setDisplayLanguages} displayLanguages={displayLanguages} setAddADialect={setAddADialect}/> : null }</div>
        <div>{button1}</div>
        <div>{editThisLanguage ? <EditLanguage id={paramsID} setDisplayLanguages={setDisplayLanguages} displayLanguages={displayLanguages} setEditThisLanguage={setEditThisLanguage}/> : null }</div>
        <div><DeleteLanguage id={paramsID} displayLanguages={displayLanguages} setDisplayLanguages={setDisplayLanguages}/></div>
        <hr></hr>
      </div>
      <AddLanguage setDisplayLanguages={setDisplayLanguages}/>
    </div>
  )
}

export default DisplayLanguages; 