import React from 'react'
import './EditProfile.css'

function EditProfile() {
  return (
    <>
    <div div className="containerEditpro">
    <div className="editProfile">
      <h1>แก้ไขข้อมูล</h1>
      <hr />
    </div>


    <div className="editlinfo">
          <div className="edit-user">
            <form>
            <ul>
            <label>ชื่อ</label><input type="text" /><br/>
            <label>นามสกุล</label><input type="text" /><br/>
            <label>เพศ</label><input type="text" /><br/>
            <label>เบอร์โทรศัพท์</label><input type="text" /><br/>
            <label>อีเมล</label><input type="text" /><br/>
            <button>เสร็จสิ้น</button>
            </ul>
            </form>
          </div>
        </div>
    </div>
    </>
  )
}

export default EditProfile