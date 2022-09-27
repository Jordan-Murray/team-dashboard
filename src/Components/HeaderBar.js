import React, {useState} from 'react'
import '../App.css';


export default function HeaderBar(props){
    const [stateData,setSateData] = useState([]);

    //https://www.youtube.com/watch?v=fGaEOESdPVI
    const dataChange = (e) =>{
        props.onPress(stateData);
    }

    const Baggins = 
    [
        {
            "name":"Jordan Murray",
            "workItemTime":2.5,
            "workItems":[
                {
                    "title":"WorkItem1",
                    "completedHours":"5"
                },
                {
                    "title":"WorkItem2",
                    "completedHours":"3"
                }
            ]
        },
        {
            "name":"Luke Dore",
            "workItemTime":6.5,
            "workItems":[
                {
                    "title":"WorkItem1",
                    "completedHours":"5"
                },
                {
                    "title":"WorkItem2",
                    "completedHours":"3"
                }
            ]
        }
    ]

    const Kenobi = 
    [
        {
            "name":"Tom Martin",
            "workItemTime":2.5,
            "workItems":[
                {
                    "title":"WorkItem1",
                    "completedHours":"5"
                },
                {
                    "title":"WorkItem2",
                    "completedHours":"3"
                }
            ]
        },
        {
            "name":"Megan Smith",
            "workItemTime":6.5,
            "workItems":[
                {
                    "title":"WorkItem1",
                    "completedHours":"5"
                },
                {
                    "title":"WorkItem2",
                    "completedHours":"3"
                }
            ]
        }
    ]   

    return (
        <div className='header tile-with-blur rounded-edges'>
            <div className='team-button-container'>
                <button className='clicked'>Baggins</button>
                <button>Kenobi</button>
                <button>Moonraker</button>
                <button>Q</button>
                {/* <button onClick={onPress}>click me</button> */}
                {/* <button onClick={dataChange}>click me 2</button> */}

            </div>
        </div>
    )
}