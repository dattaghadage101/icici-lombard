import React from 'react'
import './OtherInsuranceCSS/cropnrifootercss.css';
import pmfby from '../images/pmfby.png';
import android_icon from '../images/android_icon.png';
import i_store from '../images/i_store.png';
import fb_c from '../images/fb_c.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import twit_c from '../images/twit_c.png';
import you_tube from '../images/you_tube.png';
import Insurancelogo from '../images/Insurancelogo.png';
import {NavLink} from 'react-router-dom';
const CropNriFooter = () => {
  return (
   
    <div className='container-fluid '>
      <div className="row my-md-4 nrifooter bg-black">
          <div className="col col-lg-3 col-md-6 col-sm-12 my-4 ">
              <h6 className='bluecolor'>PRODUCTS</h6>
              <NavLink className='linkeffect' to="">Motor Insurance</NavLink><br/>
              <NavLink className='linkeffect' to="">Car Insurance</NavLink><br/>
              <NavLink className='linkeffect' to="">Two Wheeler Insurance</NavLink><br/>
              <NavLink className='linkeffect' to="">Health Insurance</NavLink><br/>
              <NavLink className='linkeffect' to="">Complete Health Insurance</NavLink><br/>
              <NavLink className='linkeffect' to="">Health Booster</NavLink><br/>
              <NavLink className='linkeffect' to="">Personal Accident Insurance</NavLink><br/>
              <NavLink className='linkeffect' to="">International Travel Insurance</NavLink><br/>
              <NavLink className='linkeffect' to="">Home Insurance</NavLink><br/>
              <NavLink className='linkeffect' to="">Marine Insurance</NavLink><br/>
              <NavLink className='linkeffect' to="">NRI Insurance Services</NavLink><br/>
              <NavLink className='linkeffect' to="">Business Insurance</NavLink><br/>
              <NavLink className='linkeffect' to="">Crop Insurance</NavLink><br/>
              <NavLink className='linkeffect' to="">Rural Insurance</NavLink><br/>
              <NavLink className='linkeffect' to="">Cyber Insurance</NavLink>
              
              <h6 className='bluecolor' style={{marginTop:'10px'}}>INFO CENTRE</h6>
              <NavLink className='linkeffect' to="">Expert Blog</NavLink><br/>
              <NavLink className='linkeffect' to="">Insurance Information</NavLink>

              <h6 className='bluecolor' style={{marginTop:'10px'}}>PMFBY</h6>
              <img src={pmfby} alt="pmfby" />
              <NavLink className='linkeffect' to=""> Pradhan Mantri Fasal Bima Yojana</NavLink>
              <p style={{marginTop:'10px',color:'rgb(66, 66, 136)'}}>Toll Free No: 1800 266 9725</p>
          </div>

          <div className="col col-lg-3 col-md-6 col-sm-12 my-4">
              <h6 className='bluecolor'>SERVICES</h6>
              <NavLink className='linkeffect' to="">Customer Support</NavLink><br/>
              <NavLink className='linkeffect' to="">Grievance Redressal</NavLink><br/>
              <NavLink className='linkeffect' to="">Retrieve Quote</NavLink><br/>
              <NavLink className='linkeffect' to="">Unclaimed Amount</NavLink><br/>
              <NavLink className='linkeffect' to="">Intimate Claim</NavLink><br/>
              <NavLink className='linkeffect' to="">Track Claim</NavLink><br/>
              <NavLink className='linkeffect' to="">Marine/Property Claims</NavLink><br/>
              <NavLink className='linkeffect' to=""> Live Chat </NavLink> <br/>
              <NavLink className='linkeffect' to="">Renew Your Polic y</NavLink> <br/>
              <NavLink className='linkeffect' to=""> Whatsapp Notification</NavLink><br/>
              <NavLink className='linkeffect' to="">EIA</NavLink><br/>
              <NavLink className='linkeffect' to="">Customer Feedback</NavLink><br/>
              <NavLink className='linkeffect' to="">Contact Us</NavLink><br/>

              <h6 className='bluecolor' style={{marginTop:'10px'}}>MOBILE</h6>

              <NavLink className='linkeffect' to="" style={{color:'rgb(71, 70, 70)'}}>IL Insure App</NavLink><br/>
              <NavLink className='linkeffect' to=""><img src={android_icon} alt="android_icon" style={{marginTop:'10px'}}/></NavLink><br/>
              <NavLink className='linkeffect' to=""><img src={i_store} alt="i_store" style={{marginTop:'20px'}}/></NavLink><br/>

              <NavLink className='linkeffect' to="" style={{color:'rgb(71, 70, 70)'}}>IL Take Care App</NavLink><br/>
              <NavLink className='linkeffect' to=""><img src={android_icon} alt="android_icon" style={{marginTop:'10px'}}/></NavLink><br/>
              <NavLink className='linkeffect' to=""><img src={i_store} alt="i_store" style={{marginTop:'20px'}}/></NavLink><br/>
          </div>

          <div className="col col-lg-3 col-md-6 col-sm-12 my-4">
              <h6 className='bluecolor'>LEGAL</h6>
              <NavLink className='linkeffect' to="">Privacy Policy</NavLink><br/>
              <NavLink className='linkeffect' to="">Insure App Privacy Policy</NavLink><br/>
              <NavLink className='linkeffect' to="">Products Withdrawn</NavLink><br/>
              <NavLink className='linkeffect' to="">Do Not Call Registry</NavLink><br/>
              <NavLink className='linkeffect' to="">Terms & Conditions</NavLink><br/>
              <NavLink className='linkeffect' to="">Disclaimer</NavLink><br/>
              <NavLink className='linkeffect' to="">Whistle Blower Policy</NavLink><br/>
              <NavLink className='linkeffect' to="">Insurance Ombudsman</NavLink><br/>
              <NavLink className='linkeffect' to="">Surveyor Limit</NavLink><br/>
              <NavLink className='linkeffect' to="">Code For Fair Disclosure</NavLink><br/>
              <NavLink className='linkeffect' to="">Code Of Conduct</NavLink><br/>
              <NavLink className='linkeffect' to="">Stewardship Policy</NavLink><br/>
              <NavLink className='linkeffect' to="">Disclosure Under Stewardship Policy</NavLink><br/>
              <NavLink className='linkeffect' to="">Policyholder's Interest Protection Policy</NavLink><br/>
              <NavLink className='linkeffect' to="">Advisory To Customer And Channel Partners</NavLink><br/>
              <NavLink className='linkeffect' to="">ICICI Lombard Product List</NavLink><br/>
              <NavLink className='linkeffect' to="">GRO Details Of Active Branches</NavLink><br/>
              <NavLink className='linkeffect' to="">Scheme Of Arrangement</NavLink><br/>
              <NavLink className='linkeffect' to="">Motor Third Party Claims- Statewise Nodal Officer Details</NavLink><br/>

              <h6 className='bluecolor' style={{marginTop:'10px'}}>SOCIAL</h6>
              <NavLink className='linkeffect' to=""><img src={fb_c} alt="fb_c" /></NavLink>
              <NavLink className='linkeffect' to=""><img src={linkedin} alt="linkedin" style={{marginLeft:'5px'}}/></NavLink>
              <NavLink className='linkeffect' to=""><img src={twit_c} alt="twit_c" style={{marginLeft:'5px'}}/></NavLink>
              <NavLink className='linkeffect' to=""><img src={instagram} alt="instagram" style={{marginLeft:'5px'}}/></NavLink>
              <NavLink className='linkeffect' to=""><img src={you_tube} alt="you_tube" style={{marginLeft:'5px'}}/></NavLink>
                <br/>
              <img src={Insurancelogo} alt="Insurancelogo" style={{marginTop:'150px'}}/>

          </div>

          <div className="col col-lg-3 col-md-6 col-sm-12 my-4">
              <h6 className='bluecolor'>ABOUT US</h6>
              <NavLink className='linkeffect' to="">Overview</NavLink><br/>
              <NavLink className='linkeffect' to="">Promoters</NavLink><br/>
              <NavLink className='linkeffect' to="">CSR</NavLink><br/>
              <NavLink className='linkeffect' to="">Risk Management</NavLink><br/>
              <NavLink className='linkeffect' to="">Public Disclosures</NavLink><br/>
              
              <h6 className='bluecolor' style={{marginTop:'10px'}}>OTHERS</h6>
              <NavLink className='linkeffect' to="">Agents Portal</NavLink><br/>
              <NavLink className='linkeffect' to="">Corporate Login</NavLink><br/>
              <NavLink className='linkeffect' to="">Careers</NavLink><br/>
              <NavLink className='linkeffect' to="">Online Manager</NavLink><br/>
              <NavLink className='linkeffect' to="">Suspended Agents</NavLink><br/>
              <NavLink className='linkeffect' to="">Corporate Agents</NavLink><br/>
              <NavLink className='linkeffect' to="">Sitemap</NavLink><br/>
              <NavLink className='linkeffect' to="">Pradhan Mantri Suraksha Bima Yojana</NavLink><br/>
              <NavLink className='linkeffect' to="">Crop Insurance - Login</NavLink><br/>
              
          </div> 
        </div>
    </div>
   
  )
}

export default CropNriFooter












