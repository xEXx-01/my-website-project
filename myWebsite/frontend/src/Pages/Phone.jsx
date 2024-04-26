import React from 'react'
import './Phone.css'



function Phone() {
  return (
    <>
    <div className='containerPhone'>
        <from>
            <div className="phoneinput">
                <label>เบอร์โทรศัพท์</label>
                <input type="tel" placeholder='กรอกเบอร์โทรศัพท์' required></input>
            </div>
        </from>
    </div>
    </>
  )
}

export default Phone