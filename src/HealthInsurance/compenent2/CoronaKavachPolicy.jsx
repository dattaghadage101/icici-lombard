import React, { useRef, useState, useEffect } from 'react';
import { GiTargetPrize, GiDatabase } from 'react-icons/gi'
import { TbHeartMinus } from 'react-icons/tb'
import { FaRupeeSign } from 'react-icons/fa'


function CoronaKavachPolicy() {
    const inputref = useRef()
    const [state, setstate] = useState({
        first: ' ',
        email: '',
        password: '',
        firstvalid: false,
        emailvalid: false,
        passwordvalid: false,

    })
    const [check, setcheck] = useState(true)
    const inputchange = (e) => {
        setstate({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const { first, email, password } = state
    useEffect(() => {
        inputref.current.focus()
    }, [])


    const handlebtn = (e) => {

        e.preventDefault()
        if (first.length >= 3 && first.length < 15) {
            alert('hii')
            setstate({
                ...state,
                firstvalid: true
            })
        } else {
            setstate({
                ...state,
                firstvalid: false
            })
        }
       
        let regemail = /^[a-zA-z0-9][a-z0-9A-Z]*@([a-zA-z0-9]+)[.]([a-z]{2,4})?/
        if (regemail.test(email)) {
            setstate({
                ...state,
                emailvalid: true
            })
        } else {
            setstate({
                ...state,
                emailvalid: false
            })
        }

    }
    const handlecheckbox = () => {
        setcheck(false)
    }

    return (
        <>
            <div className='coronapolicy'>
                <div className="container mb-5">
                    <div className="row pt-5">
                        <div className="col-6 mt-5 coronadivfirst" style={{ border: '2px solid red' }}>
                            <h2 className='fs-2 py-2'>Corona Kavach Policy</h2>
                            <p className='fs-5 py-1'>ICICI Lombard</p>
                            <p>Insure your health against Coronavirus</p>
                            <div>
                                <div className='d-flex my-2'>
                                    <GiTargetPrize size="2rem" color="white" className='mr-1 mb-2' />
                                    <li>Standard Covid-19 policy</li>
                                </div>
                                <div className='d-flex my-2'>
                                    <GiDatabase size="2rem" color="white" className='mr-1 mb-2' />
                                    <li>Home care covered</li>
                                </div>
                                <div className='d-flex my-2'>
                                    <TbHeartMinus size="2rem" color="white" className='mr-1 mb-2' />
                                    <li>Available for short & long term</li>
                                </div>
                                <div className='d-flex my-2'>
                                    <FaRupeeSign size="2rem" color="white" className='mr-1 mb-2' />
                                    <li>Flexible sum insured</li>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mt-5" style={{ border: '2px solid red' }}>
                            <div>
                                <input type="email" class="form-control my-3" id="exampleFormControlInput1" placeholder="name"
                                    value={first} name='first' ref={inputref} onChange={(e) => inputchange(e)} />
                                {state.firstvalid ? " ":<p style={{ color: 'red' }}>firstname should be more than 2 character and less than 15 character*</p> }

                                <input type="email" class="form-control my-3" id="exampleFormControlInput1" placeholder="name@example.com"
                                    value={email} name='email' onChange={(e) => inputchange(e)} />
                                {state.emailvalid ? '' : <p style={{ color: ' red' }}>mention correct email*</p>}

                                <input type="email" class="form-control my-3" id="exampleFormControlInput1" placeholder="passoword"
                                    value={password} name='password' onChange={(e) => inputchange(e)} />



                                <div className='d-flex my-2'>
                                    <input type="checkbox" className='mr-2' checked style={{ background: '#EC6608' }} />
                                    <p className='my-2'> I agree to the Terms and Conditions</p>
                                </div>
                                <div className='d-flex my-2'>
                                    <input type="checkbox" className='mr-2' onChange={handlecheckbox} checked={check ? true : false} data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                                    {check ? <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    ...
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : ''}
                                    <p className='my-2'>I want to get my quote and policy details on</p>
                                </div>
                                <button type='submit' className='btn btn-primary p-3 rounded-pill' onClick={handlebtn}>Proceed</button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CoronaKavachPolicy;