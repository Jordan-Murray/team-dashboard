import React from 'react'
import '../App.css'
import CircularProgressWithLabel  from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function UserTile(props){

    const theme = createTheme({
        palette: {
          primary: {
            main: '#22D792'
          }
        },
      });

    var progress = (props.user.workItemTime / 7.75) * 100;
    if(progress > 100) progress = 100

    return (
        <div className="tile tile-with-blur rounded-edges" key={props.user.name}>
            <div className="hours-done-tile">
                <ThemeProvider theme={theme}>
                    <CircularProgressWithLabel className="progress-circle"
                        size={100} color={'primary'} variant="determinate" value={progress} />
                </ThemeProvider>
                <div className="username">{props.user.name}</div>
                <span className="worked-time"> {props.user.workItemTime} / 7.75</span>
            </div>

            <div className="work-items-tile-container">
                {
                    props.user.workItems.map((workItem) => 
                    {
                        return(
                            <div key={workItem.title} className="work-items-tile">
                                <span>{workItem.title}: <strong>{workItem.completedHours}</strong></span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}