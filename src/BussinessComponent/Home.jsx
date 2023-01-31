import React from 'react'
import '../CSS/home.css'
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../images/banner-1.png'
import banner2 from '../images/banner-2.png'
import banner3 from '../images/banner-3.png'
import ad1 from '../images/ad-1.png';
import ad2 from '../images/ad-3.png';
import newlogo from '../images/new.png'
import busslns from '../images/bussIns.png'
import quotes from '../images/quotes.png'
import { Link, NavLink } from 'react-router-dom';
import Navbar from './Navbar';
function Home() {
    return (
        <>
        <Navbar/>
            <div className="container-fluid top">
                <div id="carouselExampleInterval" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item" data-bs-interval="5000">
                            <div className='offset-md-1 image-text'>
                                <h2>Get Set Go</h2>
                                <p>One stop business insurance solutions for<br />MSMEs & Start-ups</p>
                            </div>

                            <img src={banner2} class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" height={350} style={{ marginTop: "-30px" }}></img>

                        </div>



                        <div class="carousel-item active" data-bs-interval="5000">
                            <div className='offset-md-1 image-text'>
                                <h2>100% Trust, Zero Hassle</h2>
                                <p>Helping MSMEs & Start-ups in simplifying <br />Business Insurance</p>
                            </div>
                            <img src={banner1} class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" height={350} style={{ marginTop: "-30px" }}></img>

                        </div>

                        <div class="carousel-item active" data-bs-interval="5000">
                            <div className='offset-md-1 image-text'>
                                <h2>Best in Class Service</h2>
                                <p>End to end solutions with 24x7 support, Quick <br />and Easy Claim Process, Dedicated Assistance</p>
                            </div>
                            <img src={banner3} class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" height={350} style={{ marginTop: "-30px" }}></img>

                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* ............................................second header............................ */}
            <div className="container-fluid second ">
                <h3 class="d-none d-lg-inline-block  ms-5">Select from our wide range of Business Insurance Products</h3>
                <div className="row justify-content-lg-between ms-5 me-sm-5 me-xm-5">
                    <div className="col-8 col-sm-12 col-xl-8  second-header">
                        <ul>
                            <li className=' col-lg-4 col-md-4 col-sm-6 sm-6'><NavLink className='btn  links' to="/"><img style={{ marginLeft: "-15px" }} src="https://sme.icicilombard.com/assetsSME/images/marine-banner-new.png" alt="link-logo" /><span> Marine Single Transit</span></NavLink></li>
                            <li className=' col-lg-4 col-md-4 col-sm-6 sm-6'><NavLink className='btn  links' to=""><img src="https://sme.icicilombard.com/assetsSME/images/marine-open.png" alt="link-logo" /><span> Marine Open Insurence</span></NavLink></li>
                            <li className=' col-lg-4 col-md-4 col-sm-6 sm-6'><NavLink className='btn  links' to=""><img src="https://sme.icicilombard.com/assetsSME/images/workmen-banner.png" alt="link-logo" /> <span>Workmen Compensation</span></NavLink></li>
                            <li className=' col-lg-4 col-md-4 col-sm-6 sm-6'><NavLink className='btn  links' to=""><img src="https://sme.icicilombard.com/assetsSME/images/fire-banner.png" alt="link-logo" /><span> Fire (property) Insurence</span></NavLink></li>
                            <li className=' col-lg-4 col-md-4 col-sm-6 sm-6'><NavLink className='btn  links' to=""><img style={{ marginLeft: "-20px" }} src="https://sme.icicilombard.com/assetsSME/images/group-health-banner.png" alt="link-logo" /><span>Group Helth Insurence</span></NavLink></li>
                            <li className=' col-lg-4 col-md-4 col-sm-6 sm-6'><NavLink className='btn  links' to=""><img style={{ marginLeft: "-20px" }} src="https://sme.icicilombard.com/assetsSME/images/constructors.png" alt="link-logo" /><span> Contractor's All Risk<br />Insurence</span></NavLink></li>
                            <li className=' col-lg-4 col-md-4 col-sm-6 sm-6'><NavLink className='btn  links' to=""><img src="https://sme.icicilombard.com/assetsSME/images/indemnity-doc.png" alt="link-logo" /> <span>Professional Indemnity <br />for Doctors</span></NavLink></li>
                            <li className=' col-lg-4 col-md-4 col-sm-6 sm-6'><NavLink className='btn  links' to=""><img src="https://sme.icicilombard.com/assetsSME/images/indemnity-ca.png" alt="link-logo" /> <span>PI Chartered Accountants</span></NavLink></li>
                            <li className=' col-lg-4 col-md-4 col-sm-6 sm-6'><NavLink className='btn  links' to=""><img style={{ marginLeft: "-40px" }} src="https://sme.icicilombard.com/assetsSME/images/risk-management.png" alt="link-logo" /><span> Risk Management</span></NavLink></li>
                        </ul>
                    </div>
                    {/* ...............................................min coresole.................................... */}

                    <div style={{ width: "30%", marginLeft: "10px" }} className="col-3  second-slide shadow-lg mini-coresoul  d-none d-sm-none d-xl-block me">
                        <div id="demo" className="carousel slide " data-bs-ride="carousel">
                            {/* Indicators/dots */}
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
                                <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
                                <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
                            </div>
                            {/* The slideshow/carousel */}
                            <div className="carousel-inner" id='on'>
                                <div className="carousel-item active" >
                                    <img src={ad1} alt="Los Angeles" className="d-block w-100 " height={300} width={100} />
                                </div>
                                <div className="carousel-item">
                                    <img src={ad2} alt="Chicago" className="d-block w-100" height={300} width={100} />
                                </div>
                            </div>
                            {/* Left and right controls/icons */}
                            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" />
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                <span className="carousel-control-next-icon" />
                            </button>
                        </div>
                    </div>

                    {/* ...............................................end coresol.......................................... */}
                </div>
            </div>
            {/* .......................middle section start.................................. */}
            <section>
                <div className="container-fluid">
                    <div className="row middle-section">
                        <div className="col-lg-5 order-2 order-lg-1 text-center bis-img">
                            <img src={busslns} className="image-fluid" alt="bussiness insurence image" />
                        </div>
                        <div className="col-lg-7 order-1 order-lg-2">
                            <h1>Business Insurance</h1>
                            <p>Business insurance, also known as commercial insurance, helps protect business owners from unexpected losses. We offer different types of insurance for businesses, including coverage for property damage, legal liability and employee-related risks. No matter what industry you are in, your company faces risks every day. That’s why ICICI Lombard offers a wide range of business insurance covers, designed to identify and reduce those risks. Effective risk management is the key to a successful business. Our comprehensive commercial solutions are aimed at addressing the diverse risks faced by businesses.</p>

                        </div>
                    </div>
                </div>
            </section>
            {/* ...........................................why choice section start........................... */}
            <section>
                <div className="container why-choose-main">
                    <div className="row why-choose">
                        <div className="text-center choice-title">
                            <h3 >Why choose ICICI Lombard</h3>
                            <p>ICICI Lombard is one of the Leading General Insurance Company in Private sector. <NavLink> <span style={{ color: "#282828", textDecoration: "underline" }}>Financial Highlights FY 2022</span> </NavLink> </p>
                        </div>
                    </div>
                    <div className="row text-center mt-5 choice-info-main">
                        <div className="col-sm-4 col-md-4"   >
                            <div className="choice-info">
                                <h3 >₹185.62 Billion</h3>
                                <p>Gross Written Premium</p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <div className="choice-info">
                                <h3 >29.3 Million</h3>
                                <p>Count of Policies issued</p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <div className="choice-info">
                                <h3 >2.3 Million</h3>
                                <p>
                                    Count of Claims settled
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="Testimonialssection">
                    <div className="container testimon">
                        <div className="row">
                            <p className='text-center' id='Testimonialsh3'>Testimonials</p>
                            <div className="col-12">
                                <div id="carouselExampleDark" className=" carousel carousel-dark slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active " data-bs-interval={10000}>
                                            {/* <img src={banner2} class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" height={350} style={{ marginTop: "-30px" }}></img> */}
                                            <div className="row text-center" id='text-center'>
                                                <div className=" col-8 col-sm-8 col-lg-4">
                                                    <div class="innerdiv">
                                                        <ul className='list-unstyled d-flex mdloretext'>
                                                            <li>Jesse</li> |
                                                            <li>Martin Luther  University</li>
                                                            <li><img src={quotes} alt="img" /></li>
                                                        </ul>
                                                        <p>
                                                            We are pleased with the service provided by ICICI Lombard group health insurance from the initial contact to date. ICICI Lombard has given us the information and choices we needed and the employees are
                                                            fantastic at addressing queries. We are happy to provide this testimonial to their high standard of professional services.

                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 d-none d-lg-block">
                                                    <div class="innerdiv">
                                                        <ul className='list-unstyled d-flex mdloretext'>
                                                            <li>Kachhara </li> |
                                                            <li>Thermodynamic  Pvt Ltd</li>
                                                            <li><img src={quotes} alt="" /></li>
                                                        </ul>
                                                        <p>
                                                            Recently, I applied for the claim for my child as he was admitted in Max Dehradun and I would really like to appreciate that the <b>claim has been settled within 4-5 hours of time after I claimed it</b>. Well I had
                                                            claimed before also when I used to have different company, but they took lot of time, but ICICI Lombard really takes care of their customers very well. And previous <span style={{ color: "red" }}>more</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="carousel-item" data-bs-interval={2000}>
                                            {/* <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width={800} height={400} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#bbb" dy=".3em">Second slide</text></svg> */}
                                            <div className="row text-center " id='text-center'>
                                                <div className="col-8 col-sm-8 col-lg-4 ">
                                                    <div class="innerdiv ">
                                                        <ul className='list-unstyled d-flex mdloretext'>
                                                            <li>Dalwin Marine</li> |
                                                            <li>Martin Luther Christian </li>
                                                            <li><img src={quotes} alt="" /></li>
                                                        </ul>
                                                        <p>
                                                            We are pleased with the service provided by ICICI Lombard group health insurance from the initial contact to date. ICICI Lombard has given us the information and choices we needed and the employees are
                                                            fantastic at addressing queries. We are happy to provide this testimonial to their high standard of professional services.

                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 d-none d-lg-block">
                                                    <div class="innerdiv ">
                                                        <ul className='list-unstyled d-flex mdloretext'>
                                                            <li>Mayuri Sutar</li> |
                                                            <li>Dalwin Marine</li>
                                                            <li><img src={quotes} alt="" /></li>
                                                        </ul>
                                                        <p>
                                                            claimed before also when I used to have different company, but they took lot of time, but ICICI Lombard really takes care of their customers very well. And previous time when I claimed it, it was having lots of hassles to get the claim settled but with ICICI Lombard the claim settlement process was hassle free and the customer care team.

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            {/* <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width={800} height={400} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#e5e5e5" /><text x="50%" y="50%" fill="#999" dy=".3em">Third slide</text></svg> */}
                                            <div className="row text-center" id='text-center'>
                                                <div className="col-8 col-sm-8 col-lg-4">
                                                    <div class="innerdiv ">
                                                        <ul className='list-unstyled d-flex mdloretext'>
                                                            <li>Dalwin Marine</li> |
                                                            <li>Martin  Christian</li>
                                                            <li><img src={quotes} alt="" /></li>
                                                        </ul>
                                                        <p>
                                                            We are pleased with the service provided by ICICI Lombard group health insurance from the initial contact to date. ICICI Lombard has given us the information and choices we needed and the employees are
                                                            fantastic at addressing queries. We are happy to provide this testimonial to their high standard of professional services.

                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 d-none d-lg-block">
                                                    <div class="innerdiv ">
                                                        <ul className='list-unstyled d-flex mdloretext'>
                                                            <li>Jesse</li> |
                                                            <li> Christian University</li>
                                                            <li><img src={quotes} alt="" /></li>
                                                        </ul>
                                                        <p>
                                                            claimed before also when I used to have different company, but they took lot of time, but ICICI Lombard really takes care of their customers very well. And previous time when I claimed it, it was having lots of hassles to get the claim settled but with ICICI Lombard the claim settlement process was hassle free and the customer care team is very active and responsive.

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=''>
                <div className="container-fluid core-bussiness-main">
                    <div className="row core-bussiness">

                        <h3>Core differentiators that define our business</h3>

                        {/* <div className="col-3">
                            <img className='image-fluid' src="https://sme.icicilombard.com/assetsSME/images/strong-brand-equitry.png" alt="image" /> <span>Strong <br />Brand Equity </span>
                            </div>
                            <div className="col-3">
                            <img className='image-fluid' src="https://sme.icicilombard.com/assetsSME/images/extensive-distribution-network.png" alt="image" /><span>Extensive <br />Service Network</span>
                            </div>
                            <div className="col-3">
                            <img className='image-fluid' style={{ marginTop: "-10px" }} src="https://sme.icicilombard.com/assetsSME/images/comprehensive-product-portfolio.png" alt="image" /><span>Comprehensive <br />Product Portfolio</span>
                            </div>
                            <div className="col-3">
                            <img className='image-fluid' style={{ marginTop: "-10px" }} src="https://sme.icicilombard.com/assetsSME/images/technology-differentiation.png" alt="image" /> <span>Technology <br />Differentiation</span>
                            </div> */}
                        <ul>
                            <li><img src="https://sme.icicilombard.com/assetsSME/images/strong-brand-equitry.png" alt="image" /> <span>Strong <br />Brand Equity </span></li> <br />
                            <li><img src="https://sme.icicilombard.com/assetsSME/images/extensive-distribution-network.png" alt="image" /><span>Extensive <br />Service Network</span></li>
                            <li><img style={{ marginTop: "-10px" }} src="https://sme.icicilombard.com/assetsSME/images/comprehensive-product-portfolio.png" alt="image" /><span>Comprehensive <br />Product Portfolio</span></li>
                            <li><img style={{ marginTop: "-10px" }} src="https://sme.icicilombard.com/assetsSME/images/technology-differentiation.png" alt="image" /> <span>Technology <br />Differentiation</span></li>

                        </ul>

                    </div>
                </div>
            </section>
            {/* ............................................navtablist..................... */}
            <section>
                <div className="container-fluid mt-5 ">
                    <div className="row navtablist-row">
                        <div className="col-12 tablist-data">
                            <ul class="nav nav-tabs  w-100 nav-tablist" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Claim Settlement</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Innovation</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Reinsurancen Capacity</button>
                                </li>

                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                    <div className="container-fluid">
                                        <div className="row mt-5">
                                            <div className="col 12 col-lg-5 ms-auto">
                                                <img className="img-fluid mx-auto d-block" src="https://sme.icicilombard.com/assetsSME/images/Claim_new.png" alt="image" />
                                            </div>
                                            <div className="col-12 col-lg-7 me-5 ms-5  me-md-0 ms-md-0">
                                                <p>
                                                    <li>ICICI Lombard has a remarkable claim settlement ratio in India and leverages Artificial intelligence (AI) and advanced analytics for automated processing of Insurance claims.
                                                        ICICI Lombard settles claims of up to Rs 5 Lakhs by MSMEs within 10 days.</li><br />
                                                    <li>It has pioneered the use of Artificial intelligence and Machine Learning in health claim processing, reducing cashless claim request approval time to few minutes.</li><br />
                                                    <li>In segments such as frequency driven marine cargo insurance claims portfolio, the company has introduced robotics to handle large number of claims and to reduce claim settlement turnaround time.</li><br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                    <div className="container-fluid">
                                        <div className="row mt-5 ">
                                            <div className="col 12 col-lg-5 ms-auto">
                                                <img className="img-fluid mx-auto d-block" src="https://sme.icicilombard.com/assetsSME/images/Innovation_new.png" alt="image" />
                                            </div>
                                            <div className="col-12 col-lg-7 me-5 ms-5  me-md-0 ms-md-0 ">
                                                <p>
                                                    <li>We customize our insurance solutions based on customer needs and by harnessing our technological capabilities.</li><br />
                                                    <li>We use the latest technology tools to help you at all stages of your relationship with us.</li><br />
                                                    <li>Our All-in-One insurance solutions like Business Shield and Enterprise Secure comprehensively cover all your key business risks.</li><br />
                                                    <li>Our value added services like Marine loss control solutions and anti-hijacking solutions help in preventing and mitigating risk incidents.</li><br />
                                                    <li>We leverage natural processing and robotic process automation technology to provide a superior digital experience to our customers.</li><br />

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0"> <div className="row">
                                    <div className="container-fluid">
                                        <div className="row mt-5">
                                            <div className="col 12 col-lg-5 ms-auto">
                                                <img className="img-fluid mx-auto d-block" src="https://sme.icicilombard.com/assetsSME/images/Reinsurance_new.png" alt="image" />
                                            </div>
                                            <div className="col-12 col-lg-7 me-5 ms-5  me-md-0 ms-md-0">
                                                <p>
                                                    <li>We have built one of the most robust Reinsurance capacities and have expertise in structuring complex risks. We work with only stable and strong reinsurers which enables us with a strong risk framework.</li>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid">
                    <div className="row Product-strength">
                        <h3 className='text-center Product-strengthh3'>Product strength</h3>
                        <div className="col-12 col-lg-4 a">
                            <img src="https://sme.icicilombard.com/assetsSME/images/fire.png" alt="image" /><br /><br />
                            <strong>Fire</strong>
                            <p>
                                Fire insurance policy covers damage and losses caused by fire and helps to cover the cost of replacement, repair or reconstruction of property.
                                <br /><br />
                                We offer 250+ occupancy types, value added services & can assess risk through remote video and provide a recommendation report.
                            </p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <img src="https://sme.icicilombard.com/assetsSME/images/marine2.png" alt="image" /><br /><br />
                            <strong>Marine</strong>
                            <p>
                                We offer variety of value-added services and customized solutions in our marine insurance.
                                <br /><br />
                                Our loss control consulting services further enhance our value proposition. Our vast experience in logistics planning and execution of Over Dimensional Consignments (ODC) across India makes us a trusted insurance partner.
                            </p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <img src="https://sme.icicilombard.com/assetsSME/images/engineering.png" alt="image" /><br /><br />
                            <strong>Engineering</strong>
                            <p>
                                Our customized and unique solutions drafted by our technical experts for various industries put us at the forefront of risk management.
                                <br /><br />
                                We continue to expand our footprint in this segment and provide value-added & risk management solutions to MSME, SME & corporate clients through our technology driven platforms.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
            {/* <section>

                <div className="container-fluid  whatnewcardmain">
                    <div classname="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card position-relative whatnewcard">
                                <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                                    <a href="#! var image ahe">
                                        <div className="mask">
                                            <div className="d-flex justify-content-start align-items-end h-100">
                                                <h5><span className="badge bg-success ms-2">Eco</span></h5>
                                            </div>
                                        </div>
                                        <div className="hover-overlay">
                                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                        </div>
                                    </a>
                                </div>
                    
                            </div>
                            <div className="card-body position-absolute hello">
                                   <div className="inncarddiv">
                                    <h1>lo</h1>
                                   </div>
                                </div>  
                        </div>
                    </div>
                </div>


            </section> */}
        </>

    )
}

export default Home