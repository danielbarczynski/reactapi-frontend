import axios from 'axios';
import React from 'react'

const CreateContent = ({API_URL, inputAge, inputName, setInputAge, setInputName, setRefresh, persons}) => {
    const newPerson = {
        name: inputName,
        age: inputAge
    }
    
    const handlePost = async () => {
        await axios.post(API_URL, newPerson);
        setRefresh(persons);
        setInputName('');
        setInputAge('');
    };

    return (
        <div>
            <h3>Create Person</h3>
            <label htmlFor="">Name </label>
            <input type="text" value={inputName} onInput={e => setInputName(e.target.value)} />
            <br />
            <label htmlFor="">Age </label>
            <input type="text" value={inputAge} onInput={e => setInputAge(e.target.value)}/>
            <br />
            <button onClick={handlePost}>Submit</button>
        </div>
    )
};

export default CreateContent;