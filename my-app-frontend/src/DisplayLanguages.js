import React, { useState } from "react";
import DeleteLanguage from "./DeleteLanguage";
import EditLanguage from "./EditLanguage";
import AddDialect from "./AddDialect";
import { useParams } from "react-router-dom";

function DisplayLanguages ( {displayLanguages, setDisplayLanguages} ) {

const params=useParams();

const [editThisLanguage, setEditThisLanguage] = useState(false)
const [addADialect, setAddADialect] = useState(false)

function onEditThisLanguage () {
  setEditThisLanguage(current => !current)
}

function onAddADialect () {
  setAddADialect(current => !current)
}

const correctLanguage = displayLanguages.find((entry)=>{
  return entry.id==params.languagesId
})

const displayDialects = correctLanguage.dialects.map((entry)=>{
  return <li>{entry.dialect_name}</li>
})
const button1 = <button onClick={onEditThisLanguage}>Click Here to Edit this Language</button>
const button2 = <button onClick={onAddADialect}>Click here to add a {correctLanguage.language} dialect!</button>
  return (
    <div>
      <div>
        <h1>{correctLanguage.language}</h1>
        <br></br>
        <h2>{correctLanguage.number_of_speakers}</h2>
        <h2>{correctLanguage.language} Dialects</h2>
        <h3>{displayDialects}</h3>
      </div>
      <div>
        <div>{button2}</div>
        <div>{addADialect ? <AddDialect id={correctLanguage.id} languageName={correctLanguage.language} setDisplayLanguages={setDisplayLanguages} displayLanguages={displayLanguages} setAddADialect={setAddADialect}/> : null }</div>
        <div>{button1}</div>
        <div>{editThisLanguage ? <EditLanguage id={correctLanguage.id} setDisplayLanguages={setDisplayLanguages} displayLanguages={displayLanguages} setEditThisLanguage={setEditThisLanguage}/> : null }</div>
        <div><DeleteLanguage id={correctLanguage.id} displayLanguages={displayLanguages} setDisplayLanguages={setDisplayLanguages}/></div>
        <hr></hr>
      </div>
    </div>
  )
}

export default DisplayLanguages; 