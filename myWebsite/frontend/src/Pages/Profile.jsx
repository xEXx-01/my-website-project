import React from "react";
import './Profile.css'

function Profile() {
    
    const UserProfile = () => {
        const user = {
          name: '',
          email: '',
          avatar: '',
        };
    }
    return (
    <>
      <div className="login-logo">
        <nav>
          <h1>
            <a href="/">PetHub</a>
          </h1>
        </nav>
      </div>
      < div className="containerProfile">
        <div className="menuProfile">
          <h1>การตั้งค่า</h1>
          <hr />
        </div>
        <div className="Profile">
            <input type="file" placeholder=""/>
        </div>

        <div className="personalinfo">
          <h2>ข้อมูลส่วนตัว</h2>
          <div className="info-user">
            <a href="/EditProfile">แก้ไขข้อมูล</a>
            <br />
            <p>ชื่อ</p>
            <br />
            <p>นามสกุล</p>
            <br />
            <p>เพศ</p>
            <br />
            <p>เบอร์โทรศัพท์</p>
            <br />
            <p>อีเมล</p>
            <br />
          </div>
        </div>
        <div className="chance-pass">
          <h2>ระบบรักษาความปลอดภัย</h2>
          </div>
          <div div className="new-pass">
            <a href="">เปลี่ยนรหัสผ่าน</a>
        </div>
      </div>
    </>
  );
}

export default Profile;
