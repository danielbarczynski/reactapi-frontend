import axios from 'axios';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const UpdateContent = ({ API_URL, inputAge, inputName, setInputAge, setInputName, persons, setRefresh }) => {
    const location = useLocation();
    const { id, name, age } = location.state;
    useEffect(() => {
        setInputName(name);
        setInputAge(age);
    }, []);

    const newPerson = {
        name: inputName,
        age: inputAge
    }
    const handleUpdate = async () => {
        await axios.put(API_URL + id, newPerson);
        setRefresh(persons);
        clearInputs();
    };
    const clearInputs = () => {
        setInputName('');
        setInputAge('');
    }
    return (
        <div>
            <div>
            </div>
            <h3>Update Person</h3>
            <label htmlFor="">Name </label>
            <input type="text" value={inputName} onInput={e => setInputName(e.target.value)} />
            <br />
            <label htmlFor="">Age </label>
            <input type="text" value={inputAge} onInput={e => setInputAge(e.target.value)} />
            <br />
            <Link to='/'><button onClick={handleUpdate}>Submit</button></Link>
            <p>
                <Link to='/' onClick={clearInputs}>Back to home</Link>
            </p>
        </div>
    )
};

export default UpdateContent;