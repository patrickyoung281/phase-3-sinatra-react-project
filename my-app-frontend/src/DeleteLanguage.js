import React from "react";
import { useHistory } from "react-router-dom";

function DeleteLanguage ( { displayLanguages, setDisplayLanguages, id} ) {
    
  const history = useHistory();
  console.log("history", history);
  const redirect = () => {
    history.push('/languages/')
  }
  console.log(redirect)

    function handleDeleteClick(id) {
        fetch(`http://localhost:9292/languages/${id}`, {
          method: "DELETE",
        })
        .then((deletedLanguage)=>deletedLanguage.json())
        .then((deletedLanguage)=>onDeleteLanguage(deletedLanguage));
      }
      
      function onDeleteLanguage (deletedLanguage) {
        const newList = displayLanguages.filter(entry=>{
          return entry.id !== deletedLanguage.id
        })
        redirect()
        setDisplayLanguages(newList);
        
      }

    return (

        <div>
            <button onClick={()=>handleDeleteClick(id)}>Delete this Language</button>
        </div>
    )
}

export default DeleteLanguage;