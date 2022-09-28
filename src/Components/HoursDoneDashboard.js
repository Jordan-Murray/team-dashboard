import React, { useState, useEffect } from "react";
import axios from 'axios'
import HeaderBar from './HeaderBar';
import UserTile from "./UserTile";
import CircularProgress from '@mui/material/CircularProgress';
import '../App.css';

export default function HoursDoneDashboard()
{   
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const [baggins, setBaggins] = useState([]);
    const [kenobi, setKenobi] = useState([]);
    const [moonraker, setMoonraker] = useState([]);
    const [q, setQ] = useState([]);


    const teamBaggins = "Jordan Murray, Luke Dore, Sebastian Meckovski, Chris Hewitt"
    const teamKenobi = "Tom Martin, Megan Smith, Neil Barber, Simon Mumby, Tommy Carter"
    var teamMoonraker = "Adam Wilkinson, Alex Curtis, Barry Finch, Richard Milner, Ryan Armitage, Tom Austin"
    var teamQ = "Callum Else, Craig Penning, Edoardo Girardini, Julius Schaebitz, Sam Cybulska, Sam Kershaw"

    var url = "https://shadoapi.azurewebsites.net/api/workitemdata/GetDailyWorkItemInfo?people="

    useEffect(() => {
        fetchAzureData(teamKenobi)
        fetchAzureData(teamBaggins);
        fetchAzureData(teamMoonraker);
        fetchAzureData(teamQ);
    },[])

    const fetchAzureData = async(people) => {
        const {data:response} = await axios.get(url+people,
            {
                headers: {"x-functions-key": "Cu7hxkgHYEZpFUOasrTDvPPRhpvgWNcWIv6IBD7W5otg0IEZpFk2kA=="}
            })

            switch (people) {
                case teamBaggins:
                    setBaggins(response)
                    setUsers(response)
                    break;
                case teamKenobi:
                    setKenobi(response)
                    break;
                case teamMoonraker:
                    setMoonraker(response)
                    break;
                case teamQ:
                    setQ(response)
                    setLoading(false)
                    break;
                default:
                    break;
            }
        return response;
    }

    const switchTeam = (data) => {
        switch (data) {
            case "Baggins":
                setUsers(baggins)
                break;
            case "Kenobi":
                setUsers(kenobi)
                break;
            case "Moonraker":
                setUsers(moonraker)
                break;
            case "Q":
                setUsers(q)
                break;
            default:
                break;
        }
    }

    if(isLoading){
        return (
            <div className="App">
                <div className="loading">
                    <CircularProgress />
                    <div>Loading...</div>
                </div>
            </div>
        )
    }

    return (
        <>
        <HeaderBar onPress={switchTeam}></HeaderBar>
        <div className="tiles-container ">
            { 
                users.map((user) => 
                {
                    return (
                        <UserTile user={user}></UserTile>
                    )
                })
            }
        </div>
        </>
    )
}