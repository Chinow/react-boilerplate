import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC<{}> = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <li>
        <ul><Link to="/buttons">Buttons page</Link></ul>
      </li>
    </div>
  )
};