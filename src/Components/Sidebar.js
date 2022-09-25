import React from 'react'
import '../App.css';
import logo from '../Images/SHLogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock, faCodePullRequest } from "@fortawesome/free-solid-svg-icons";

library.add(faClock,faCodePullRequest);



export default function Sidebar(){
    return (
        <div className='sidebar tile-with-blur'>
            <img className="logo-image" src={logo}></img>
            <div className='button-containers'>
                <FontAwesomeIcon icon="fa-solid fa-clock" className='fa-2xl icon clicked'/>
                <FontAwesomeIcon icon="fa-solid fa-code-pull-request" className='fa-2xl icon' />
            </div>
        </div>
    )
}