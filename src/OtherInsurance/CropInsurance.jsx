import React, { useEffect, useState } from 'react';
import './OtherInsuranceCSS/cropinsurancecss.css';
import fasal from '../images/fasal.jpg';
import dd_downArrowbrw from '../images/dd_downArrowbrw.png';
import NavbarOtherInsurance from './NavbarOtherInsurance';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { NavLink } from 'react-router-dom';
import CropNriFooter from './CropNriFooter';
import axios from 'axios';

const CropInsurance = () => {
  
  return (
    <>


      <NavbarOtherInsurance />

      <div className="row">

        <img className="text_on_image" src={fasal} alt="fasal" />

        <div className='PMFBY'>
          <p>Pradhan Mantri Fasal Bima Yojana (PMFBY) Crop Insurance Details & Benefits | ICICI Lombard</p>
        </div>


        <div style={{ backgroundColor: 'antiquewhite' }}>
          <p className="imgdowntext">To view details of the Pradhan Mantri Fasal Bima Yojana implemented by erstwhile Bharti AXA General Insurance, <a class="clickhere" href="./CropInsurance.jsx" target={'_blank'}>click here.</a></p>
        </div>


        <div>
          <div className="icicicrop">
            <NavLink style={{ textDecorationLine: 'none', color: 'black' }} to='#'>General Insurance By ICICI Lombard <KeyboardArrowRightIcon /> Crop Insurance</NavLink>
          </div>
        </div>
      </div>

      <div>
        {/* <a href="#"><button style={{backgroungColor:'brown'}}>मराठी</button></a> */}
        <button type="button" className="btn btn-danger">मराठी</button>
        <button type="button" className="btn btn-danger">हिंदी </button>
        <button type="button" className="btn btn-danger">मराठी</button>

      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 my-2">
            <NavLink className='spacebetween' to=''>FAQs </NavLink>
            <NavLink className='spacebetween' to=''>Claim Process </NavLink>
            <NavLink className='spacebetween' to=''>Contact list </NavLink>
            <NavLink className='spacebetween' to=''>District wise Croplist </NavLink>
            <NavLink className='spacebetween' to=''>Enrollment </NavLink>
            <NavLink className='spacebetween' to=''>Farmer Testimonial Video </NavLink>
            <NavLink className='spacebetween' to=''>CSC Locator </NavLink>
            <NavLink className='spacebetween' to=''>Claim Form </NavLink>
            <NavLink className='spacebetween' to=''>Claim Form - हिंदी </NavLink>
            <NavLink className='spacebetween' to=''>Enrollment Details </NavLink>
            <NavLink className='spacebetween1' to=''>CEO Speak </NavLink>
          </div>

          <span className='marketingawareness'>Marketing Awareness</span>

          <div className="col-lg-5 col-md-6 col-sm-12 spacebetween2">
            <NavLink className='spacebetween3' to=''>Kharif 2017  </NavLink>
            <NavLink className='spacebetween3' style={{ marginLeft: '15px' }} to=''>Kharif 2018 </NavLink>
            <NavLink className='spacebetween3' style={{ marginLeft: '15px' }} to=''>Rabi 2017-2018 </NavLink>
            <NavLink className='spacebetween3' style={{ marginLeft: '15px' }} to=''>Rabi 2018-2019 </NavLink>
          </div>

          <div className="col-lg-12 my-2">
            <NavLink className="businessstatistics" to=''>Business Statistics (as on 24.12.18)</NavLink>
          </div>

          <div className="col-lg-12 my-4">
            <h1 style={{ color: 'GrayText' }}>PMFBY Crop Insurance</h1>
          </div>

          <div className="col-lg-12 my-4">
            <h5 style={{ color: 'GrayText' }}>WHAT IS THE PRADHAN MANTRI FASAL BIMA YOJANA (PMFBY)</h5>
          </div>

          <div className="col-lg-12">
            <p style={{ fontSize: '18px' }}>The PMFBY was launched in 2016 and replaces all the prevailing yield insurance schemes in India. The scheme has been launched with an impetus on crop sector. The scheme has extended coverage under localized risks, post-harvest losses etc. and aims at adoption of technology for the purpose of yield estimation. Through increased farmer awareness and low farmer premium rates the scheme aims at increasing the crop insurance penetration in India.</p>
          </div>

          <div className="col-lg-12">
            <h5 style={{ fontSize: '21px' }}>Objective:</h5>
            <p style={{ fontSize: '18px' }}>Pradhan Mantri Fasal Bima Yojana (PMFBY) aims at supporting sustainable production in agriculture sector by way of -</p>

            <ol type='a' style={{ fontSize: '18px' }}>
              <li>Providing financial support to farmers suffering crop loss/damage arising out of unforeseen events</li>
              <li>Stabilizing the income of farmers to ensure their continuance in farming</li>
              <li> Encouraging farmers to adopt innovative and modern agricultural practices</li>
              <li> Ensuring flow of credit to the agriculture sector; which will contribute to food security, crop diversification and enhancing growth and competitiveness of agriculture sector besides protecting farmers from production risks.</li>
            </ol>
          </div>

          <div className="col-lg-12">
            <h4 style={{ fontSize: '21px', color: 'rgb(63, 63, 63)' }}>Eligibility Criteria</h4>
            <ul>
              <li style={{ fontSize: '20px', color: 'rgb(63, 63, 63)' }}><h5>Compulsory Component</h5></li>
              <p style={{ fontSize: '18px' }}>All farmers availing Seasonal Agricultural Operations (SAO) loans from Financial Institutions (i.e. loanee farmers) for the notified crop(s) would be covered compulsorily.</p>
              <li style={{ fontSize: '20px', color: 'rgb(63, 63, 63)' }}><h5>Voluntary Component</h5></li>
              <p style={{ fontSize: '18px' }}>The Scheme would be optional for the non-loanee farmers.</p>
            </ul>
          </div>

          <div className="col-lg-12">
            <h4 style={{ fontSize: '21px', color: 'rgb(63, 63, 63)' }}>Coverage of Risks and Exclusions:</h4>
            <p style={{ fontSize: '18px' }}>Following stages of the crop and risks leading to crop loss are covered under the scheme.</p>

            <ul>

              <li style={{ fontSize: '18px', color: 'rgb(63, 63, 63)' }}><h5>Prevented Sowing/ Planting Risk:</h5></li>

              <p style={{ fontSize: '18px' }}>Insured area is prevented from sowing/ planting due to deficit rainfall or adverse seasonal conditions</p>

              <li style={{ fontSize: '18px', color: 'rgb(63, 63, 63)' }}><h5>Standing Crop (Sowing to Harvesting):</h5></li>

              <p style={{ fontSize: '18px' }}>Comprehensive risk insurance is provided to cover yield losses due to non- preventable risks, viz. Drought, Dry spells, Flood, Inundation, Pests and Diseases, Landslides, Natural Fire and Lightening, Storm, Hailstorm, Cyclone, Typhoon, Tempest, Hurricane and Tornado.</p>

              <li style={{ fontSize: '18px', color: 'rgb(63, 63, 63)' }}><h5>Post-Harvest Losses:</h5></li>

              <p style={{ fontSize: '18px' }}>coverage is available only up to a maximum period of two weeks from harvesting for those crops which are allowed to dry in cut and spread condition in the field after harvesting against specific perils of cyclone and cyclonic rains and unseasonal rains.</p>

              <li style={{ fontSize: '18px', color: 'rgb(63, 63, 63)' }}><h5>Localized Calamities:</h5></li>

              <p style={{ fontSize: '18px' }}>Loss/ damage resulting from occurrence of identified localized risks of hailstorm, landslide, and Inundation affecting isolated farms in the notified area.</p>
            </ul>
          </div>

          <div className="col-lg-12">
            <p><strong style={{ fontSize: '21px', color: 'rgb(63, 63, 63)' }}>General Exclusions:</strong> Losses arising out of war and nuclear risks, malicious damage and other preventable risks shall be excluded.</p>

            <ul type='none'>
              <li style={{ fontSize: '18px', color: 'rgb(63, 63, 63)' }}><NavLink style={{ color: 'chocolate' }} to=''>Click here</NavLink>for policy wording of PMFBY</li>
              <li style={{ fontSize: '18px', color: 'rgb(63, 63, 63)' }}><NavLink style={{ color: 'chocolate' }} to=''>Click here</NavLink>to visit Govt. of India website of Pradhan Mantri Fasal Bima Yojana</li>
              <li style={{ fontSize: '18px', color: 'rgb(63, 63, 63)' }}><NavLink style={{ color: 'chocolate' }} to=''>Click here</NavLink>to know more about our 3 levels of customer support for information and queries related to the crop insurance scheme.</li>
              <li style={{ fontSize: '18px', color: 'rgb(63, 63, 63)' }}>Please contact us on our tollfree number <NavLink style={{ color: 'chocolate' }} to=''>1800 266 9725</NavLink></li>
            </ul>
          </div>

          <div className="col-lg-12">
            <h4 style={{fontSize:'21px',textDecorationLine:'underline'}}>KEY FEATURES OF PMFBY</h4>

            <strong style={{fontSize:'20px'}}>Low Farmer Premium Rates</strong>

            <p style={{fontSize:'18px'}}>The rate of Insurance Charges payable by the farmer will be as per the following table</p>

            
          </div>

        </div>
      </div>

      <CropNriFooter />


      {/* End-Text */}
      <div className="container">
        <div className='row'>
          <div className='bottomtxtcrop col-lg-12'>
            <span>ICICI Lombard General Insurance Company Limited is one of the leading private sector general insurance company in India offering insurance coverage for motor, <NavLink to="" style={{ textDecorationLine: 'none' }}>health</NavLink>, travel, home, student travel and more. Policies can be purchased and renewed online as well. Immediate issuance of policy copy online.</span>
          </div>

          <div className=" col-lg-12 my-4">
            <NavLink className="bottomnavlinkcrop"><strong>ICICI Group | ICICI Bank | ICICI Prudential Life Insurance | ICICI Prudential Mutual Fund | ICICI Direct | ICICI Home Finance | ICICI Home Search</strong></NavLink>
          </div>

          <div className="col-lg-12">
            <span>
              ICICI trade logo displayed above belongs to ICICI Bank Ltd and is used by ICICI Lombard General Insurance Company Ltd under license and Lombard logo belongs to ICICI Lombard General Insurance Company Ltd. Insurance is the subject matter of the solicitation. The advertisement contains only an indication of cover offered. For more details on risk factors, terms, conditions and exclusions, please read the sales brochure carefully before concluding a sale. ICICI Lombard General Insurance Company Limited, ICICI Lombard House, 414, Veer Savarkar Marg, Near Siddhi Vinayak Temple, Prabhadevi, Mumbai - 400025. Reg. No.115. Fax no - 022 61961323. CIN: L67200MH2000PLC129408.<br />
              Email ID - customersupport@icicilombard.com
            </span>
          </div>
        </div>
      </div>

    </>
  )
}

export default CropInsurance
