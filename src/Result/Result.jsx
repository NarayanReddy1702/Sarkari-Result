import React, { useEffect, useState } from 'react'
import "./Result.css"

function Result() {
    const [data, setData] = useState([])

    console.log(data);
    
    useEffect(()=>{
    const options = {
    method: 'GET',
    headers: {
    'x-rapidapi-key': 'b30f9dafbbmsh0574bd1546dbd4bp1a2d2bjsn486f002d2960',
    'x-rapidapi-host': 'sarkari-result.p.rapidapi.com'
    }
    };
    const url = 'https://sarkari-result.p.rapidapi.com/scrape/answerkey';
    fetch(url,options).then((res)=>{
        return res.json()
        }).then((data)=>{
         setData(data.result)
        }).catch((error)=>{
          console.log(error);
        })
    },[])
        
      return (
    <div className="result-sec">
      
    <div className="some-more-details4 d-flex">  
        <div className="box4 result-box">
        <div className="result4 d-flex">
          <h1>Result</h1>
        </div>
        <div className="list-of-link4 d-flex-c">
          {data.map((value)=>{
            return (
              <a href={value.href}>{value.text}</a>
            )
          })}
        </div>
      </div>
      </div>
    </div>
      )
    }
    

export default Result
