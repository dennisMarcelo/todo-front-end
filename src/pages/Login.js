/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getToken } from '../helpers/resquests';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getLogin = async (event) => {
    event.preventDefault();
    const response = await getToken(email, password);

    if (response.token) {
      localStorage.setItem('token', response.token);
      history.push('/');
    } else {
      alert(response.message);
    }
  };

  return (
    <main className="login">
      <div className="login-form">
        <form onSubmit={getLogin}>
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
          <button type="submit">submit</button>
        </form>
        <Link to="/signUp" className="link-register">sign up</Link>
      </div>
    </main>
  );
}

export default Login;
