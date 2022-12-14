
import React, { useEffect, useState } from "react";
import './App.css';
import NavBar from "./NavBar";
import { Route } from "react-router-dom";
import Home from "./Home";
import LanguagePage from "./LanguagePage";

function App() {
  
  const [displayLanguages, setDisplayLanguages] = useState([])
  
  useEffect(()=>{
    fetch("http://localhost:9292/languages")
    .then((resp)=>resp.json())
    .then((data)=>setDisplayLanguages(data));
  },[])

  return (
    <div className="App">
      <NavBar />
        <Route path="/home">
        <Home />
      </Route>
      <Route path="/languages">
        <LanguagePage displayLanguages={displayLanguages} setDisplayLanguages={setDisplayLanguages} />
      </Route>
  </div>
  );
}

export default App;
