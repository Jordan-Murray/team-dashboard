import React from 'react'
import '../App.css';


export default function HeaderBar(props){
    //https://www.youtube.com/watch?v=fGaEOESdPVI
    const dataChange = (e) =>{
        props.onPress(e.target.id);
    }

    return (
        <div className='header tile-with-blur rounded-edges'>
            <div className='team-button-container'>
                <button id={"Baggins"} onClick={dataChange} >Baggins</button>
                <button id={"Kenobi"} onClick={dataChange}>Kenobi</button>
                <button id={"Moonraker"} onClick={dataChange}>Moonraker</button>
                <button id={"Q"} onClick={dataChange}>Q</button>
            </div>
        </div>
    )
}