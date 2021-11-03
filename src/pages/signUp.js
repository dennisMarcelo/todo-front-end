/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createNewUser } from '../helpers/resquests';

function signUp() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const creteNewUser = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords don\'t equals');
    } else {
      const response = await createNewUser({ name, email, password });

      if (response.token) {
        localStorage.setItem('token', response.token);
        history.push('/');
      } else {
        alert(response.message);
      }
    }
  };

  return (
    <main>
      <div className="sign-up-form">
        <form onSubmit={creteNewUser}>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
        <Link to="/login" className="link-register">sign in</Link>
      </div>
    </main>
  );
}

export default signUp;
