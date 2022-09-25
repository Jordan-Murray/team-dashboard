import React from 'react'
import '../App.css';


export default function HeaderBar(){
    return (
        <div className='header tile-with-blur rounded-edges'>
            <div className='team-button-container'>
                <button className='clicked'>Baggins</button>
                <button>Kenobi</button>
                <button>Moonraker</button>
                <button>Q</button>
            </div>
        </div>
    )
}