import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPen, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import {faPeoplePulling} from '@fortawesome/free-solid-svg-icons'
import { fifthpagesdataone } from "./../../ThirdPagedata"
import { fifthpagesdatatwo } from "./../../ThirdPagedata"
import { fifthpagesdatathree } from "./../../ThirdPagedata"
import { NavLink } from 'react-router-dom';

function FifthPage() {

    return (
        <><div className="fifthmain">
            <div className="container fifthpage">
                <div>
                    <div className='text-center m-5 p-3'>
                        <h2>What are the top reasons to buy ICICI Lombard health insurance plans?</h2>
                        <p>In-house claim settlement team that helps you 24x7. And, that’s just the beginning.</p>
                    </div>
                    <div>
                        <ul className="nav nav-tabs " id="myTab" role="tablist">
                            <li className="nav-item changebtn" role="presentation">
                                    <button className="nav-link active " id="home-tab button" style={{border:'none', background:'#F8F6F6'}} data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected='true'
                                    >Complete Health Insurance</button>
                            </li>
                            <li className="nav-item changebtn" role="presentation">
                                    <button className="nav-link" id="profile-tab button" style={{border:'none',background:'#F8F6F6'}} data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected='false'
                                    >Health Booster</button>
                            </li>
                            <li className="nav-item changebtn" role="presentation">
                                <button className="nav-link" id="contact-tab button" style={{border:'none',background:'#F8F6F6'}} data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected='false'
                                >Arogya Sanjeevani Policy, ICICI Lombard</button>
                            </li>
                        </ul>
                        <div className="tab-content my-5" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    {fifthpagesdataone.map((item) => {
                                        return (
                                            <div className="col-6">
                                                <div className='fifthpagecard'>
                                                    <h2>{item.heading}</h2>
                                                    <p>{item.Paga}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="row">
                                    {fifthpagesdatatwo.map((item) => {
                                        return (
                                            <div className="col-6">
                                                <div className='fifthpagecard'>
                                                    <h2>{item.heading2}</h2>
                                                    <p>{item.Paga2}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <div className="row">
                                    {fifthpagesdatathree.map((item) => {
                                        return (
                                            <div className="col-6">
                                                <div className='fifthpagecard'>
                                                    <h2>{item.heading3}</h2>
                                                    <p>{item.paga3}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div class=" claimactor container-fluid">
                    <div class="claimactorchild row g-0  rounded overflow-hidden flex-md-row mb-4  h-md-250 position-relative">
                        <div class="col-auto d-none d-lg-block pl-5">
                            {/* <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg> */}
                            <img src='Images/HealthInsurence/claim-actor-spd.png' />
                        </div>
                        <div class="col p-4 d-flex flex-column position-static  p-5 claimectorinner">
                            <h3 class="mb-0">Claim calmly</h3>
                            <div class="mb-1 text-muted d-flex listclaim">
                                <p>It’s as easy as</p>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                            </div>
                            <div class="mb-auto d-flex  innersmallbox">
                                    <li className='rounded-3'>
                                        <span>1</span>
                                        <FontAwesomeIcon icon={faPen}  className='fontawesomeiconpagefive'/>
                                        <p>Intimate</p>
                                    </li>
                                    <li className='rounded-3'>
                                        <span>2</span>
                                       <FontAwesomeIcon icon={faPeoplePulling} className='fontawesomeiconpagefive'/>
                                      
                                        <p>Verify</p>
                                    </li>
                                    <li className='rounded-3'>
                                        <span>3</span>
                                        <FontAwesomeIcon icon={faThumbsUp} className='fontawesomeiconpagefive'/>
                                        <p>Settle</p>
                                    </li>
                                
                            </div>
                            <button type='submit' className='rounded-pill  mt-5'>Know More</button>
                        </div>
                    </div>
                </div>
            </div>
        {/* </div> */}
        </>
    );
}

export default FifthPage;