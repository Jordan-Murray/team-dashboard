import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function KanyeQuote()
{
    const [quote, setQuote] = useState([])

    useEffect(() => {
        axios.get("https://api.kanye.rest/")
            .then(res => {
                console.log(res)
                setQuote(res.data.quote)
            }).catch(err => {
                console.log(err)
            })
    },[])

    return(
        <div>
            <h1>Kanye says: {quote}</h1>
        </div>
    )
}