import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  });

  const { email, first_name, last_name, avatar } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, user);
    navigate('/');
  };

  const loadUser = async (e) => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
  };
  return (
    <>
      <div className="container shadow outline">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit A User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div class="mb-3">
              <br />
              <input
                type="email"
                className="form-control form-control-lg"
                id="email"
                placeholder="Enter your Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type="text"
                className="form-control form-control-lg"
                id="first_name"
                placeholder="Enter your First Name"
                name="first_name"
                value={first_name}
                onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type="text"
                className="form-control form-control-lg"
                id="last_name"
                placeholder="Enter your Last Name"
                name="last_name"
                value={last_name}
                onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type="text"
                className="form-control form-control-lg"
                id="image_source"
                placeholder="Enter your Image Link"
                name="avatar"
                value={avatar}
                onChange={(e) => onInputChange(e)}
              />
              <br />
            </div>

            <button className="btn btn-warning btn-block">Update User</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUser;
