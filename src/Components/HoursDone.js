import React, { useState, useEffect } from "react";
import axios from 'axios'
import CircularProgressWithLabel  from '@mui/material/CircularProgress';
import '../App.css';


export default function HoursDone()
{   
    const [getWorkDone, setWorkDone] = useState([]);

    const [users, setUsers] = useState([])

    const people = "Jordan Murray, Luke Dore"

    useEffect(() => {
        axios.get("https://shadoapi.azurewebsites.net/api/workitemdata/GetDailyWorkItemInfo?people=" + people,
        {
            headers: {"x-functions-key": "Cu7hxkgHYEZpFUOasrTDvPPRhpvgWNcWIv6IBD7W5otg0IEZpFk2kA=="}
        }).then(res => {
                console.log(res)
                setUsers(res.data)
            }).catch(err => {
                console.log(err)
            })
    },[])


    return (
        <div className="TilesContainer">
            { 
                users.map((user) => 
                {
                    const progress = (user.workItemTime / 7.75) * 100
                    return (
                        <div className="HoursDoneTile">
                            <CircularProgressWithLabel variant="determinate" value={progress} />
                            <span className="Username">{user.name}</span>
                            <span key={user.name}> : {user.workItemTime} / 7.75</span>
                        </div>
                    )
                })
            }
        </div>
    )
}