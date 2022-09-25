import React, { useState, useEffect } from "react";
import axios from 'axios'
import CircularProgressWithLabel  from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../App.css';


export default function HoursDone()
{   
    const [users, setUsers] = useState([])

    const people = "Jordan Murray, Luke Dore"
    const url = "https://api.kanye.rest/"
    // const url = "https://shadoapi.azurewebsites.net/api/workitemdata/GetDailyWorkItemInfo?people=" + people

    useEffect(() => {
        axios.get(url,
        {
            // headers: {"x-functions-key": "Cu7hxkgHYEZpFUOasrTDvPPRhpvgWNcWIv6IBD7W5otg0IEZpFk2kA=="}
        }).then(res => {
                console.log(res)
                // setUsers(res.data)
                setUsers(data)
            }).catch(err => {
                console.log(err)
            })
    },[])

    const data = 
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

    const theme = createTheme({
        palette: {
          primary: {
            main: '#22D792'
          }
        },
      });
      


    return (
        <div className="tiles-container ">
            { 
                users.map((user) => 
                {
                    const progress = (user.workItemTime / 7.75) * 100;
                    return (
                        <div className="tile tile-with-blur rounded-edges" key={user.name}>
                            <div className="hours-done-tile">
                                <ThemeProvider theme={theme}>
                                    <CircularProgressWithLabel className="progress-circle"
                                        size={100} color={'primary'} variant="determinate" value={progress} />
                                </ThemeProvider>
                                <span className="username">{user.name}</span>
                                <span className="worked-time"> {user.workItemTime} / 7.75</span>
                            </div>

                            <div className="work-items-tile">
                                {
                                    user.workItems.map((workItem) => 
                                    {
                                        return(
                                            <div key={workItem.title}>
                                                <span>{workItem.title}: </span>
                                                <span>{workItem.completedHours}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}