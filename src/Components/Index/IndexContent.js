import React from 'react';
import { Link } from 'react-router-dom';
import PersonList from './PersonList';

const IndexContent = () => {
  return (
    <div>
        <PersonList />
      <p>
        <Link to='/create'>Create</Link>
      </p>
      <p>
        <Link to='/update'>Update</Link>
      </p>
    </div>
  )
}

export default IndexContent