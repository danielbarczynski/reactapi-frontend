import axios from 'axios';
import React, { useState } from 'react'

const CreateContent = ({API_URL, inputAge, inputName, setInputAge, setInputName}) => {
    const newPerson = {
        name: inputName,
        age: inputAge
    }
    
    const handlePost = () => {
        axios.post(API_URL, newPerson);
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