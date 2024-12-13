import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Nav.css"
export default function Nav() {
  return (
    <>
      <div className="Navigation d-flex-c">
        <div className="textWithImg d-flex">
          <img src="./Images/Sarkari-Result.png" alt="" />
          <h1>Sarkari Reslut</h1>
        </div>
        <div className="Nav d-flex">
          <ul className='d-flex'>
            <li> <NavLink to="/Home">Home</NavLink> </li>
            <li> <NavLink to="/latestJobs">latest Jobs</NavLink> </li>
            <li> <NavLink to="/Results">Results</NavLink> </li>
            <li> <NavLink to="/AdmitCard">Admit Card</NavLink> </li>
            <li> <NavLink to="/AnswerKey">Answer Key</NavLink> </li>
            <li> <NavLink to="/Syllabus">Syllabus</NavLink> </li>
            <li> <NavLink to="/Search">Search</NavLink> </li>
            <li> <NavLink to="/ConatctUs">Conatct Us</NavLink> </li>
          </ul>
        </div>
      </div>
    </>
  )
}
