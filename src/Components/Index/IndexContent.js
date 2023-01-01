import CreateContent from '../Create/CreateContent';
import PersonList from './PersonList';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IndexContent = ({API_URL, persons, setPersons, inputAge, inputName, setInputAge, setInputName, refresh, setRefresh}) => {
  useEffect(() => {
      console.log('s')
      axios.get(API_URL)
          .then(res => {
              setPersons(res.data)            
          });
  }, [refresh]);

  return (
    <div>
        <CreateContent API_URL={API_URL} persons={persons} inputName={inputName} setInputName={setInputName} inputAge={inputAge} setInputAge={setInputAge} setRefresh={setRefresh} />
        <PersonList API_URL={API_URL} persons={persons} setRefresh={setRefresh} />
    </div>
  )
};

export default IndexContent;