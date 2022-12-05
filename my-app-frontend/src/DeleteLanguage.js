import React from "react";

function DeleteLanguage ( {displayLanguages, setDisplayLanguages, id} ) {
    
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
        setDisplayLanguages(newList);
      }

    return (

        <div>
            <button onClick={()=>handleDeleteClick(id)}>Delete this Language</button>
        </div>
    )
}

export default DeleteLanguage;