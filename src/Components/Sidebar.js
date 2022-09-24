import React from 'react'
import '../App.css';
import Q from '../Images/Q.png'
import M from '../Images/M.png'
import K from '../Images/K.png'
import B from '../Images/B.png'


export default function Sidebar(){
    return (
        <div className='sidebar'>
            <div className='button-containers'>
                <input type="image" src={Q} />
                <input type="image" src={M} />
                <input type="image" src={K} />
                <input type="image" src={B} />
            </div>
        </div>
    )
}