import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Notfound = () => {
  return (
    <>
      <div className="notfound">
        <h1 className="display-1 ">- 404 ERROR -</h1>
        <h1 className="display-1 ">Sorry, Page Not Found !</h1>
        <h4>The Page you are trying to reach is not available</h4>
        <li>
          <NavLink exact to="/" className="notfound-btn">
            Go back To Home
          </NavLink>
        </li>
      </div>
    </>
  );
};

export default Notfound;
