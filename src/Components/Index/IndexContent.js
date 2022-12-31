import React from 'react'
import { Link } from 'react-router-dom';

const IndexContent = () => {
  return (
    <div>
      IndexContent
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