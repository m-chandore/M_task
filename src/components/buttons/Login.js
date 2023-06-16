import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login() {
    let item = { email, password };
    console.log(item);
    let result = await fetch("https://dummyjson.com/auth/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    localStorage.setItem("user-fname", JSON.stringify(result.data[0].first_name));
    localStorage.setItem("user-lname", JSON.stringify(result.data[0].last_name));
    localStorage.setItem("user-email", JSON.stringify(result.data[0].email));
    localStorage.setItem("user-token", JSON.stringify(result.token));
    if (result.statuscode === true) {
      navigate('/Buttons/Cart', { replace: true });
    } else {
      alert(result.message);
    }
  }

  return (
    <>
      <h1>Login page</h1>
      <div>
        <input type='text' value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} className='form-control' />
        <br />
        <input type='password' value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} className='form-control' />
        <br />
        <button onClick={login} className='btn btn-primary'>Login</button>
      </div>
    </>
  )
}

export default Login;

