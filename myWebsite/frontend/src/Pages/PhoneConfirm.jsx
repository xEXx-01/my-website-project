import React from "react";

function PhoneConfirm() {
  return (
    <>
      <div className="containerPhoneConfirm">
        <form>
          <div className="inputphonecon">
            <label>โปรดตัวสอบ SMS ที่เบอร์</label>
            <a href="/สมัครสมาชิก">เปลื่ยนเบอร์โทรศัพท์</a>
            <input type="tel" placeholder="กรอกรหัส OTP" required />
          </div>
        </form>
      </div>
    </>
  );
}

export default PhoneConfirm;
