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

function onEditThisLanguage () {
  setEditThisLanguage(current => !current)
}

function onAddADialect () {
  setAddADialect(current => !current)
}

const showLanguages = displayLanguages.map((entry)=>{
    return <div>
    <h1 key={entry.id}>
    {entry.language} <br></br>
    Number of Speakers:{" "} {entry.number_of_speakers} <br></br>
    Dialects: 
      {entry.dialects.map((entry)=>{
      return <ul><li>{entry.dialect_name}</li></ul>

    })
  }
  </h1>
    <div>{button2}</div>
    <div>{addADialect ? <AddDialect id={entry.id} languageName={entry.language} setDisplayLanguages={setDisplayLanguages} displayLanguages={displayLanguages} setAddADialect={setAddADialect}/> : null }</div>
    <div>{button1}</div>
    <div>{editThisLanguage ? <EditLanguage id={entry.id} setDisplayLanguages={setDisplayLanguages} displayLanguages={displayLanguages} setEditThisLanguage={setEditThisLanguage}/> : null }</div>
    <div><DeleteLanguage id={entry.id} displayLanguages={displayLanguages} setDisplayLanguages={setDisplayLanguages}/></div>
    <hr></hr>
    </div>
  })

  return (

    <div>
      {showLanguages}
      <AddLanguage setDisplayLanguages={setDisplayLanguages}/>
    </div>

  )
}

export default DisplayLanguages; 