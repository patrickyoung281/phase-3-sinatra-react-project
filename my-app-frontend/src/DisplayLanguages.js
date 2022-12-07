import React, { useState } from "react";
import AddLanguage from "./AddLanguage";
import DeleteLanguage from "./DeleteLanguage";
import EditLanguage from "./EditLanguage";
import AddDialect from "./AddDialect";
import { useParams } from "react-router-dom";

function DisplayLanguages ( {displayLanguages, setDisplayLanguages} ) {

const params=useParams();

const [editThisLanguage, setEditThisLanguage] = useState(false)
const [addADialect, setAddADialect] = useState(false)


const button1 = <button onClick={onEditThisLanguage}>Click Here to Edit this Language</button>
const button2 = <button onClick={onAddADialect}>Click here to add a dialect!</button>

const selectedLanguage = displayLanguages[params.languagesId-1]

function onEditThisLanguage () {
  setEditThisLanguage(current => !current)
}

function onAddADialect () {
  setAddADialect(current => !current)
}

const displayDialects = selectedLanguage.dialects.map((entry)=>{
  return entry.dialect_name
})

  return (
    <div>
      <div>
        <h1>{selectedLanguage.language}</h1>
        <br></br>
        <h2>{selectedLanguage.number_of_speakers}</h2>
        <h3>{displayDialects}</h3>
      </div>
      <div>
        <div>{button2}</div>
        <div>{addADialect ? <AddDialect id={selectedLanguage.id} languageName={selectedLanguage.language} setDisplayLanguages={setDisplayLanguages} displayLanguages={displayLanguages} setAddADialect={setAddADialect}/> : null }</div>
        <div>{button1}</div>
        <div>{editThisLanguage ? <EditLanguage id={selectedLanguage.id} setDisplayLanguages={setDisplayLanguages} displayLanguages={displayLanguages} setEditThisLanguage={setEditThisLanguage}/> : null }</div>
        <div><DeleteLanguage id={selectedLanguage.id} displayLanguages={displayLanguages} setDisplayLanguages={setDisplayLanguages}/></div>
        <hr></hr>
      </div>
      <AddLanguage setDisplayLanguages={setDisplayLanguages}/>
    </div>
  )
}

export default DisplayLanguages; 