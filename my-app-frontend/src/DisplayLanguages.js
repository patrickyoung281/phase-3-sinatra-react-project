import React, { useState, useEffect } from "react";
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

const [correctLanguage, setCorrectLanaguage] = useState("");
const [correctDialects, setCorrectDialects] = useState("");

useEffect(()=>{
  setCorrectLanaguage(displayLanguages.find((entry)=>{
  return entry.id==params.languagesId
}))
},[displayLanguages, params])

useEffect(()=>{
  if (correctLanguage) setCorrectDialects(correctLanguage.dialects.map((entry)=>{
    return <li>{entry.dialect_name}</li>
  }))
},[correctLanguage])

const button1 = <button onClick={onEditThisLanguage}>Click Here to Edit this Language</button>
const button2 = <button onClick={onAddADialect}>Click here to add a {correctLanguage ? correctLanguage.language : "Loading..."} dialect!</button>

  return (
    <div>
      <div>
        <h1>{correctLanguage ? correctLanguage.language : "Loading..."}</h1>
        <br></br>
        <h2>Number of Speakers: {correctLanguage ? correctLanguage.number_of_speakers : "Loading..."}</h2>
        <h2>{correctLanguage ? correctLanguage.language : "Loading..."} Dialects</h2>
        <h3>{correctDialects ? correctDialects : "Loading..."}</h3>
      </div>
      <div>
        <div>{button2}</div>
        <div>{addADialect ? <AddDialect id={correctLanguage.id} languageName={correctLanguage.language} setDisplayLanguages={setDisplayLanguages} displayLanguages={displayLanguages} setAddADialect={setAddADialect}/> : null }</div>
        <div>{button1}</div>
        <div>{editThisLanguage ? <EditLanguage id={correctLanguage.id} setDisplayLanguages={setDisplayLanguages} displayLanguages={displayLanguages} setEditThisLanguage={setEditThisLanguage}/> : null }</div>
        <div>{correctLanguage ? <DeleteLanguage id={correctLanguage.id} displayLanguages={displayLanguages} setDisplayLanguages={setDisplayLanguages}/> : "Loading..."}</div>
        <hr></hr>
      </div>
    </div>
  )
}

export default DisplayLanguages; 