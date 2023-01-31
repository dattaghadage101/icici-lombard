import React, { useState } from 'react'
import '../../CSS/MarinOpenInsurence.scss'
import marindata from '../../JSONDATA/MarinInsuJson.json'
import Navbar from '../../BussinessComponent/Navbar'


function MarinOpenInsurence() {
    const[btnname,setbtnname]=useState("Inland")
    return (
        <div>
        <Navbar/>
            <section className="h-100  main-helth-insurence">
                <div className="container-fluid py-5 h-100" >
               
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="row"></div>
                        <div className="col">
                            <div className=" card-registration my-4">
                                <div className="row g-0">
                                    <div className="col-xl-6  marinopentext">


                                        <div id="demo" className="carousel  text-center marinopentextinner carousel-fade" data-bs-ride="carousel" data-interval="1000">


                                            {/* The text slideshow/carousel */}
                                            <h1>Marine Open {btnname} <br /> Declaration Policy</h1>
                                            <h3>Super Saver Marine</h3>
                                            <div className="carousel-inner " id='on' >
                                                <div className="carousel-item  active "  >
                                                    <p><img src="https://sme.icicilombard.com/assetsSME/images/bst_new.png" width={50} alt="img" /> Superfast Claims settlement for claims up <br /> to 5 Lacs within 10 working days</p>
                                                </div>
                                                <div className="carousel-item">
                                                    <p><img src="https://sme.icicilombard.com/assetsSME/images/psp_new.png" width={50} alt="img" /> Instant policy issuance & online transit <br /> declaration through dedicated portal</p>
                                                </div>
                                                <div className="carousel-item">
                                                    <p><img src="https://sme.icicilombard.com/assetsSME/images/oc_new.png" width={50} alt="img" /> Online Claim intimations through <br /> website/round the clock call centre (Toll <br /> free 1800 2666)</p>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xl-6 Ghelthinsufields">

                                            <div className="row mt-3">
                                                <div className="col-4">
                                                <button type="button" class="btn btn-secondary btn-rounded">Secondary</button>
                                                </div>
                                                <div className="col-4">
                                                <button type="button" class="btn btn-secondary btn-rounded">Secondary</button>
                                                </div>
                                                <div className="col-4">
                                                <button type="button" class="btn btn-secondary btn-rounded">Secondary</button>
                                                </div>
                                            </div>

                                        <div className="row">

                                            <div className="col-md-6 mb-4 pb-2">

                                                <div className="form-outline form-white">
                                                    <input type="text" id="form3Examplea4" name='name_of_company' className="form-control form-control-lg" />
                                                    <label className="form-label fs-5" for="form3Examplea4"> Name of Company <sup>*</sup></label>
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">

                                                <div className="form-outline form-white">
                                                    <input type="text" id="form3Examplea5" name='pincode' className="form-control form-control-lg" />
                                                    <label className="form-label fs-5" for="form3Examplea5"> Pincode <sup>*</sup></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">

                                                <div className="form-outline mb-4">
                                                    <select className="form-select  form-control form-control-lg fs-4" name="commodity_type">
                                                        <option value={1} disabled selected>--select--</option>
                                                        {
                                                            marindata.map((e, i) => (
                                                                <>

                                                                    <option value={e.value} >{e.lable}</option>

                                                                </>
                                                            ))
                                                        }
                                                    </select>
                                                    <label className="form-label" htmlFor="form3Example8">Commodity Type <sup>*</sup></label>
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">

                                                <div className="form-outline form-white">
                                                    <input type="text" id="form3Examplea5" name='pincode' className="form-control form-control-lg" />
                                                    <label className="form-label fs-5" for="form3Examplea5"> Open Yearly Sum Insured <sup>*</sup></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">

                                                <div className="form-outline form-white">
                                                    <input type="text" id="form3Examplea4" name='email' className="form-control form-control-lg" />
                                                    <label className="form-label fs-5" for="form3Examplea4">Email <sup>*</sup></label>
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">

                                                <div className="form-outline form-white">
                                                    <input type="text" id="form3Examplea5" name='pincode' className="form-control form-control-lg" />
                                                    <label className="form-label fs-5" for="form3Examplea5">Mobile Number <sup>*</sup></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">

                                                <div className="form-outline form-white">
                                                    <br />
                                                    <label className="form-label doyoclaim " for="form3Examplea4">Do you have any previous <br /> claims?  <sup>*</sup></label>
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">

                                                <div className="form-check form-switch text-center">
                                                    <input className="form-check-input  switchbtn" type="checkbox" id="flexSwitchCheckDefault" />
                                                    <label className="form-check-label switchlable" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                                                </div>
                                            </div>
                                        </div>



                                        <div>
                                            {/* Default checkbox */}
                                            <div className="form-check">
                                                <input className="form-check-input" value='agree' name="agree" type="checkbox" defaultValue id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">I agree to the Terms and Conditions
                                                </label>
                                            </div>
                                            {/* Checked checkbox */}
                                            <div className="form-check">
                                                <input className="form-check-input" name='wh_update' type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                                                <label className="form-check-label" htmlFor="flexCheckChecked">Receive updates on WhatsApp </label>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-start pt-3 mt-5">
                                            <button type="button" className="btn btn-warning btn-lg w-25 ms-2">Procced</button>
                                            <button type="button" className="btn btn-secondary btn-lg w-25 ms-2">RETRIVE QUOTE</button>

                                        </div>




                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MarinOpenInsurence