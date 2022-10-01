import './style.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './img/chat.png'

const li1 = {
    display: 'inline-block',
    fontSize: '20px',
    width: '50%',
    textAlign: 'center',
}

const li = {
    display: 'inline-block',
    fontSize: '20px',
    width: '33.3%',
    textAlign: 'center',
}

function Header() {
    return (
        <div className='header'>
            <div className='Container' style={{ display: 'flex', width: '100%', height: '60px' }}>
                <div className='Icon' style={{ fontSize: '25px', width: '20%' }}>
                    <img src={Logo} style={{ blockSize: '60px' }}>
                    </img>
                </div>
                <div className='Web' style={{ width: '60%' }}>
                    <ui >
                        <li style={li}>
                            download
                        </li>
                        <li style={li}>
                            intro
                        </li>
                        <li style={li}>
                            support
                        </li>
                    </ui>
                </div>
                <div className='Sign' style={{ width: '20%' }}>
                    <ui>
                        <li style={li1}>
                            sign in
                        </li>
                        <li style={li1}>
                            sign up
                        </li>
                    </ui>
                </div>
            </div>
        </div>
    );
}

export default Header;
