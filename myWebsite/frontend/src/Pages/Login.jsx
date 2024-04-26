import React from 'react'
import './Login.css'
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";




function Login() {
  return (
    <>
      <div>
        <div className='login-logo'>
          <nav>
            <h1 ><a href="/">PetHub</a></h1>
          </nav>
        </div>
        <div className="loginfrom">
          <div className="container-logo">
            <form action=''>
              <h2>Welcome</h2>
              <div className="inputbox">
                <input type="email" placeholder='Email' required/>
              </div>
              <div className="inputbox">
                <input type="password" placeholder='Password' required></input>
              </div>
              <div className="remember-forget">
                <label><input type="checkbox" />จดจำรหัสผ่าน</label>
                <a href='#'>ลืมรหัสผ่าน?</a>
              </div>
              <div className="summit-login">
                <button>Let's go</button>
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
                    {/* <li><a href="#"><FaFacebook /></a></li>
                    <li><a href="#"><FaGoogle /></a></li> */}
                  </ul>
                </div>
              </div>
              
            </form>
          </div>
          <div>
          <img className='bgcat' src='bgcat.jpg'></img>
          </div>
        </div>

      </div>


    </>
  )
}

export default Login