import axios from 'axios';
import React, { useState, useEffect } from 'react';

const PersonList = () => {
    const API_URL = 'https://localhost:7000/Person';
    const [persons, setPersons] = useState(['daniel', 'mela']);
    useEffect(() => {
        axios.get(API_URL)
            .then(res => setPersons(res.data));
    }, []);

    return (
        <div>
            {persons.map(x => 
                <div>{x}</div>
            )}

        </div>
  );
}

export default PersonList