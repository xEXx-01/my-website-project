import React from 'react'
import './Header.css'


function Header() {
    return (
        <>
        <header className='maincontent'>
            <div className='center'>
                <div>
                    <h1 className='center1'>WELCOME</h1>
                    <p className='center2'>
                        find a home animals via <br />
                        online system
                    </p>
                </div>
                <div className="center3">
                    <img src="/headerpic.png" />
                </div>
            </div>
            <div className="center-menu">
                <button className="center-button" id='1'><a href='#'>คำแนะนำ</a></button>
                <button className="center-button" id='2'><a href='#'>พันธุ์สัตว์</a></button>
                <button className="center-button" id='3'><a href='/ร้านค้า'>ร้านค้า</a></button>
            </div>
            <div className='header2'>
                <h2>
                ประเภทสัตว์
                </h2>
                <div className="icon-animal">
                    <a href=''><img src="/dog.png" /></a>
                    <a href='https://www.instagram.com/jame_eeeeeeeeeeeeeeeeeeee/'><img src="/cat.png" /></a>
                    <a href=''><img src="/rabbit.png" /></a>
                    <a href=''><img src="/bird.png" /></a>
                    <a href=''><img src="/fish.png" /> </a>
                    <a href=''><img src="/rodents.png" /></a>
                    <a href=''><img src="/turtle.png" /></a>
                    <a href='/'><img src="/spider.png" /></a>
                    <a href=''><img src="/snake.png" /></a>
                    <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><img src="/bee.png" /></a>
                </div>
            </div>

            <div className="header3">
                <img src="/pexels-samson-katt-.jpg" /> 
                <div className='texth3'>
                <h3 > Happy pet</h3>
                <p>Happy human</p>
                </div>
            </div>

            <div className="header4">
            <h4>สัตว์เลี้ยงแนะนำ</h4>
            <div className="recommand-animal">
                <a href="#">ส1</a>
                <a href="#">ส2</a>
                <a href="#">ส3</a>
                <a href="#">ส4</a>
                <a href="#">ส5</a>
                <a href="#">ส6</a>
                <a href="#">ส7</a> 
                <a href="#">ส8</a>
            </div>
                
            </div>
        </header>
        </>
        
    )
}

export default Header