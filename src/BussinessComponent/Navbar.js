import React from 'react'
import logo from '../images/logo.png'
import '../CSS/navbar.css'
import { NavLink } from 'react-bootstrap'
// import { NavLink } from 'react-router-dom'
import {useNavigate } from 'react-router-dom'


function Navbar() {
  const navigate=useNavigate()
  return (
    <div className='top-navbar'>
      {/* .........................................top-small-nav-start.............................. */}


      {/* .........................................top-small-nav-end.............................. */}

      {/* .......................................big nav-bar.............................. */}
      <nav className="navbar navbar-expand-lg bg-light top-navbar ">
        <div className="container-fluid nav-background ">
          <NavLink className="navbar-brand" onClick={()=>navigate('/')} ><img src={logo} alt="logo" height={40} style={{ marginLeft: "9px" }} /></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon " />
          </button>
          <div className="collapse navbar-collapse nav-item-padding" id="navbarNavDropdown">
            <ul className="navbar-nav ">
              <li className="nav-item dropdown ">
                <NavLink className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Employee Benefit
                </NavLink>
                <ul className="dropdown-menu ">
                  <li><NavLink className="dropdown-item " onClick={()=>navigate('/Workmeninsurence')} >Workmen’s Compensation Insurance</NavLink></li>
                  <li><NavLink className="dropdown-item" onClick={()=>navigate('/Group_helth_insurence')}><br /> Group Health Insurance</NavLink></li>
                  {/* <li><NavLink className="dropdown-item" href="#"><br /> Marine Insurance</NavLink></li> */}
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Marine Insurence
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" onClick={()=>navigate('/MarinSingletransitInsu')}>Marine Single Transit Insurance(Inland)</NavLink></li>
                  <li><NavLink className="dropdown-item" onClick={()=>navigate('/MarinOpenInsurence')}><br /> Marine Open Insurance</NavLink></li>

                </ul>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Property Insurence
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" href="#">ICICI Bharat Sookshma Udyam Suraksha <br /> Policy (Fire Insurance upto 5 crore)</NavLink></li>
                  <li><NavLink className="dropdown-item" href="#"><br /> ICICI Bharat Griha Raksha Policy <br />(Housing Society)</NavLink></li>
                  <li><NavLink className="dropdown-item" href="#"><br /> ICICI Bharat Laghu Udyam Suraksha <br /> Policy (Fire Insurance 5 crore to 50 crore) </NavLink></li>
                  <li><NavLink className="dropdown-item" href="#"><br /> Risk Management </NavLink></li>

                </ul>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Liability Insurence
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" href="#">Professional Indemnity Policy For <br /> Doctors & Medical Practitioners</NavLink></li>
                  <li><NavLink className="dropdown-item" href="#"><br /> Professional Indemnity For Chartered <br /> Accountants</NavLink></li>
                  <li><NavLink className="dropdown-item" href="#"><br /> Corporate Cyber Insurance </NavLink></li>
                  <li><NavLink className="dropdown-item" href="#"><br /> Directors & Officers Insurance </NavLink></li>
                  <li><NavLink className="dropdown-item" href="#"><br /> Comprehensive General Liability <br /> Insurance</NavLink></li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Engineering Insurence
                </NavLink>
                <ul className="dropdown-menu ">
                  <li><NavLink className="dropdown-item" href="#">Contractor's All Risk</NavLink></li>
                  <li><NavLink className="dropdown-item" href="#">Contractor's Plant and Machinery</NavLink></li>
                  <li><NavLink className="dropdown-item" href="#"> Erection All Risk</NavLink></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <NavLink class="nav-link pricing" id='blog' href="#">Blogs</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>


  )
}

export default Navbar