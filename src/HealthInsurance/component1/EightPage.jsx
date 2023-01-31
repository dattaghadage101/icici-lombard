import React from 'react';
import { NavLink } from 'react-router-dom';
import {FourSmallCardData,smallCardinRowDatasix,smallCardinRowDatafive,OnesideImegeonedata,smallCardinRowDataseven,
    smallCardinRowDataeight,smallcardfour, smallcardfive,OnesideImegeonedatatwo} from './../../ThirdPagedata'
import FourSmallCard from './FourSmallCard';
import OnesideimagewithcorrectTick from './OnesideimagewithcorrectTick';
import SmallCardInRowData from './SmallCardInRowData';
import SmallCardThree from './SmallCardThree';

function EightPage() {
    // console.log(OnesideImegeonedata)
    return (
        <div>
            <div className="container text-center">
                <div>
                    <h2 style={{fontWidth:700}} className="mt-5">Which health insurance plan is ideal for you?</h2>
                </div>
                <FourSmallCard fourSmallCardData={FourSmallCardData}/>
                <SmallCardInRowData smallCardinRowData={smallCardinRowDatafive} smallCardinRowDatatwo={smallCardinRowDatasix}
                 headingleft='Why buy health insurance online?' headingright="Why buy a health insurance plan at an early age?"/>
                
               
            </div>
            <div className="container eightpage">
                <div className="row">
                    <div className="col-lg-4 col-xsm-12">
                        <h1>What are the optional add-ons<sup>##</sup> in health insurance?</h1>
                    </div>
                    <div className="col-lg-8 col-xsm-12 optionaladd">
                        <div>
                            <li>
                                <div className='row'>
                                    <div className="col-1">
                                        <img src='Images/HealthInsurence/critical-illness-spd.png'></img>
                                    </div>
                                    <div className="col-10">
                                        <p className='head'>Critical illness cover</p>
                                        <p>Under this add-on, we cover serious medical conditions such as cancer of specified severity, open chest CABG, first heart attack of specified severity, and kidney failure requiring regular dialysis.</p>
                                    </div>
                                </div>
                            </li>
                            <hr/>
                            <li>
                                <div className='row'>
                                    <div className="col-1">
                                        <img src='Images/HealthInsurence/hospital-cash-spd.png'></img>
                                    </div>
                                    <div className="col-10">
                                        <p className='head'>Hospital cash cover</p>
                                        <p>Under this add-on, we cover serious medical conditions such as cancer of specified severity, open chest CABG, first heart attack of specified severity, and kidney failure requiring regular dialysis.</p>
                                    </div>
                                </div>
                            </li>
                            <hr/>
                            <li>
                                <div className='row'>
                                    <div className="col-1">
                                        <img src='Images/HealthInsurence/health-ins-plan-3spd.png'></img>
                                    </div>
                                    <div className="col-10">
                                        <p className='head'>Donor expense cover</p>
                                        <p>You get a daily cash allowance for your hospital stay with this add-on. It helps you bear some share of your out-of-pocket expenses that may not be otherwise covered under hospitalisation.</p>
                                    </div>
                                </div>
                            </li>
                            <hr/>
                            <li>
                                <div className='row'>
                                    <div className="col-1">
                                        <img src='Images/HealthInsurence/health-ins-plan-4spd.png'></img>
                                    </div>
                                    <div className="col-10">
                                        <p className='head'>Convalescence benefit cover</p>
                                        <p>You get a specified amount as per your policy contract if hospitalised for certain consecutive days for illness with this add on.</p>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <OnesideimagewithcorrectTick img='Images/HealthInsurence/health-insurance-eligibility-spd.png' heading='What is the health insurance eligibility criteria?'
            onesideImegeone={OnesideImegeonedata}/>
            <div className='container mt-5 smallpara'>
                <h1 className='text-center'>How to calculate health insurance premiums?</h1>
                <p className='p-3'>You can calculate your health insurance premium by using our online premium calculator. Just enter your basic details such as your age, place of residence, and the amount of cover you want. For family coverage, you must provide the number of individuals you wish to insure as well as the oldest member's age—and you’ll get to know the premium amount in a few clicks. Always remember, the policy premiums are influenced by age, city, lifestyles, BMI, occupation type, etc.</p>
            </div>
            <div className="container">
                <div className='text-center mt-5 mb-1'>
                    <h2 style={{fontWeight:700}}>What are the factors that affect health insurance premiums?</h2>
                </div>
                <SmallCardInRowData smallCardinRowData={smallCardinRowDataseven} smallCardinRowDatatwo={smallCardinRowDataeight}/>
            </div>
            <div className="container">
                <SmallCardThree smallcardthree={smallcardfour} heading='What is the procedure for health insurance claims?'
                head='At ICICI Lombard, the claim settlement process is very simple and convenient.'/>
            </div>
            <OnesideimagewithcorrectTick img='Images/HealthInsurence/documents-required-spd.png' heading='Documents required for health insurance claim reimbursement'
            onesideImegeone={OnesideImegeonedatatwo}/>
            <div className="container">
                <SmallCardThree smallcardthree={smallcardfive} heading='How to renew health insurance online?'
                head='Renewing your health insurance with ICICI Lombard is just a click away. To get an instant renewal, all you have to do is:'
                />
            </div>
            
            
        </div>
        
    );
}

export default EightPage;