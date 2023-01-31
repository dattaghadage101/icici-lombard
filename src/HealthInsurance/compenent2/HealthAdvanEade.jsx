import React, { useState } from 'react';
import { SlUserFemale } from 'react-icons/sl'
import { FaHeartbeat } from 'react-icons/fa'
import { GiHeartOrgan } from 'react-icons/gi'
import { BsCashStack } from 'react-icons/bs'
import { MdOutlineLocalHospital } from 'react-icons/md'
import { GrFormSubtract } from 'react-icons/gr'
import { AiOutlinePlus } from 'react-icons/ai'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



function HealthAdvanEade(props) {

    const [state, setState] = useState({
        mobilenum: '',
        email: '',
        pincode: ''
    })
    const [mnum, setmnum] = useState(false);
    const [stateemial, setstateemail] = useState(false);
    const [pincodes, setpincodes] = useState(false);
    const { mobilenum, email, pincode } = state;
    const [span2, setspan2] = useState(0)
    const [check, setcheck] = useState(true)
    const [lastbtn, setlastbtn] = useState(false)

   
    const [span, setspan] = useState(0)
    const [plusbtn1, setplusbtn1] = useState(false);
    const [plusbtn12, setplusbtn12] = useState(false)
    const plusbtn = () => {
        if (span < 2) {
            setspan( Number(span) + 1)
        }
        if (span == 0) {
            setplusbtn1(!plusbtn1)
        }
        if (span == 1) {
            setplusbtn12(!plusbtn12)
        }
    }
    const minusbtn=()=>{
        if(0<span && span<=2){
            setspan( Number(span) - 1)
        }
        if(span==2){
        setplusbtn1(true)
        setplusbtn12(false)
        }
        if(span==1){
            setplusbtn1(false)
        setplusbtn12(false)
        }
    }















    const plusbtn2 = () => {
        if (span2 < 1) {
            setspan2(span2 => span2 + 1)
        }
    }
    const minusbtn2 = () => {
        if (span2 == 1) {
            setspan2(span2 => span2 - 1)
        }
    }
    const inputchange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleform = (e) => {
        e.preventDefault()
        let mobreg = /^[789]\d{9}$/
        if (mobreg.test(mobilenum)) {
            setmnum(true)
        } else {
            setmnum(false)
        }

        let emailreg = /^[a-zA-z0-9][a-z0-9A-Z]*@([a-zA-z0-9]+)[.]([a-z]{2,5})$/
        if (emailreg.test(email)) {
            setstateemail(true)
        } else {
            setstateemail(false)
        }

        let pinreg = /^[0-9]{6}$/
        if (pinreg.test(pincode)) {
            setpincodes(true)
        } else {
            setpincodes(false)
        }

        if (mobilenum !== ' ' || email !== ' ' || pincode !== ' ') {
            alert(`mobilenum:${mobilenum} \n email:${email} \n pincode:${pincode}`)
            setlastbtn(true)
        }


    }


    return (
        <><div className='bgimg'>
            <div className="container healthadv pt-5 pb-5">
                <div className="row">
                    <div className="col-6 firstdiv">
                        <h2>Health AdvantEdge</h2>
                        <p className='firstdivp'>Zero hassle. 100% Trust</p>
                        <div className='d-flex flex-wrap seconddiv'>
                            <div className='d-flex p-3 m-2 rounded'>
                                <SlUserFemale size='1.5rem' className='pr-1' />
                                <p className='px-1'>Maternity</p>
                            </div>
                            <div className='d-flex p-3 m-2 rounded'>
                                <FaHeartbeat size='1.5rem' className='pr-1' />
                                <p className='px-1'>Critic al illness</p>
                            </div>
                            <div className='d-flex p-3 m-2 rounded'>
                                <GiHeartOrgan size='1.5rem' className='pr-1' />
                                <p>No medi checkup required N</p>
                            </div>
                            <div className='d-flex p-3 m-2 rounded'>
                                <BsCashStack size='1.5rem' className='pr-1' />
                                <p className='px-1'>6700+  cashless hospitals C</p>
                            </div>
                            <div className='d-flex p-3 m-1 rounded'>
                                <MdOutlineLocalHospital size='1.2rem' className='pr-1' />
                                <p className='px-1'>60-min TAT for ca shless hospitalization D</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 pl-5 mb-5">
                        {/* <form onSubmit={handleform}> */}
                        <div  >
                            <div className='d-flex text-center pt-2'>
                                <p className='px-5'><span className='fw-bold'>Adult(s) </span>(21 years & above)</p>
                                <div>

                                    
                                    <button type="button" onClick={minusbtn} class="btn btn-success" disabled={span == 0 ? true : false} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        <GrFormSubtract />
                                    </button>
                                    <span className='px-3'>{span}</span>
                                    <button type="button" onClick={plusbtn} class="btn btn-primary" disabled={span == 2 ? true : false} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        <AiOutlinePlus />
                                    </button>
                                

                                </div>
                            </div>
                            {plusbtn1&&<div>
                                        <TextField
                                        id="outlined-multiline-flexible"    
                                        label="Adult 1 DOB"    
                                        multiline    
                                        maxRows={30}    
                                        variant="outlined"     
                                        style={{ width: '100%' }}
                                        />
                                        

                                    </div>}
                            {plusbtn12 && <div>
                                        <TextField
                                        id="outlined-multiline-flexible"    
                                        label="Adult 1 DOB"    
                                        multiline    
                                        maxRows={30}    
                                        variant="outlined"  
                                        className='mt-1'   
                                        style={{ width: '100%' }}
                                        />
                                        
                                      

                                           
                                  </div>
                             }
                            {plusbtn1 && <button class="btn p-2 w-100  btn-secondary my-5"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                    ADD
                                </button>}



                            <div className='d-flex text-center pt-2 mt-1' >
                                <p className='px-5'><span className='fw-bold'>Kid(s) </span>(3 months - 20 years)</p>
                                <div>
                                    <button type="button" onClick={minusbtn2} disabled={span2 == 0 ? true : false} class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        <GrFormSubtract />
                                    </button>
                                    <span className='px-3'>{span2}</span>
                                    <button type="button" onClick={plusbtn2} disabled={span2 == 2 ? true : false} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        <AiOutlinePlus />
                                    </button>
                                </div>
                            </div>
                            <div className=' text-center pt-2 mt-3 mb-3' >
                                <TextField
                                    value={mobilenum}
                                    name='mobilenum'
                                    onChange={(e) => inputchange(e)}
                                    id="outlined-multiline-flexible"
                                    label="Mobile number"
                                    multiline
                                    maxRows={30}
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                />
                                {mnum ? 'valid' : 'invalid'}
                            </div>
                            <div className=' text-center pt-2 mt-3 mb-3' >
                                <TextField
                                    value={email}
                                    name='email'
                                    onChange={(e) => inputchange(e)}
                                    id="outlined-multiline-flexible"
                                    label="email"
                                    multiline
                                    maxRows={30}
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                />
                                {stateemial ? 'valid' : 'invalid'}

                            </div>
                            <div className=' text-center pt-2 mt-3 mb-3' >
                                <TextField
                                    value={pincode}
                                    name='pincode'
                                    onChange={(e) => inputchange(e)}
                                    id="outlined-multiline-flexible"
                                    label="Pincode"
                                    multiline
                                    maxRows={30}
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                />
                                {pincodes ? 'valid' : 'invalid'}

                            </div>
                            <div className='pl-1'>
                                <input type="checkbox" onChange={() => setcheck(!check)} checked={check} /><span className='pl-1'>I agree to the <a className='fw-bold'>terms and conditions</a></span><br /><br />
                                {check ? '' : <p style={{ color: 'red' }}>accept term and conditions</p>}

                                <input type="checkbox" /><span className='pl-1'>I want to receive updates on</span>
                            </div>
                            <div className='mt-2 mb-3'>
                                <button class="btn p-2 w-100 lastbtn" onClick={handleform} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                    Get Quote
                                </button>
                                {lastbtn ? <div class="offcanvas offcanvas-start px-5 w-75" style={{ background: '#F7F6F6' }} tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                    <div class="offcanvas-header pt-5">
                                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Thank you for your interest.</h5>
                                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body">
                                        <p>Our experts will get back to you shortly with the best plan recommendations.</p>
                                    </div>
                                </div> : ''}

                            </div>
                        </div>
                        {/* </form>     */}
                    </div>

                </div>
            </div>
        </div>
        </>
    );
}

export default HealthAdvanEade;