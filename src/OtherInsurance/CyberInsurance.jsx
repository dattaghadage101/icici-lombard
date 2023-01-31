import React, { useState } from 'react';
import NavbarOtherInsurance from './NavbarOtherInsurance';
import './OtherInsuranceCSS/cyberinsurancecss.css';
const CyberInsurance = () => {
  const [user,setUser]=useState('');
  return (
    <div>
    <NavbarOtherInsurance/>

    
        <div className="row formbluecolor">
          <div className="lefttext col-xl-7 col-md-6 col-xs-12">
              <span style={{fontSize:'45px'}}>Get cyber insurance,</span>
              <h2 style={{fontSize:'40px'}}>protect yourself from</h2>
              <h2 style={{fontSize:'40px'}}>protect yourself from</h2>
              <h2 style={{marginTop:'15rem'}}>protect yourself from</h2>
          </div>

{/* <div className="col-7"></div>
<div className="col-5">

</div> */}
          <div className="col-xl-5 col-md-6 col-xs-12">
            <div className='rightform '><p style={{fontSize:'30px'}}>Secure your online transactions.</p></div>
            
            <form>
                <div className="select-data">
                  
                    <select>
                      <option value=""></option>
                      <option value="BANGALORE, KARNATAKA">BANGALORE, KARNATAKA</option>
                      <option value="NEW DELHI, DELHI">NEW DELHI, DELHI</option>
                      <option value="CHENNAI, TAMIL NADU">CHENNAI, TAMIL NADU</option>
                      <option value="MUMBAI, MAHARASHTRA">MUMBAI, MAHARASHTRA</option>
                      <option value="HYDERABAD, TELANGANA">HYDERABAD, TELANGANA</option>
                      <option value="PUNE, MAHARASHTRA">PUNE, MAHARASHTRA</option>
                    </select>
                    <label>City of residence<sup style={{color:'goldenrod',fontSize:'1.2rem'}}>*</sup></label>
                </div>

              <div className="input-data">
                  <input type="tel" required/>
                  <label>Mobile Number<sup style={{color:'goldenrod',fontSize:'1.2rem'}}>*</sup></label>
              </div>

              <div className="email-data">
                <input type="email" name="" id="" />
                <label>Email<sup style={{color:'goldenrod',fontSize:'1.2rem'}}>*</sup></label>
              </div>

              <div className='checkboxdata'>
               <input type="checkbox"/>
               <label>I am</label>
              </div>

              <div className='checkboxdata1'>
               <input type="checkbox"/>
               <label>I am</label>
              </div>

             </form>  
                </div>
          
             

             
        
            
           
       

          {/* <div className="email-data">
                <input type="email" name="" id="" />
                <label>Email<sup style={{color:'goldenrod',fontSize:'1.2rem'}}>*</sup></label>
              </div> */}

        </div>
    
      
    </div>
  )
}

export default CyberInsurance
