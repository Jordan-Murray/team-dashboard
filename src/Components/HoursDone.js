import React, { useState, useEffect } from "react";
// import DataFetching from "./DataFetching";

export default function HoursDone()
{   
    const [getWorkDone, setWorkDone] = useState([]);

    // await fetch("https://shadoapi.azurewebsites.net/api/workitemdata/GetDailyWorkItemInfo?people=" + people, {
    //                 method: 'GET',
    //                 headers: { "x-functions-key": "Cu7hxkgHYEZpFUOasrTDvPPRhpvgWNcWIv6IBD7W5otg0IEZpFk2kA==" },
    //             }).then(res => console.log(res.json()));

    // useEffect(() => {
    //     const fetchHours = () => {
    //         const response = fetch("https://catfact.ninja/fact",{
    //             method:'GET',
    //             headers: {'Content-Type':'application/json'}
    //         });
    //         setWorkDone(response)
    //     };
    //     fetchHours();
    //     console.table(getWorkDone)

    // }, [])



    const people = "Jordan Murray"
    let hoursDone = 0;

    return(
        <div>
            <h1>
                Hours Done:
            </h1>
            {/* <h1>Kanye says: {DataFetching()}</h1> */}
        </div>
    )
}