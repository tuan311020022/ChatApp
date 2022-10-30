import './style.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './img/chat.jpg'

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
                    <Link to="/Home">
                        <img src={Logo} style={{ blockSize: '60px',paddingLeft: '30px'}}></img>
                    </Link>
                </div>
                <div className='Web' style={{ width: '60%' }}>
                    <ui >
                        <li style={li}>
                            <a href = 'https://drive.google.com/drive/folders/1RbIT54QCQ2TGrMk-unHOGq8Jzqsax_z6?usp=sharing'>download</a>
                        </li>
                        <li style={li}>
                            <Link to="/message">message</Link>
                        </li>
                        <li style={li}>
                            <Link to="/support">support</Link>
                        </li>
                    </ui>
                </div>
                <div className='Sign' style={{ width: '20%' }}>
                    <ui>
                        <li style={li1}>
                            <Link to='/signin'> 
                                sign in
                            </Link>
                        </li>
                        <li style={li1}>
                            <Link to='/signup'> 
                                sign up
                            </Link>
                        </li>
                    </ui>
                </div>
            </div>
        </div>
    );
}

export default Header;
