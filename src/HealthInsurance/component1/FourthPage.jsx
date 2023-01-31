import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

function FourthPage() {
    return (
        <>
        <div className="container mt-5 mb-5 pl-5">
            <div className="fourth mt-5 mb-5">
                <h2>What are the different types of ICICI Lombard health insurance policies?</h2>
                <p>We offer reliable health insurance plans that take complete care of your medical expenses.</p>
            </div>
            <div className="row cards">
                <div className="col-lg-4 col-xsm-12">
                    <div className='innercard3'><h6>Complete Health Insurance </h6><span className='link link1'> Includes BeFit Rider</span></div>
                    <p>ICICI Lombard’s Complete Health Insurance policy provides you with extensive coverage during a medical emergency. The medical policy gives you access to a wide range of cashless hospitals nationwide.</p>
                    {/* <NavLink>Know More</NavLink> */}
                   {/* <Link>Know Link</Link> */}
                </div>
                <div className="col-lg-4 col-xsm-12">
                    <div className='innercard3'><h6>Health Booster </h6><span className='link link2'> BeFit Rider - Coming soon</span></div>
                    <p>Health Booster policy makes your health insurance more potent. It is a super top-up plan that acts as a backup in case your base plan gets exhausted. You can also purchase a Health Booster plan with ICICI Lombard without having a base plan.</p>
                    {/* <NavLink>Know More</NavLink> */}
                </div>
                <div className="col-lg-4 col-xsm-12">
                    <div className='innercard3'><h6>Arogya Sanjeevani Policy </h6><span className='link link3'> BeFit Rider - Coming soon</span></div>
                    <p>Arogya Sanjeevani Policy, ICICI Lombard is a health plan that takes care of your basic healthcare needs. It comes at an affordable premium with flexible sum insured options starting from ₹1 lakh</p>
                    {/* <NavLink>Know More</NavLink> */}
                </div>
            </div>
            <div className="row smallcard2">
                    <div class="row g-0  rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative d-lg-flex d-sm-block">
                        <div class="col-auto  d-lg-block">
                            <img src='/Images/HealthInsurence/befitrider-spd.png' alt='befit cover'/>
                        </div>
                        <div class="col p-4 d-flex flex-column position-static smallcard3">
                            <h1 class="d-inline-block mb-2 text-success">What is Befit Cover?</h1>
                            <p >Get coverage for your OPD requirements on a cashless basis. Befit covers your expenses across physical and virtual consultation by general, specialist and super-specialist doctors as well as physiotherapy sessions. This cover also caters to your other out of pocket expenses such as pharmacy, minor procedures, routine diagnostics and wellness program.</p>
                        </div>    
                    </div>
            </div>
        </div>
          
        </>
    );
}

export default FourthPage;