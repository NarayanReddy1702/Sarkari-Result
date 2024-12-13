import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer-sec d-flex">
      <div className="footer-child d-flex-bet">
        <div className="footer-left d-flex-bet">
          <div className="linkDetails d-flex-c">
            <h1>Quick Link</h1>
            <ul className='d-flex-c'>
             <li><Link to="/Home">Sarkari Result @ Twitter</Link></li>
             <li><Link to="/Home">Sarkari Result @ Instagram</Link></li>
             <li><Link to="/Home">Sarkari Result @ Facebook</Link></li>
             <li><Link to="/Home">Sarkari Result @ Koo</Link></li>
             <li><Link to="/Home">Sarkari Result @ Telegramr</Link></li>
             <li><Link to="/Home">Sarkari Result @ Youtube</Link></li>
             <li><Link to="/Home">Sarkari Result @ Linked In</Link></li>
             <li><Link to="/Home">Sarkari Result @ Contact Us</Link></li>
             <li><Link to="/Home">All Board Exams</Link></li>
          
            </ul>
          </div>
            <div className="AppDetails d-flex-c">
             <h1>Apps</h1>
             <ul className='d-flex-c'>
              <li><Link to="/Home">Android App</Link></li>
              <li><Link to="/Home">Apple IOS App</Link></li>
             </ul>
            </div>
        </div>
        <div className="footer-right d-flex-bet">
          <div className="footer-details d-flex-c">
            <h1>More</h1>
            <ul className='d-flex-c'>
              <li><Link to="/Home">BPSC</Link></li>
              <li><Link to="/Home">UP</Link></li>
              <li><Link to="/Home">Scholarship</Link></li>
              <li><Link to="/Home">UPSC</Link></li>
              <li><Link to="/Home">RPSC</Link></li>
              <li><Link to="/Home">UPPCS</Link></li>
              <li><Link to="/Home">Coast </Link></li>
            </ul>
          </div>
          <div className="footer-details d-flex-c">
            <h1></h1>
            <ul className='d-flex-c'>
              <li><Link to="/Home">UPSSSC</Link></li>
              <li><Link to="/Home">IBPS</Link></li>
              <li><Link to="/Home">Scholarship</Link></li>
              <li><Link to="/Home">Air Force</Link></li>
              <li><Link to="/Home">Delhi Dssb</Link></li>
              <li><Link to="/Home">HSSC</Link></li>
              <li><Link to="/Home">Coast Guard </Link></li>
            </ul>
          </div>
          <div className="footer-details d-flex-c">
            <h1></h1>
            <ul className='d-flex-c'> 
              <li className='li'><Link to="/Home">CCC</Link></li>
              <li className='li'><Link to="/Home">SSC</Link></li>
              <li className='li'><Link to="/Home">Navy</Link></li>
              <li className='li'><Link to="/Home">Railway</Link></li>
              <li className='li'><Link to="/Home">TET</Link></li>
              <li className='li'><Link to="/Home">*</Link></li>
              <li className='li'><Link to="/Home">*</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
