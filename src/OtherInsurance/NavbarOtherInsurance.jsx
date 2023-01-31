import React, { useState } from 'react'
import il_logo from '../images/il_logo.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import right_arrow from '../images/right_arrow.png';
import chat_bot_icon_1 from '../images/chat_bot_icon_1.png';
import chat_bot_open from '../images/chat_bot_open.png'
import {NavLink} from 'react-router-dom';
import './OtherInsuranceCSS/navbarcss.css';
const NavbarOtherInsurance = () => {
  // const [image,setImage]=useState( '' )
  // const changeimage=()=>{
  //   setImage( <img src="chat_bot_open" alt="chat_bot_open" /> )
  // }
  return (
    <div>

        <div>
          <img className='right_arrow' src={right_arrow} alt="right_arrow" />
        </div>

        <div className='chat_bot_icon_1'>
           <NavLink to={'../images/chat_bot_open.png'}>
                <img src={chat_bot_icon_1} alt="chat_bot_icon_1"/>
            </NavLink>
        </div>

        

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid othernav">
          
          <NavLink className="navbar-brand" to=""><img src={il_logo} alt="il-logo" /></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav  navbar-navcrop">
              <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <p className="navbarfont">Products<KeyboardArrowDownIcon/><span className="arrow_transform1"></span></p>
                </NavLink>
                <ul className="dropdown-menu" style={{width:'900px',height:'300px',borderBottom:'7px solid orange'}}>
                  <div className="row">
                  
                  <div className="col-4">
                  <li><NavLink className="dropdown-item" to="">Travel Insurance</NavLink></li><hr/>
                  <li><NavLink className="dropdown-item" to="">Health Claims</NavLink></li>
                  <li><NavLink className="dropdown-item" to="">Health Claims</NavLink></li>
                  <li><NavLink className="dropdown-item" to="">Health Claims</NavLink></li>
                  <li><NavLink className="dropdown-item" to="">Health Claims</NavLink></li>
                  <li><NavLink className="dropdown-item" to="">Health Claims</NavLink></li>
                  </div>

                  <div className="col-4">
                  <li><NavLink className="dropdown-item" to="">Motor Insurance</NavLink></li><hr/>
                  </div>

                  <div className="col-4">
                  <li><NavLink className="dropdown-item" to="">Health Insurance</NavLink></li><hr/>
                  </div>

                  </div>
                </ul>
              </li>
              
              <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <p className="navbarfont">Claims<KeyboardArrowDownIcon/></p><span className="arrow_transform2"></span>
                </NavLink>
                <ul className="dropdown-menu" style={{width:'400px',borderBottom:'7px solid orange'}}>

                  <li><NavLink className="dropdown-item" to="">Health Claims</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">Motor Claims</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">Travel Claims</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">Home Claims</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="/cyberinsurance">Cyber Insurance Claims</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">Ola Claims</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">Redbus Claims</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">Corporate Claims</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">Mobile Claims -M-Kash</NavLink></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <p className="navbarfont">Renewals<KeyboardArrowDownIcon/></p><span className="arrow_transform3"></span>
                </NavLink>
                <ul className="dropdown-menu" style={{width:'400px',borderBottom:'7px solid orange'}}>
                  <li><NavLink className="dropdown-item" to="">All policy renewal</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">Car Policy</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">Two wheeler Policy</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">Health Policy</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">Travel Policy</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">Business Insurance</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">Arogya Sanjeevani Policy</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">Home Policy</NavLink></li>

                </ul>
              </li>

              <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <p className="navbarfont">Support<KeyboardArrowDownIcon/></p><span className="arrow_transform4"></span>
                </NavLink>
                <ul className="dropdown-menu" style={{width:'400px',borderBottom:'7px solid orange'}}>
                  <li><NavLink className="dropdown-item" to="">Help Center</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">Contact Us</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">Grievance Redressal</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">Counter Offer Acceptance</NavLink></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
               <NavLink className="nav-link dropdown" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <p className="navbarfont">Info Centre<KeyboardArrowDownIcon/></p><span className="arrow_transform5"></span>
                  </NavLink>
                <ul className="dropdown-menu" style={{width:'400px',borderBottom:'7px solid orange'}}>
                  <li><NavLink className="dropdown-item" to="">Expert Blogs</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">FAQs</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">Tax Benefits</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">Downloads</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">Downloads(Erstwhile Bharti AXA GI)</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">Testimonials</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">Knowledge Center</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">Insurance Updates</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">IL Cafe Podcast</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="">Blog</NavLink></li>
                </ul>
              </li>
              
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <p className="navbarfont">Investor Relations</p><span className="arrow_transform6"></span>
                </NavLink>
                {/* <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default NavbarOtherInsurance
