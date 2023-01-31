import React, { useState } from 'react'
import '../../CSS/Ghelthinsurence.css'
import GHI_Banner_New from '../../images/GHI_Banner_New.svg'
import Navbar from '../../BussinessComponent/Navbar'

function Ghelthinsurence() {
  const [data, setdata] = useState({
    name_corporate: "",
    pincode: "",
    email: "",
    mobile_number: "",
    agree: "disagree",
    wh_update: "yes"

  })
  const getvalue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({ ...data, [name]: value })
  }
  const submitform = () => {
    console.log(data)
    alert(JSON.stringify(data))
  }
  return (
    <div>
    <Navbar/>
      <section className="h-100  main-helth-insurence">
        <div className="container-fluid py-5 h-100" >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className=" card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">

                    <div className="col-3 mt-5 coresoul-back-image">
                      <div id="demo" className="carousel  slide  carousel-fade" data-bs-ride="carousel" data-interval="1000">


                        {/* The text slideshow/carousel */}
                        <div className="carousel-inner coresoul-word " id='on' >
                          <div className="carousel-item  active "  >
                            <h1>Group health insurance</h1>
                            <p>Simple, affordable, customized health insurance <br /> for your employees</p>
                          </div>
                          <div className="carousel-item">
                            <h1>Group health insurance</h1>
                            <p>Health plan created exclusively for your <br/> employees</p>
                          </div>
                          {/* <div className="carousel-item">
                            <h1>Group health insurance</h1>
                            <p>We are there when your employees need us the most</p>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 Ghelthinsufields">
                    <div className="card-body p-md-5 ">


                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example9" onChange={(e) => getvalue(e)} name='name_corporate' className="form-control form-control-sm" />
                        <label className="form-label" htmlFor="form3Example9">Name of Corporate <sup>*</sup></label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" id="" onChange={(e) => getvalue(e)} name='pincode' className="form-control form-control-sm" />
                        <label className="form-label" htmlFor="form3Example90">Pincode <sup>*</sup></label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example99" onChange={(e) => getvalue(e)} name='email' className="form-control form-control-sm" />
                        <label className="form-label" htmlFor="form3Example99">Email <sup>*</sup> </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example97" onChange={(e) => getvalue(e)} name='mobile_number' className="form-control form-control-sm" />
                        <label className="form-label" htmlFor="form3Example97">Mobile Number <sup>*</sup></label>
                      </div>

                      <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                      </div>
                      <div>
                        {/* Default checkbox */}
                        <div className="form-check">
                          <input className="form-check-input" onChange={(e) => getvalue(e)} value='agree' name="agree" type="checkbox" defaultValue id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault">I agree to the Terms and Conditions
                          </label>
                        </div>
                        {/* Checked checkbox */}
                        <div className="form-check">
                          <input className="form-check-input" onChange={(e) => getvalue(e)} name='wh_update' type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                          <label className="form-check-label" htmlFor="flexCheckChecked">Receive updates on WhatsApp </label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-end pt-3 mt-5">
                        <button type="button" onClick={submitform} className="btn btn-warning btn-lg ms-2">Submit form</button>
                      </div>

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

export default Ghelthinsurence