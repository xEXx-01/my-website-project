import React from 'react'
import './Password.css'


function Password() {
  return (
      <div className="containerpass">
        <form>
          <div className="passinput">
            <label>รหัสผ่าน</label>
            <input type="password" placeholder="ใส่รหัสผ่านของคุณ" required></input>
          </div>
          <div className="passinput">
            <label>ยืนยันรหัสผ่าน</label>
            <input type="password" placeholder="ใส่รหัสผ่านของคุณอีกครั้ง" required></input>
          </div>
          </form>
          <p> รหัสผ่านมีความยาว 6 ตัว<br />
              มีตัวอักษรภาษาอังกฤษ<br />
              มีตัวเลข
          </p>
      </div>
      )
}

      export default Password