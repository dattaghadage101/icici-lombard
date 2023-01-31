import '../../CSS/WorkmenInsurence.css'
import Workmenselect from '../../JSONDATA/Workmeninsurence.json'
import React, { useState } from 'react'
import Navbar from '../../BussinessComponent/Navbar'

function WorkmenInsurence() {
  const [formdata, setformdata] = useState({
    industry_category: "",
    sub_industry_category: "",
    policy_period_month: "",
    number_skilled_worker: "",
    sallary_semi_skilled_worker: "",
    number_semi_skilled_worker: "",
    sallary_semi_skilled_worker: "",
    number_of_unskilled_worker: "",
    per_worker_sallary: "",
    claim_policy_more_oneLack: {
      more_one_lack_claim: "",
      claim_amount: "",
      mobile: "",
      email_id: "",
      name_of_company: "",
      pincode: ""
    },
    claim_policy_less_oneLack: {
      less_one_lack_claim: "",
      mobile_number: "",
      email_id: "",
      name_of_company: "",
      email_id: "",
      name_of_company: "",
      pincode: ""

    }




  })
  const [value, setvalue] = useState(true)

  const getvalue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformdata({ ...formdata, [name]: value })

  }
  const getvalue1 = (x) => {
    const name1 = x.target.name;
    const value1 = x.target.value;
    console.log(name1, value1)
    setformdata({ ...formdata, claim_policy_more_oneLack: { ...formdata.claim_policy_more_oneLack, [name1]: value1 } })

  }
  const getvalue2 = (y) => {
    const name1 = y.target.name;
    const value1 = y.target.value;
    console.log(name1, value1)
    setformdata({ ...formdata, claim_policy_less_oneLack: { ...formdata.claim_policy_less_oneLack, [name1]: value1 } })

  }
  const submitdata = () => {
    console.log(formdata)
    alert(JSON.stringify(formdata))
  }
  return (
    <div>
    <Navbar/>
      <section>
        <div className="container-fluid top-main-form">
          <div className="container-fluid top-form ">
            <div className="row">
              <div className="col-10  col-lg-6 table-side-image">
                <h2>Workmen’s Compensation Insurance</h2>
                <p>Protect your workers under a single policy</p>
                <img className='image-fluid text-center w-75 d-none d-lg-block' src="https://sme.icicilombard.com/assetsSME/images/wc_banner_new.webp" alt="" />
              </div>

              <div className="col-lg-6 bg-indigo text-white mt-5 mt-lg-0">
                <div className="p-5 mt-5 ">

                  <div className="mb-4 pb-2">

                    <div className="mb-4">

                      <select name='industry_category' onChange={(e) => getvalue(e)} className=" select form-control form-control-lg">
                        <option value="" disabled selected>--Select--</option>
                        {
                          Workmenselect.map((e, i) => (
                            <option value={e.value}>{e.lable}</option>
                          ))
                        }
                      </select>
                      <label className="form-label fs-5" for="form3Examplea4"> Select Industry Category</label>


                    </div>
                  </div>
                  <div className="mb-4 pb-2">
                    <div className="mb">
                      <select name='sub_industry_category' onChange={(e) => getvalue(e)} className=" select form-control form-control-lg">
                        <option value="" disabled selected>--Select--</option>
                        <option value="NA">NA</option>
                      </select>
                      <label className="form-label fs-5" for="form3Examplea4">Select Sub Industry Category</label>

                    </div>
                  </div>

                  <div className="row">
                    <div className="mb-4 pb-2">
                      <div className="form-outline form-white">
                        <input type="text" id="form3Examplea6" onChange={(e) => getvalue(e)} name='policy_period_month' className="form-control form-control-lg" />
                        <label className="form-label fs-5" for="form3Examplea6">Policy Period Month</label>
                      </div>
                    </div>
                    <div className="col-md-5 mb-4 pb-2">

                      <div className="form-outline form-white">
                        <input type="text" id="form3Examplea4" onChange={(e) => getvalue(e)} name='number_skilled_worker' className="form-control form-control-lg" />
                        <label className="form-label fs-5" for="form3Examplea4">Number Of Skilled Worker</label>
                      </div>

                    </div>
                    <div className="col-md-7 mb-4 pb-2">

                      <div className="form-outline form-white">
                        <input type="text" id="form3Examplea5" onChange={(e) => getvalue(e)} name='sallary_skilled_worker' className="form-control form-control-lg" />
                        <label className="form-label fs-5" for="form3Examplea5">Sallary (per month per worker)</label>
                      </div>

                    </div>
                    <div className="col-md-5 mb-4 pb-2">

                      <div className="form-outline form-white">
                        <input type="text" id="form3Examplea4" onChange={(e) => getvalue(e)} name='number_semi_skilled_worker' className="form-control form-control-lg" />
                        <label className="form-label fs-5" for="form3Examplea4">Number Of Semi Skilled Worker</label>
                      </div>

                    </div>
                    <div className="col-md-7 mb-4 pb-2">

                      <div className="form-outline form-white">
                        <input type="text" id="form3Examplea5" onChange={(e) => getvalue(e)} name='sallary_semi_skilled_worker' className="form-control form-control-lg" />
                        <label className="form-label fs-5" for="form3Examplea5">Sallary (per month per worker)</label>
                      </div>

                    </div>
                    <div className="col-md-5 mb-4 pb-2">

                      <div className="form-outline form-white">
                        <input type="text" id="form3Examplea4" onChange={(e) => getvalue(e)} name="number_of_unskilled_worker" className="form-control form-control-lg" />
                        <label className="form-label fs-5" for="form3Examplea4">Number Of Unskilled Worker</label>
                      </div>

                    </div>
                    <div className="col-md-7 mb-4 pb-2">

                      <div className="form-outline form-white">
                        <input type="text" id="form3Examplea5" onChange={(e) => getvalue(e)} name='per_worker_sallary' className="form-control form-control-lg" />
                        <label className="form-label fs-5" for="form3Examplea5">Sallary (per month per worker)</label>
                      </div>

                    </div>
                  </div>
                  <label htmlFor="" className='fs-2'>Did you have claim in your last policy?</label>
                  <div className="row">
                    <div className="col-md-5 mb-4 mt-3 pb-2">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input fs-3" onChange={(x) => {setvalue(true) ; getvalue1(x); setvalue(true) }} type="radio" name="more_one_lack_claim" id="inlineRadio1" value="More than Rs 1 lac claim" />
                        <label class="form-check-label fs-4" for="inlineRadio1">More than Rs 1 lac claim</label>
                      </div>
                    </div>
                    <div className="col-md-5 mt-3 mb-4 pb-2">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input fs-3" onChange={(y) => { setvalue(false) ;getvalue2(y); setvalue(false) }} type="radio" name="more_one_lack_claim" id="inlineRadio1" value="Less than Rs 1 lac claim" />
                        <label class="form-check-label fs-4" for="inlineRadio1">Nil or Less than Rs 1 lac claim</label>
                      </div>
                    </div>

                  </div>  


                  {
                    value ? <>
                      <div className="row">
                        <div className="mb-4 pb-2">
                          <div className="form-outline form-white">
                            <input type="text" id="form3Examplea6" onChange={(x) => getvalue1(x)} name='claim_amount' className="form-control form-control-lg" />
                            <label className="form-label fs-5" for="form3Examplea6"> Enter Claim Amount (Paid + Outstanding) </label>
                          </div>
                        </div>
                      </div>


                      <div className="row">

                        <div className="col-md-5 mb-4 pb-2">

                          <div className="form-outline form-white">
                            <input type="text" id="form3Examplea4" onChange={(x) => getvalue1(x)} name='mobile' className="form-control form-control-lg" />
                            <label className="form-label fs-5" for="form3Examplea4"> Mobile Number</label>
                          </div>

                        </div>
                        <div className="col-md-7 mb-4 pb-2">

                          <div className="form-outline form-white">
                            <input type="text" id="form3Examplea5" onChange={(x) => getvalue1(x)} name='email_id' className="form-control form-control-lg" />
                            <label className="form-label fs-5" for="form3Examplea5"> Email ID</label>
                          </div>

                        </div>
                        <div className="col-md-5 mb-4 pb-2">

                          <div className="form-outline form-white">
                            <input type="text" id="form3Examplea4" onChange={(x) => getvalue1(x)} name='name_of_company' className="form-control form-control-lg" />
                            <label className="form-label fs-5" for="form3Examplea4"> Name of Company</label>
                          </div>

                        </div>
                        <div className="col-md-7 mb-4 pb-2">

                          <div className="form-outline form-white">
                            <input type="text" id="form3Examplea5" onChange={(x) => getvalue1(x)} name='pincode' className="form-control form-control-lg" />
                            <label className="form-label fs-5" for="form3Examplea5"> Pincode</label>
                          </div>
                        </div>
                      </div>
                    </> : <div className="row">

                      <div className="col-md-5 mb-4 pb-2">

                        <div className="form-outline form-white">
                          <input type="text" id="form3Examplea4" onChange={(y) => getvalue2(y)} name='mobile_number' className="form-control form-control-lg" />
                          <label className="form-label fs-5" for="form3Examplea4">Mobile Number</label>
                        </div>

                      </div>
                      <div className="col-md-7 mb-4 pb-2">

                        <div className="form-outline form-white">
                          <input type="text" id="form3Examplea5" onChange={(y) => getvalue2(y)} name='email_id' className="form-control form-control-lg" />
                          <label className="form-label fs-5" for="form3Examplea5">Email_ID</label>
                        </div>

                      </div>
                      <div className="col-md-5 mb-4 pb-2">

                        <div className="form-outline form-white">
                          <input type="text" id="form3Examplea4" onChange={(y) => getvalue2(y)} name='name_of_company' className="form-control form-control-lg" />
                          <label className="form-label fs-5" for="form3Examplea4"> Name of Company</label>
                        </div>

                      </div>
                      <div className="col-md-7 mb-4 pb-2">

                        <div className="form-outline form-white">
                          <input type="text" id="form3Examplea5" onChange={(y) => getvalue2(y)} name='pincode' className="form-control form-control-lg" />
                          <label className="form-label fs-5" for="form3Examplea5">Pincode</label>
                        </div>


                      </div>
                    </div>
                  }
                  <button type="button" className="btn btn-light btn-lg "
                    data-mdb-ripple-color="dark" onClick={submitdata}>submit</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WorkmenInsurence