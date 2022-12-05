import React, { useState } from "react";

function AddDialect ( {languageName, displayLanguages, setDisplayLanguages, id, setAddADialect} ) {

    const [formData, setFormData] = useState({
        dialect_name: "",
        language_id: id
    })

    function handleChange (e) {
        const name = e.target.name;
        let value = e.target.value;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function handleSubmit (e) {
        e.preventDefault();

        fetch(`http://localhost:9292/dialects`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            const selectedLanguage = displayLanguages.find(language=>language.id===data.language_id)
            const updatedLanguage = {
                ...selectedLanguage, 
                dialects: [...selectedLanguage.dialects, data]
            }
            const updatedLanguages = displayLanguages.map(dl=> dl.id === updatedLanguage.id ? updatedLanguage : dl )
            setDisplayLanguages(updatedLanguages)
        })

        setFormData({
            dialect_name: ""
        })

        setAddADialect(current=>!current)
    }

    return (
        <div>
            <h3>Add {languageName} Dialects Here!</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Dialect Name:
                    <input 
                    type = "text"
                    onChange={handleChange}
                    name="dialect_name"
                    value={formData.dialect_name}
                    placeholder="Dialect Name">
                    </input>
                </label>
                <br></br>
                <input
                type="submit"
                name="submit"
                value="Add Dialect">
                </input>

            </form>
            
        </div>
    )
}

export default AddDialect;