import React, {useState} from "react";

function EditLanguage ( {setDisplayLanguages, id, displayLanguages, setEditThisLanguage} ) {

const [formData, setFormData] = useState ({
    language: "",
})

function handleChange (e) {
    const name=e.target.name;
    let value=e.target.value;

    setFormData({
        ...formData,
        [name]: value,
    })
}

function handleEditLanguageSubmit (e) {
    
    e.preventDefault();

    fetch(`http://localhost:9292/languages/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": 'application/json',
        },
        body: JSON.stringify(formData)
    })
.then((resp)=>resp.json())
.then((updatedLanguage)=>(update(updatedLanguage)))

function update (updatedLanguage) {
    const updatedLanguages = displayLanguages.map(entry=> {
        return entry.id === updatedLanguage.id ? updatedLanguage : entry
    })
    setDisplayLanguages(updatedLanguages)
}

setFormData({
    language: "",
})

setEditThisLanguage(current=>!current)

}

    return (
        <div>
            <form onSubmit={handleEditLanguageSubmit}>
                <label>
                    Language Name:
                    <input type="text"
                    onChange={handleChange}
                    name="language"
                    value={formData.language}
                    placeholder="Change Language Name Here">
                    </input>
                </label>
                <div>
                    <br></br>
                    <input
                        type="submit"
                        name="submit"
                        value="Update This Language"
                        />
                </div>
            </form>
            
            
        </div>
    )
}

export default EditLanguage;