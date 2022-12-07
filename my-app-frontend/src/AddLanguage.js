import React, { useState } from "react";

function AddLanguage ( {setDisplayLanguages} ) {

    const [formData, setFormData] = useState({
        language: "",
        number_of_speakers: ""
      })
      
      function handleChange (e) {
        const name = e.target.name;
        let value = e.target.value;
        
        setFormData({
            ...formData,
            [name]: value
        });
      }
      
      function handleSubmit (e) {
        e.preventDefault();
      
        fetch("http://localhost:9292/languages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        })
        .then((resp)=>resp.json())
        .then((data)=>setDisplayLanguages(data));

      
        setFormData({
            language: "",
            number_of_speakers: ""
        })
      }

return (
    <div>
<div>
        <h2 className="headerText">Add a Language!</h2>
        <form className="headerText" onSubmit={handleSubmit}>
            <label className="Language">
                Language:   
                <input type = "text"
                onChange={handleChange}
                name="language"
                value={formData.language} 
                placeholder="Language">
                </input>
            </label>
            
            <label>
                Number of Speakers:
                <input type="text"
                onChange={handleChange}
                name="number_of_speakers"
                value={formData.number_of_speakers}
                placeholder="Number of Speakers">
                </input>
            </label>

            <div>
                <div>
                <br></br>
                <input 
                    type="submit"
                    name="submit"
                    value="Create Language Entry"
                    />
            </div>
                <h2>Thanks for visiting!</h2>
            </div>
        </form>
    </div>
    </div>
)

}

export default AddLanguage;