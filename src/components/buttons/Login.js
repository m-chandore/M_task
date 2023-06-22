import './Login.css'
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const responseData = await response.json();
        const { firstName, lastName, email, token, id } = responseData;

        localStorage.setItem('user-fname', JSON.stringify(firstName));
        localStorage.setItem('user-lname', JSON.stringify(lastName));
        localStorage.setItem('user-email', JSON.stringify(email));
        localStorage.setItem('user-token', JSON.stringify(token));
        localStorage.setItem('user-id', JSON.stringify(id));

        login({ firstName, lastName, email, token, id });

        setLoading(false);
        navigate('/Product');
      } else {
        setError('Invalid username or password');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
      setError('An error occurred during login');
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
      <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;



