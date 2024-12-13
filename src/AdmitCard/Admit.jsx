import React, { useEffect, useState } from 'react'
import "./Admit.css"

function Admit() {
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
    <div className="admit-sec">
      
    <div className="some-more-details3 d-flex">  
        <div className="box3 result-box">
        <div className="result3 d-flex">
          <h1>Admit Card</h1>
        </div>
        <div className="list-of-link3 d-flex-c">
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

export default Admit
