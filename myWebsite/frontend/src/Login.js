import React, { useState } from 'react';
import './Login.css';
import { FaFacebook, FaGoogle } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    postJSON(data);
  };

  async function postJSON(data) {
    try {
      const response = await fetch("http://localhost:3333/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <div>
        <div className='login-logo'>
          <nav>
            <h1><a href="/">PetHub</a></h1>
          </nav>
        </div>
        <div className="loginfrom">
          <div className="container-logo">
            <form onSubmit={handleSubmit}>
              <h2>Welcome</h2>
              <div className="inputbox">
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="inputbox">
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div className="remember-forget">
                <label><input type="checkbox" />จดจำรหัสผ่าน</label>
                <a href='#'>ลืมรหัสผ่าน?</a>
              </div>
              <div className="summit-login">
                <button type="submit">Let's go</button>
                <div className="register-link">
                  <p>ยังไม่ได้สมัครสมาชิก?
                    <a href="สมัครสมาชิก">สมัครมาชิก</a>
                  </p>
                </div>
                <div className="orlogin">
                  <p>หรือ ล็อคอินด้วย</p>
                </div>
                <div className="iconlink">
                  <ul>
                    <li><a href="#"><FaFacebook /></a></li>
                    <li><a href="#"><FaGoogle /></a></li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
          <div>
            <img className='bgcat' src='bgcat.jpg' alt='background cat' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
