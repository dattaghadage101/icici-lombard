import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GrFormAdd } from "react-icons/gr";
import { RiSubtractFill, RiHospitalLine } from "react-icons/ri";
import { FaMoneyCheckAlt } from "react-icons/fa";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { padding } from '@mui/system';


function FirstPageOne() {
  const [btncheck, setbtncheck] = useState(false)

  const [input1, setinput1] = useState(0)
  const [input2, setinput2] = useState(0)

  const [input3, setinput3] = useState(0)
  const [input4, setinput4] = useState(0)

  const [input5, setinput5] = useState(0)
  const [input6, setinput6] = useState(0)

  const [modal1, setmodal1] = useState(false)
  const [modal2, setmodal2] = useState(false)
  // const [modal3, setmodal3] = useState(false)
  const now=new Date()

  const handleinput1 = (e) => {
    setinput1(e.target.value)
  }
  // const handleinput2=(e)=>{
  //   setinput2(e.target.value)
  // }
  const handlebtn1 = (e) => {
    if (input1 < 3) {
      setinput1(Number(input1) + 1)
    }
  }
  const handlebtn2 = (e) => {
    if (0 < input1 && input1 <= 3) {
      setinput1(Number(input1) - 1)
    }
    
  }
  const handlebtn4 = () => {
    if (input2 <= 1) {
      setinput2(Number(input2) + 1)
    }
    if(input2==0){
      setmodal2(!modal2)
    }
    if (input2 == 1) {
      setmodal1(!modal1)
    }
  }
  const handlebtn3 = () => {
    if (input2 > 0 && input2 <= 2) {
      setinput2(Number(input2) - 1)
    }
    if(input2==2){
      setmodal1(false)
      setmodal2(true)
    }
    if(input2==0){
      setmodal1(false)
      setmodal2(false)
     
      
    }
  }

  const handlebtn5 = () => {
    if (input3 < 2) {
      setinput3(Number(input3) + 1)
    }
  }
  const handlebtn6 = () => {
    if (input3 > 0 && input3 <= 2) {
      setinput3(Number(input3) - 1)
    }
  }
  const handlebtn7 = () => {
    if (input4 < 1) {
      setinput4(Number(input4) + 1)
    }
  }
  const handlebtn8 = () => {
    if (input4 > 0 && input4 < 3) {
      setinput4(Number(input4) - 1)
    }
  }
  const handlebtn9 = () => {
    if (input5 < 2) {
      setinput5(Number(input5) + 1)
    }
  }
  const handleinput10 = () => {
    if (input5 > 0 && input5 <= 2) {
      setinput5(Number(input5) - 1)
    }
  }
  const handlebtn11 = () => {
    if (input6 < 2) {
      setinput6(Number(input6) + 1)
    }

  }
  const handlebtn12 = () => {
    if (input6 > 0 && input6 <= 2) {
      setinput6(Number(input6) - 1)
    }
  }
  return (
    <>
      <div className='px-5 pb-1'>
        <div className="container px-5 mx-5" style={{ borderRadius: '2rem', background: 'white', color: 'black' }}>
          <div className='row'>

            <ul class="nav nav-tabs firstPageone mt-1" id="myTab" role="tablist">
              <div className="col-3 firstPageonediv">
                <li class="nav-item" role="presentation">


                  <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true" style={{ height: '11rem' }}>
                    <div className='d-flex'>
                      <p className='titlemain p-1'>Comprehensive Health Insurance</p>
                      <img src='Images/HealthInsurence/health3.png' className='p-1' />
                    </div>
                    <p className='undertitle p-1'>Cashless health care for mild sickness to hospitalisation</p>
                  </button>



                </li>
              </div>
              <div className="col-3 firstPageonediv">
                <li class="nav-item" role="presentation">

                  <button class="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="home" aria-selected="true" style={{ height: '11rem' }}>
                    <div className='d-flex'>
                      <p className='titlemain p-1'>Complete Health Insurance</p>
                      <img src='Images/HealthInsurence/health1.png' className='p-1' />
                    </div>
                    <p className='undertitle p-1'>A to z of hospitalisation expenses covered</p>
                  </button>

                </li>
              </div>
              <div className="col-3 firstPageonediv">
                <li class="nav-item" role="presentation">

                  <button class="nav-link mybtn" id="home-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="home" aria-selected="true" style={{ height: '11rem' }}>
                    <div className='d-flex p-1'>
                      <p className='titlemain'>Health Booster</p>
                      <img src='Images/HealthInsurence/health.png' className='p-1' />
                    </div>
                    <p className='undertitle p-1'>Increase your existing cover value</p>
                  </button>

                </li>
              </div>
              <div className="col-3 firstPageonediv">
                <li class="nav-item" role="presentation">

                  <button class="nav-link mybtn2" id="home-tab" data-bs-toggle="tab" data-bs-target="#about" type="button" role="tab" aria-controls="home" aria-selected="true" style={{ height: '11rem' }}>
                    <div className='d-flex'>
                      <p className='titlemain p-1'>Personal Protect</p>
                      <img src='Images/HealthInsurence/health2.png' className='px-3' />
                    </div>
                    <p className='undertitle p-1'>Accident protection</p>
                  </button>

                </li>
              </div>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" >
                <div className="row py-2 px-5 mt-3">
                  <div className='col-4 d-flex pt-2  firstbox'>
                    <p className='mx-3'>Adult(s) (21 years & above)</p>
                    <div className='ml-5'>
                      <button type='button' onClick={handlebtn3} disabled={input2 === 0 ? true : false}> <RiSubtractFill /></button>
                      <input type="text" style={{ width: '2rem' }} value={input2} onChange={handlebtn2} />
                      
                      <button type='button' onClick={handlebtn4} disabled={input2 === 2 ? true : false}> <GrFormAdd /></button>
                    </div>
                    {modal2 ? <div style={{border:'2px solid red',position:'absolute',top:'56%',left:'22%',background:'white'}}>
                                  <span className='p-5'>Adult 1 DOB*</span><span className='p-4'>{now.getDate()}/{now.getMonth()}/{now.getFullYear()}</span>
                                  
                               </div> :''}
                    {modal1 ? <div style={{border:'2px solid red',position:'absolute',top:'56%',left:'22%',background:'white'}}>
                                  <span className='p-5'>Adult 1 DOB*</span><span className='p-4'>{now.getDate()}/{now.getMonth()}/{now.getFullYear()}</span>
                                  <div className='my-5 '>
                                    <span className='p-5'>Adult 1 DOB*</span><span className='p-4'>{now.getDate()}/{now.getMonth()}/{now.getFullYear()}</span>
                                  </div>
                               </div>:''}
                  </div>
                  

                  <div className='col-4 d-flex firstbox pt-2'>
                    <p className='mx-3'>Kid(s) (3 months - 20 years)</p>
                    <div className='ml-5'>
                      <button type='button' onClick={handlebtn2} disabled={input1 === 0 ? true : false}> <RiSubtractFill /></button>
                      <input type="text" style={{ width: '2rem' }} value={input1} onChange={handleinput1} />
                      <button type='button' onClick={handlebtn1} disabled={input1 === 3 ? true : false}> <GrFormAdd /></button>
                    </div>
                    
                  </div>
                  <div className="col-2 text-center mx-5 mt-2">
                    <button className='w-75 h-75 rounded-pill mainbtn'>Get quote</button>
                  </div>
                </div>
                <div className="row firstsecondrow" style={{ padding: '1rem' }}>
                  <div className='col-5 ' style={{ paddingLeft: '5rem' }}>
                    <TextField
                      id="standard-textarea"
                      label="Mobile Number*"
                      // multiline
                      variant="standard"

                    />
                  </div>
                  <div className='col-5'>
                    <TextField
                      id="standard-textarea"
                      label="Email*"
                      // multiline
                      variant="standard"

                    />
                  </div>
                </div>
                <div className="row p-3 mb-5 mx-5 firstthirdrow" style={{ border: '2px solid black' }}>
                  <div className="col-3">
                    <img src="Images/HealthInsurence/befitchi.png" />
                  </div>
                  <div className="col-9">
                    <div className='d-flex'><h3>Make smart health choices with Befit Cover </h3>
                      <img src='Images/HealthInsurence/iladvantage18c0000ff45fd68ff8a0df0055e31444e.png' className='h-50' />
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="d-flex">
                          <RiHospitalLine size='2rem' color="white" /><li>Access great healthcare from the comfort of your home</li>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex">
                          <FaMoneyCheckAlt size='2rem' color="white" /><li>Comprehensive cashless policy for you and your family's day-to-day health needs</li>
                        </div>
                      </div>
                      <div className="col-2">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" >
                  <div className="row py-2 px-5 mt-4" >
                    <div className='col-4 d-flex pt-2  firstbox'>
                      <p className='mx-3'>Adult(s) (21 years & above)</p>
                      <div className='ml-5'>
                        <button type='button' onClick={handlebtn6} disabled={input3 === 0 ? true : false}><RiSubtractFill /></button>
                        <input type="text" style={{ width: '2rem' }} value={input3} onChange={(e) => setinput3(e.target.value)} />
                        <button type='button' onClick={handlebtn5} disabled={input3 === 2 ? true : false}><GrFormAdd /></button>
                      </div>
                    </div>

                    <div className='col-4 d-flex firstbox pt-2'>
                      <p className='mx-3'>Kid(s) (3 months - 20 years)</p>
                      <div className='ml-5'>
                        <button type='button' onClick={handlebtn8} disabled={input4 === 0 ? true : false}> <RiSubtractFill /></button>
                        <input type="text" style={{ width: '2rem' }} value={input4} onChange={(e) => setinput4(e.target.value)} />
                        <button type='button' onClick={handlebtn7} disabled={input4 === 2 ? true : false}> <GrFormAdd /></button>
                      </div>
                    </div>
                    <div className="col-2 text-center mx-5 mt-2">
                      <button className='w-75 h-75 rounded-pill mainbtn'>Get quote</button>
                    </div>
                  </div>
                  <div className="row firstsecondrow" style={{ padding: '1rem' }}>
                    <div className='col-5 ' style={{ paddingLeft: '5rem' }}>
                      <TextField
                        id="standard-textarea"
                        label="Mobile Number*"
                        // multiline
                        variant="standard"

                      />
                    </div>
                    <div className='col-5'>
                      <TextField
                        id="standard-textarea"
                        label="Email*"
                        // multiline
                        variant="standard"

                      />
                    </div>
                  </div>
                  <div className="row p-3 mb-5 mx-5 firstthirdrow" style={{ border: '2px solid black' }}>
                    <div className="col-3">
                      <img src="Images/HealthInsurence/befitchi.png" />
                    </div>
                    <div className="col-9">
                      <div className='d-flex'><h3>Make smart health choices with Befit Cover </h3>
                        <img src='Images/HealthInsurence/iladvantage18c0000ff45fd68ff8a0df0055e31444e.png' className='h-50' />
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="d-flex">
                            <RiHospitalLine size='2rem' color="white" /><li>Access great healthcare from the comfort of your home</li>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="d-flex">
                            <FaMoneyCheckAlt size='2rem' color="white" /><li>Comprehensive cashless policy for you and your family's day-to-day health needs</li>
                          </div>
                        </div>
                        <div className="col-2">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" >
                  <div className="row py-2 px-5 mt-4" >
                    <div className='col-4 d-flex pt-2  firstbox'>
                      <p className='mx-3'>Adult(s) (21 years & above)</p>
                      <div className='ml-5'>
                        <button type='button' onClick={handleinput10} disabled={input5 === 0 ? true : false}><RiSubtractFill /></button>
                        <input type="text" style={{ width: '2rem' }} value={input5} onChange={(e) => setinput5(e.target.value)} />
                        <button type='button' onClick={handlebtn9} disabled={input5 === 2 ? true : false}><GrFormAdd /></button>
                      </div>
                    </div>

                    <div className='col-4 d-flex firstbox pt-2'>
                      <p className='mx-3'>Kid(s) (3 months - 20 years)</p>
                      <div className='ml-5'>
                        <button type='button' onClick={handlebtn12} disabled={input6 == 0 ? true : false}><RiSubtractFill /></button>
                        <input type="text" style={{ width: '2rem' }} value={input6} onChange={(e) => setinput6(e.target.value)} />
                        <button type='button' onClick={handlebtn11} disabled={input6 == 2 ? true : false}><GrFormAdd /></button>
                      </div>
                    </div>
                    <div className="col-2 text-center mx-5 mt-2">
                      <button className='w-75 h-75 rounded-pill mainbtn'>Get quote</button>
                    </div>
                  </div>
                  <div className="row firstsecondrow" style={{ padding: '1rem' }}>
                    <div className='col-5 ' style={{ paddingLeft: '5rem' }}>
                      <TextField
                        id="standard-textarea"
                        label="Mobile Number*"
                        // multiline
                        variant="standard"

                      />
                    </div>
                    <div className='col-5'>
                      <TextField
                        id="standard-textarea"
                        label="Email*"
                        // multiline
                        variant="standard"

                      />
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
              <div class="tab-pane fade" id="about" role="tabpanel" aria-labelledby="contact-tab">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  {/*  */}
                  <div className="row firstsecondrow mb-4" style={{ padding: '1rem' }}>
                    <div className='col-4 ' style={{ paddingLeft: '5rem' }}>
                      <TextField
                        id="standard-textarea"
                        label="Mobile Number*"
                        // multiline
                        variant="standard"

                      />
                    </div>
                    <div className='col-4'>
                      <TextField
                        id="standard-textarea"
                        label="Email*"
                        // multiline
                        variant="standard"

                      />
                    </div>
                    <div className="col-2 text-center mx-5 mt-2">
                      <button className='w-75 h-75 rounded-pill mainbtn'>Get quote</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container firstlast mt-3 px-5 mx-3">
          <div>
            <div className="row">
              <div className="col-6">
                <div className='d-flex'>
                  <input type="checkbox" className='firstcheck' style={{ background: '#D35700' }} />
                  <p style={{ marginTop: '0.7rem' }}>I agree to the terms and conditions</p>
                </div>
              </div>
              <div className="col-6">
                <div className='d-flex simplemodal'>

                  {btncheck ? <input type="button" class="btn modalmainbtn mt-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ background: '#D35700', backgroundImage: <FaMoneyCheckAlt /> }} /> : <input type="button" class="btn modalmainbtn mt-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ background: 'red' }} />}
                  <p >I want to get my quote and policy details on</p>
                  <div class="modal fade mt-5 p-4" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">You don’t want to miss this.</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <p> You don’t want to miss this.By opting out of WhatsApp communication, you’ll lose out on:</p>
                          <li>Your personalised quote delivered directly on WhatsApp</li>
                          <li>WhatsApp notification on policy information, updates & announcements</li>
                        </div>
                        {/* <div class="modal-footer"> */}
                        <button type="button" class="btn rounded-pill btn3 p-4" data-bs-dismiss="modal">keep me posted on WhatsApp</button>
                        <button type="button" class=" btn4 p-2" data-bs-dismiss="modal" onClick={() => setbtncheck(!btncheck)}>don’t send me update on WhatsApp</button>
                        {/* </div> */}
                      </div>
                    </div>
                  </div>




                  <img src='Images/HealthInsurence/bitmap.png' className='h-25 mt-2' />

                </div>
              </div>
            </div>
            <div className="row">
              <p>*No medical tests will be required for insurance cover below the age of 56 years and sum insured up to ₹20 lakh. **As on June 30, 2022 ^Turnaround time of 60 minutes is from the time of receipt of complete documents, on best effort basis.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default FirstPageOne;