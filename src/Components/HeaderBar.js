import React from 'react'
import '../App.css';
import { useNavigate } from "react-router-dom";


export default function HeaderBar(){

    // let navigate = useNavigate(); 
    // const routeChange = () =>{ 
    //     let path = `newPath`; 
    //     navigate(path);
    // }

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