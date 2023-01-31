import React from 'react'
import NavbarOtherInsurance from './NavbarOtherInsurance';
import './OtherInsuranceCSS/nriinsurancecss.css';
import nri_banner from '../images/nri_banner.jpg';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { NavLink } from 'react-router-dom';
import nri_block1 from '../images/nri_block1.jpg';
import nri_block2 from '../images/nri_block2.jpg';
import nri_car_insurance from '../images/nri_car_insurance.jpg';
import nri_home_insurance from '../images/nri_home_insurance.jpg';
import CropNriFooter from './CropNriFooter';

const NRIInsurance = () => {
  return (
    <div>

      <NavbarOtherInsurance />

      <section style={{padding:'0'}}>
        
        <div className="row">
        
            <div className="nrimainbgimg">
        

            <div className="col col-lg-6 col-md-6 col-sm-12">

            </div>

            <div className="col col-lg-6 col-md-6 col-sm-12 firsttext">
              <h3>Are YOU An NRI?Protect Your Family With</h3>
              <h3>Health, Travel, Home & Motor Insurance In India</h3>
            </div>
            </div>

            <div className='row secondtext'>
              <div className="col col-lg-112 col-md-12 col-sm-12">
                <p>NRI Insurance Services | Insure Your Family & Assets In India | ICICI Lombard</p>
              </div>
           </div>

          <div>
            <div className="icicinri">
              <NavLink style={{ textDecorationLine: 'none', color: 'black' }} to='#'>General Insurance By ICICI Lombard <KeyboardArrowRightIcon /> NRI Insurance Services</NavLink>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className="row">
            <div className="col col-lg-12 col-md-12 col-sm-12 ">
              <h2 style={{ color: 'rgb(97,97,97)', marginTop: '25px', fontSize: '33px' }}>
                NRI Insurance: We Help You Insure Your Family & Assets In India While You Are Overseas
              </h2>

            </div>
            <h4 style={{ color: 'rgb(16, 16, 53)', marginTop: '25px' }}><b>PRODUCTS WE OFFER</b></h4>
          </div>


          {/* For images */}
          <div className="row" >
            <div className="col-nri_block1img col-lg-6 col-md-6 col-sm-12 " >
              <div className='travel' >
                <h6>TRAVEL INSURANCE</h6>
                <ul>
                  <li>Secure your parent's trip with this comprehensive policy</li>
                  <li>No health check-up required</li>
                  <li>Worldwide coverage on the policy</li>
                </ul>
                <br />
                <p>Read More About <NavLink to="" style={{ color: 'white' }}>Travel Insurance</NavLink></p>
              </div>
            </div>

            <div className="col-nri_block2img col-lg-6 col-md-6 col-sm-12 ">
              <div className='health'>
                <h6>HEALTH INSURANCE </h6>
                <ul>
                  <li>Secure your parent's during major medical expenditures</li>
                  <li>No age limit</li>
                  <li>Guaranteed lifetime renewability</li>
                </ul>
                <br />
                <p>Read More About <NavLink to="" style={{ color: 'white' }}>Health Insurance</NavLink></p>
              </div>
            </div>

          </div>

          <br />

          <div className="row">
            <div className="col-nri_car_insurance col-lg-6 col-md-6 col-sm-12">
              <div className="car">
                <h6>MOTOR INSURANCE </h6>
                <ul>
                  <li>Get a policy instantly;no paperwork required</li>
                  <li>Cashless claim facility at 5,600+garages</li>
                  <li>Damage,personal accident And liability covered</li>
                </ul>
                <br />
                <p>Read More About <NavLink to="" style={{ color: 'white' }}>Motor Insurance</NavLink></p>
              </div>

            </div>
            <div className="col-nri_home_insurance col-lg-6 col-md-6 col-sm-12">
              <div className="home">
                <h6>HOME INSURANCE </h6>
                <ul>
                  <li>Coverage for your home or contents or path</li>
                  <li>Protection from natural/man-made calamities</li>
                  <li>Get coverage upto 10 years at a stretch</li>
                </ul>
                <br />
                <p>Read More About <NavLink to="" style={{ color: 'white' }}>Home Insurance</NavLink></p>
              </div>
            </div>
          </div>
          <br />

          <div className='row'>
            <div className="col col-lg-4 col-md-4 col-sm-12 text">
              <h4 style={{ paddingTop: '10px', color: 'midnightblue' }}>Complete Health Insurance</h4>
              <ul style={{ marginTop: '30px' }}>
                <li>Comprehensive coverage for you and your family</li>
                <li>Get coverage for double the Sum Insured amount with reset benefit</li>
                <li>Bring your new born baby to the world worry-less with our maternity benefit</li>
              </ul>
              <p style={{ marginTop: '35px', marginBottom: '35px', color: 'darkred' }}>Read More About <NavLink to="" style={{ color: 'darkred' }}>Complete Health Insurance</NavLink></p>
            </div>

            <div className="col col-lg-4 col-md-4 col-sm-12 text">
              <h4 style={{ paddingTop: '10px', color: 'midnightblue' }}>Health Booster</h4>
              <ul style={{ marginTop: '30px' }}>
                <li>Super top up plan to add extra care to your health</li>
                <li>Now get treatment at home with our domiciliary hospitalization cover</li>
                <li>Recover from illness with our personal accident, temporary total disablement and repatriation of remains cover</li>
                <p style={{ marginTop: '15px', marginBottom: '35px', color: 'darkred' }}>Read More About <NavLink to="" style={{ color: 'darkred' }}>Health Booster</NavLink></p>
              </ul>
            </div>

            <div className="col col-lg-4 col-md-4 col-sm-12 text">
              <h4 style={{ paddingTop: '10px', color: 'midnightblue' }}>Personal Protect</h4>
              <ul style={{ marginTop: '30px' }}>
                <li>Coverage against accidental death and permanent total disablement</li>
                <li>Worldwide policy coverage</li>
                <li>No health check-up required</li>
              </ul>
              <p style={{ marginTop: '85px', color: 'darkred' }}>Read More About <NavLink to="" style={{ color: 'darkred' }}>Personal Protect</NavLink></p>
            </div>

          </div>
          {/* container close */}
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end my-4">

          <button style={{ borderRadius: '0' }} class="btn  btn-danger me-md-4" type="button">Scroll up</button>

        </div>

      
      <hr />
      <div>
      <CropNriFooter />
      </div>
     

      {/* End-Text */}
      <div className="container">
      <div className='row'>
          <div className='bottomtxt col-lg-12'>
            <span>ICICI Lombard General Insurance Company Limited is one of the leading private sector general insurance company in India offering insurance coverage for motor, <NavLink to="" style={{textDecorationLine:'none'}}>health</NavLink>, travel, home, student travel and more. Policies can be purchased and renewed online as well. Immediate issuance of policy copy online.</span>
          </div>

          <div className=" col-lg-12 my-4">
            <NavLink className="bottomnavlink"><strong>ICICI Group | ICICI Bank | ICICI Prudential Life Insurance | ICICI Prudential Mutual Fund | ICICI Direct | ICICI Home Finance | ICICI Home Search</strong></NavLink>
          </div>

          <div className="col-lg-12">
            <span>
            ICICI trade logo displayed above belongs to ICICI Bank Ltd and is used by ICICI Lombard General Insurance Company Ltd under license and Lombard logo belongs to ICICI Lombard General Insurance Company Ltd. Insurance is the subject matter of the solicitation. The advertisement contains only an indication of cover offered. For more details on risk factors, terms, conditions and exclusions, please read the sales brochure carefully before concluding a sale. ICICI Lombard General Insurance Company Limited, ICICI Lombard House, 414, Veer Savarkar Marg, Near Siddhi Vinayak Temple, Prabhadevi, Mumbai - 400025. Reg. No.115. Fax no - 022 61961323. CIN: L67200MH2000PLC129408.<br/>
            Email ID - customersupport@icicilombard.com
            </span>
          </div>
      </div>
      </div>
      </section>
    </div>



  )
}

export default NRIInsurance
