import React from 'react'
// import '../../css/travelinsurance.css'
import '../../CSS/travelinsurance.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import dentalprotection from '../../images/dental-protection.png'
import studyinterruption from '../../images/study-interruption-cover.png'
import accidentcover from '../../images/personal-accident-cover.png'
import overseas from '../../images/overseas-stdnt-trv-ins.svg'
import StudentTravelClaimLeftimg from '../../images/student-travel-claim-leftimg.png'
import claimone from '../../images/claim-step1.png'
import claimtwo from '../../images/claim-step2.png'
import claimthird from '../../images/claim-step3.png'

import { Fragment } from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Inclusion from './inclusion'
import Exclusion from './exclusion'

import StudentTravelForm from './StudentTravelForm'
function StudentTravel() {
    return (
        <>

            <section>
                <div className='container-fluid sbg mb-5'>
                    <div className='row px-5 py-5 '>

                        <div className='col-xs-12 col-sm-6 col-md-7 col-lg-7  st1 '>
                            <div className='px-4'>
                                <h1>Globetrotter – Overseas
                                    <span className='d-block'> Individual Student
                                    </span>
                                    Travel Insurance
                                </h1>
                                <p>Medical & trip-related coverage for worry-free studies abroad</p>
                            </div>
                            <ul>
                                <li>
                                    <img src={dentalprotection} alt="dental-protection" className='img-fluid' />
                                    <div>Extensive health coverage including dental protection</div>
                                </li>
                                <li>
                                    <img src={studyinterruption} alt="study-interruption-cover" />
                                    <div>study interruption cover</div>
                                </li>
                                <li>
                                    <img src={accidentcover} alt="personal-accident-cover" />
                                    <div>Personal accident cover</div>
                                </li>
                            </ul>

                        </div> {/* 1stcol */}

                        <div className=' col-xs-12 col-sm-6 col-md-5 col-lg-5 px-10'>

                           <StudentTravelForm/>
                        </div>
                    </div> {/* rowend */}
                </div> {/* containersbg  */}
            </section>
            {/* -------------------------------------------second section------------------------------------------------------------------- */}


            <section className='py-5'>
                <div className='container'>
                    <div className='row py-4'>
                        <div className='col-12 text-center px-10 st2'>
                            <h2>Why our customers love us?</h2>
                            <p>And, we think you will too.</p>
                        </div>

                    </div>
                    <div className='row st21 '>
                        <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                            <h3>Comprehensive coverage</h3>
                            <p>at pocket-friendly prices</p>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                            <h3>Cashless hospitalisation worldwide</h3>
                            <p>facilitated by United Health Group and Falck</p>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                            <h3>Tailor-made plans</h3>
                            <p>to suit your university requirements</p>
                        </div>

                    </div>{/* rowend */}


                    <div className='row py-5'>
                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                            <img src={overseas} alt="overseas" className='img-fluid' />
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 s22">

                            <h2>What is Globetrotter – Overseas Individual Student Travel Insurance?</h2>

                            <p>Studying abroad comes with a host of challenges for young students. Firstly, you’re struggling to adjust to all the differences in the country that you’ll be calling home for a few months or years. Secondly you’re always on a tight budget, and you have to manage your living expenses wisely. In such a situation, if a health issue crops up or if some other concern interrupts your study abroad, it can cause unnecessary stress.</p>

                            <p>Globetrotter – Overseas Individual Student Travel Insurance can be a life saver in case an unforeseen emergency affects you while you’re studying abroad. Moreover, most universities overseas have a mandate of medical insurance for fulfilling the admission criteria. Our policy keeps you safe in case of unexpected medical costs and helps you meet such admission criteria too. You can purchase this policy in India and pay the premium in INR while availing coverage in your destination country, with the added convenience of prompt claim settlements.</p>

                        </div>
                    </div>{/* rowend */}
                </div>{/* secondcontainerend */}
            </section>

            {/* ------------------------------------------------------------third section------------------------------------------------------------ */}
            <section className=" sthbg3 mb-4 py-5">
                <div className="container px-1">
                    <div className="row">
                        <div className="col-xs-12 st3 text-center px-1">
                            <h2 >Why should you buy Globetrotter –  Overseas Individual Student Travel Insurance? </h2>
                            <p>Here’s why this policy should be a critical part of your checklist before you move abroad. </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 px-2">
                            <div className='st32'>
                                <em>1</em>
                                <h3>Cost effective</h3>
                                <p>You can buy the policy in India and pay the premium in INR. This turns out to be very affordable, if you compare buying similar insurance overseas.</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 px-2">
                            <div className='st32'>
                                <em>2</em>
                                <h3>Meets admission criteria</h3>
                                <p>Since most foreign universities require student travel insurance as a must-have before joining, this policy can help you meet their necessary admission criteria.</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 px-2">
                            <div className='st32'>
                                <em>3</em>
                                <h3>Holistic coverage</h3>
                                <p>
                                    This policy doesn’t just cover your hospitalisation expenses in case of an accident or illness. It also covers loss of checked-in baggage, personal liability, study interruption and various other events.
                                </p>
                            </div>
                        </div>
                    </div> {/* rowend */}

                </div>  {/* containerend */}
            </section>

            {/* ------------------------------------------------------------forth section------------------------------------------------------------ */}

            <section className=" sthbg3 py-5">

                <div className="container px-1">
                    <div className="row py-3">
                        <div className="col-xs-12 st3 text-center px-1">
                            <h2 >What is covered under Globetrotter – Overseas Individual Student Travel Insurance?</h2>
                            <p>Here’s what’s covered and what’s not.</p>
                        </div>
                    </div>{/* rowend */}

                    <div className="row">
                        <div className="col-lg-12">
                            <Tabs
                                defaultActiveKey="profile"
                                id="justify-tab-example"
                                className="mb-3"
                                justify
                            >
                                <Tab eventKey="inclusion" title={<h3 ClassName="tabh3">Inclusion</h3>} >
                                    <Inclusion />
                                </Tab>
                                <Tab eventKey="exclusion" title={<h3 ClassName="tabh3">Exclusion</h3>}>
                                    <Exclusion />
                                </Tab>

                            </Tabs>

                        </div>{/* colend */}
                    </div>{/* rowend */}

                    <div className="row">
                        <div className="col-lg-12 endrowinlusion"><p>*This cover is included in the Medical Expenses cover for the Gold Plus plan only and is not a separate benefit; subject to terms and conditions.</p></div>
                    </div>

                    <div className='row'>
                        <div className="col endrowinclusion2">
                            <p>Documents:
                                <a href="/docs/default-source/assets/student-travel-pdf/policy-wordings_student-travel-insurance.pdf" target="_blank">Globetrotter – overseas individual student travel insurance Policy Wordings</a>
                            </p>
                        </div>
                    </div>
                </div>{/* containerend */}
            </section>

            {/*----------------------------------------------------------------------fifth section------------------------------------------------- */}
            
            <section className='secFivebg py-5'>
                <div className='container px-1'>
                    <div className="row d-flex justify-content-center">

                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 px-2">
                            <img src={StudentTravelClaimLeftimg} className="img-fluid mx-5" alt="Student Travel Insurance Claim" />
                        </div>

                        <div className="col-xs-12 col-sm-12 col-lg-7 col-md-7 px-1">
                            <div className="mainclaimbox">
                                <h2>Claim calmly</h2>
                                <div className='mb-3 text-left claimbox1'>
                                    <p>It’s as easy as</p>
                                    <ul className='px-3 list-unstyled '>
                                        <li>1</li>
                                        <li>2</li>
                                 <li>3</li>
                                    </ul>
                                </div>

                                <ul className='mb-5 list-unstyled claimbox2'>
                                    <li >
                                        <span>1</span>
                                        <div >
                                            <img src={claimone} className="img-fluid" alt='claimone' />
                                        </div>
                                        <p>Intimate</p>
                                    </li>

                                    <li>
                                        <span>2</span>
                                        <div >

                                            <img src={claimtwo} className="img-fluid" alt='claimtwo' />
                                        </div>
                                        <p>Survey &amp; Verify</p>
                                        
                                    </li>

                                    <li>
                                        <span>3</span>
                                        <div>

                                            <img src={claimthird} className="img-fluid" alt='claimthird' />
                                        </div>
                                        <p>Settle</p>
                                       
                                    </li>

                                </ul>

                                <a href="https://www.icicilombard.com/travel-claims" className="btn-primary-claimbox" >Know more</a>

                            </div>
                        </div>

                    </div>

                </div>{/* containerend */}
            </section>

{/**---------------------------------------------------------------------------------------------------------------------- */}




        </>
        // main container end
    )
}

export default StudentTravel