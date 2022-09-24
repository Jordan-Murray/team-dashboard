import React from 'react'
import '../App.css';
import logo from '../Images/SHLogo.png'


export default function HeaderBar(){
    return (
        <div className='header'>
            <img className="logo-image" src={logo}></img>
            <span className='header-text'>SH Team Dashboard</span>
        </div>
    )
}