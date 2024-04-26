import React from 'react'
import './Info.css'


 function Info () {
  return (
    <>
    <div className="containerinfo">
    <form>
          <div className="infoinput">
            <label>ชื่อ</label>
            <input type="text" placeholder="ชื่อของคุณ" required></input>
          </div>
          <div className="infoinput">
            <label>นามสกุล</label>
            <input type="text" placeholder="นามสกุลของคุณ" required></input>
          </div>
          <div className="infoinput">
            <label>อีเมลของคุณ</label>
            <input type="email" placeholder="อีเมลของคุณ" required></input>
          </div>
          <div className="infoinput">
            <label>เพศ</label>
            <input type="text" placeholder="กรุณาระบุเพศ" required></input>
          </div>
          </form>
          <p>มีสมาชิกอยู่แล้ว? <a href='เข้าสู่ระบบ'> เข้าสู่ระบบตรงนี้</a></p>
    </div>
    </>
  )
}
export default Info