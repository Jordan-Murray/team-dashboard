import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [quote, setQuote] = useState([])

    useEffect(() => {
        axios.get("https://api.kanye.rest/")
            .then(res => {
                console.log(res)
                setQuote(res.data)
            }).catch(err => {
                console.log(err)
            })
    })

  return (
    <div>quote</div>
  )
}

export default DataFetching