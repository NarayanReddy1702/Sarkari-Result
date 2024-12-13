import React, { useEffect, useState } from 'react'
import "./AnswerKey.css"

function AnswerKey() {
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
    <div className="answer-sec">
      
    <div className="some-more-details2 d-flex">  
        <div className="box2 result-box">
        <div className="result2 d-flex">
          <h1>Latest Answer Key | Question Paper Download</h1>
        </div>
        <div className="list-of-link2 d-flex-c">
          {data.map((value)=>{
            return (
             <ul><li><a href={value.href}>{value.text}</a></li></ul> 
            )
          })}
        </div>
      </div>
      </div>
    </div>
      )
    }

export default AnswerKey
