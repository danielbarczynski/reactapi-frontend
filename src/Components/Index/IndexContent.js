import React from 'react';
import CreateContent from '../Create/CreateContent';
import PersonList from './PersonList';

const IndexContent = ({API_URL, persons, setPersons, inputAge, inputName, setInputAge, setInputName}) => {
  return (
    <div>
        <CreateContent API_URL={API_URL} persons={persons} setPersons={setPersons} inputName={inputName} setInputName={setInputName} inputAge={inputAge} setInputAge={setInputAge} />
        <PersonList API_URL={API_URL} persons={persons} setPersons={setPersons} />
    </div>
  )
};

export default IndexContent;