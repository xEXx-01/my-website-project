import React, { useState } from 'react'
import './Register.css'
import Password from './Password';
import Info from './Info';
import Phone from './Phone';
import PhoneConfirm from './PhoneConfirm';

function Register() {
  
  const [page,setPage] = useState(0);
  
  const formtitle = ['สมัครสมาชิก','ยืนยันรหัสOTP','ข้อมูลส่วนตัว','ตั้งรหัสผ่าน',]
  
  const PageDisplay = ()  => {
    if(page === 0){
      return <Phone />
    } else if (page === 1) {
      return <PhoneConfirm/>
    } else if (page === 2 ){
      return <Info />
    }else {
      return <Password />
    }
  }


  return (
    <>
      <div className='login-logo'>
        <nav>
          <h1 ><a href="/">PetHub</a></h1>
        </nav>
      </div>
      <div className="containerReg">
        <div>
          <h1>{formtitle[page]}</h1>
        </div>
        <div>{PageDisplay()}</div>
          <div className="reginput">
            <button disabled={page == formtitle.length - 1}
              onClick={() => { setPage((currPage) => currPage + 1); }}
            >ดำเนินการต่อ</button>
          </div>
      </div>
    </>
  )
}

export default Register