import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ViewUser = () => {
  const [user, setUser] = useState({
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  });
  const { email, first_name, last_name, avatar } = user;

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async (e) => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
  };

  return (
    <>
      <div className="container py-4 ">
        <Link className="btn btn-primary " to="/">
          back to Home
        </Link>
        <h1 className="display-4 text-center mb-4 ">User : {first_name}</h1>

        <hr />
        <div className="container offset-sm-3 mb-4">
          <ul className="list-group w-50" offset-sm-3>
            <li className="list-group-item">name: {user.email}</li>
            <li className="list-group-item">user name: {user.first_name}</li>
            <li className="list-group-item">email: {user.last_name}</li>
            <li className="list-group-item">phone: {user.avatar}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ViewUser;
