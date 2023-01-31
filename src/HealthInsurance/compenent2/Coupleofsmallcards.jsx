import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io"
import { MdCoronavirus } from "react-icons/md"
import { RiHandHeartLine } from "react-icons/ri"
import { BsBarChartLine } from "react-icons/bs"
import { ImMobile2 } from "react-icons/im"
import { TbBed } from "react-icons/tb"
import { MdOutlinePayments } from "react-icons/md"
import { FaRegMoneyBillAlt } from "react-icons/fa"


function Coupleofsmallcards({ twelvepagedatathree, head, heading }) {

    const [isseemore, setisseemore] = useState(true)
    const [toggle3, settoggle3] = useState(true)
    const [toggle4, settoggle4] = useState(true)

    const [toggle5, settoggle5] = useState(true)
    const [toggle6, settoggle6] = useState(true)
    const [toggle7, settoggle7] = useState(true)
    const [toggle8, settoggle8] = useState(true)
    const [toggle9, settoggle9] = useState(true)
    const toggle = () => {
        setisseemore(!isseemore)
    }
    return (
        <>
            <div className="maincoupledata">
                <div className="container mt-5 coupleofdata">
                    <div className='text-center mt-5'>
                        <p className='fs-2'>{heading}</p>
                        <p className='fs-6'>{head}</p>
                    </div>
                    <div className="row mt-5">
                        <div className="col-4">
                            <div className='row d-flex'>
                                <div className="col-1 id">
                                    1
                                </div>
                                <div className="col-8">
                                    <p className='fs-5'>Medical costs are skyrocketing</p>
                                    <p>They are high today and will be higher in the near future. A family floater health insurance is a smart way to safeguard your savings during a medical emergency.</p>
                                </div>

                            </div>

                        </div>
                        <div className="col-4">
                            <div className='row d-flex'>
                                <div className="col-1 id">
                                    2
                                </div>
                                <div className="col-8">
                                    <p className='fs-5'>Employer provided health policy is not enough</p>
                                    {isseemore ? <p>A health cover provided by your corporate firm or employer ceases to cover you once you switch the job. Furthermore, you cannot choose coverage or benefits as per your needs. Besides, the sum.</p> : <p>A health cover provided by your corporate firm or employer ceases to cover you once you switch the job. Furthermore, you cannot choose coverage or benefits as per your needs. Besides, the sum insured of corporate health plan may not be adequate to cover you and your dependents in case of a medical emergency. Hence, it is recommended to invest in one of the leading family health insurance plans in India that covers up to 2 adults adequately. </p>}
                                    <button onClick={toggle} ><IoMdArrowDropdown /></button>
                                </div>

                            </div>
                        </div>
                        <div className="col-4">
                            <div className='row d-flex'>
                                <div className="col-1 id">
                                    3
                                </div>
                                <div className="col-8">
                                    <p className='fs-5'>Lifestyle diseases are on the rise</p>
                                    {toggle3 ? <p>An unhealthy way of life and work stress have made even the younger generation prone to lifestyle diseases. Thus, the need to have a family health insurance is undisputable even if you .</p> : <p>An unhealthy way of life and work stress have made even the younger generation prone to lifestyle diseases. Thus, the need to have a family health insurance is undisputable even if you are young. The onset of a chronic condition like diabetes may make it difficult for you to buy a comprehensive medical insurance. You may be required to undergo screening and medical check-up. Hence, it is recommended to invest in a family health insurance policy as early as possible. Not only is it affordable but also ensures optimum coverage when you need it most.   </p>}
                                    <button onClick={() => settoggle3(!toggle3)}><IoMdArrowDropdown /></button>
                                </div>

                            </div>
                        </div>
                        <div className="col-4 mt-2">
                            <div className='row d-flex'>
                                <div className="col-1 id">
                                    4
                                </div>
                                <div className="col-8">
                                    <p className='fs-5'>You can save some on family health insurance premium</p>
                                    <p>By sharing your sum insured, you can smartly insure your entire family under one health plan. This will help in bringing down your health insurance premium significantly. You also do away with the hassle of managing multiple policies and their renewals.</p>

                                </div>

                            </div>
                        </div>
                        <div className="col-4 mt-2">
                            <div className='row d-flex'>
                                <div className="col-1 id">
                                    5
                                </div>
                                <div className="col-8">
                                    <p className='fs-5'>Family’s healthcare needs get covered in one go</p>
                                    {toggle4 ? <p>Occasionally you end up bearing out of pocket expenses for your family’s health check-up, viral flu, seasonal sickness and illnesses. These costs put together can weigh heavy on your pocket,</p> : <p>Occasionally you end up bearing out of pocket expenses for your family’s health check-up, viral flu, seasonal sickness and illnesses. These costs put together can weigh heavy on your pocket, and a family floater health insurance with OPD cover will help you avoid just that. You can choose the OPD cover by paying an additional premium and reduce your out of pocket expenses.</p>}
                                    <button onClick={() => (settoggle4(!toggle4))} className='d-inline'><IoMdArrowDropdown /></button>
                                </div>

                            </div>
                        </div>
                        <div className="col-4 mt-2">
                            <div className='row d-flex'>
                                <div className="col-1 id">
                                    6
                                </div>
                                <div className="col-8">
                                    <p className='fs-5'>You get tax benefit on health insurance premium</p>
                                    <p>As per Section 80D of the Income Tax Act, you can avail tax benefit on the health insurance premium. Thus, a health policy not only saves you from breaking the bank during a medical emergency but also helps you to save in taxes.</p>

                                </div>

                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <div className='mt-5 coupleofdatatwo'>
                <div className="container">
                    <div className='text-center'>
                        <p className='fs-2'>What are the top reasons to buy ICICI Lombard Complete Health Insurance plan?</p>
                        <p className='fs-5'>Here are the top 6 health insurance benefits that you reap with us.</p>
                    </div>
                    <div className="row mt-5">
                        <div className="col-4">
                            <div className='mt-2 p-2'>
                                <div><MdCoronavirus size='3rem' color='#D35700 ' /></div>
                                <div class="card-body">
                                    <h5 class="card-title py-1">Never pay out-of-pocket again in case of hospitalisation</h5>
                                    {toggle5 ? <p className='lh-base'>Our health plans cover hospitalisation on a cashless basis. So, suppose you get our health insurance for parents or family. In that case, you and your loved ones will be covered against any diseases or injuries that require hospitalisation just 15 days</p> : <p className='lh-base'>Our health plans cover hospitalisation on a cashless basis. So, suppose you get our health insurance for parents or family. In that case, you and your loved ones will be covered against any diseases or injuries that require hospitalisation just 15 days after your policy start date*. If you have renewed the policy with us without any break or the policy has been ported to ICICI Lombard, the waiting period won’t apply. s</p>}
                                    <button onClick={() => settoggle5(!toggle5)}><IoMdArrowDropdown /></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='mt-2 p-2'>
                                <div><MdOutlinePayments size='3rem' color='#D35700 ' /></div>
                                <div class="card-body">
                                    <h5 class="card-title py-1">No co-payment required</h5>
                                    {toggle6 ? <p className='lh-base'>A health plan with a co-pay clause needs you to bear some part of the covered hospitalisation expenses as well at the time of claim. However, with our individual and family health insurance, there is no c.</p> : <p className='lh-base'>A health plan with a co-pay clause needs you to bear some part of the covered hospitalisation expenses as well at the time of claim. However, with our individual and family health insurance, there is no co-pay applicable. We will cover the entire amount that is payable as per your policy terms and conditions up to your sum insured.</p>}
                                    <button onClick={() => settoggle6(!toggle6)}><IoMdArrowDropdown /></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='mt-2 p-2'>
                                <div><RiHandHeartLine size='3rem' color='#D35700 ' /></div>
                                <div class="card-body">
                                    <h5 class="card-title py-1">Pre-existing diseases are covered</h5>
                                    <p className='lh-base'>One reason why our policy is one of the preferred health policies, is that it covers pre-existing diseases immediately after 2 years from the policy start date if you choose a plan with sum insured ₹3 lakh and above.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='mt-5 p-2'>
                                <div><ImMobile2 size='3rem' color='#D35700 ' /></div>
                                <div class="card-body">
                                    <h5 class="card-title py-1">You can avail unlimited reset benefit</h5>
                                    {toggle7 ? <p className='lh-base'>If the balance sum insured under your family health plan is inadequate for subsequent claims by you or your family member we will reset it up to 100% of your base sum insured. Thus, you’ll have us by your.</p> : <p className='lh-base'>If the balance sum insured under your family health plan is inadequate for subsequent claims by you or your family member we will reset it up to 100% of your base sum insured. Thus, you’ll have us by your side protecting your savings through the rest of the policy year. Your sum insured can be reset for a different illness or same illness but by different insured. You can avail this benefit once in a policy year under our iHealth plan and unlimited times under our Health Shield, Health Shield Plus, Health Elite and Health Elite Plus plans.</p>}
                                    <button onClick={() => settoggle7(!toggle7)}><IoMdArrowDropdown /></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='mt-5 p-2'>
                                <div><TbBed size='3rem' color='#D35700 ' /></div>
                                <div class="card-body">
                                    <h5 class="card-title py-1">No capping on room rent</h5>
                                    <p className='lh-base'>If the balance sum insured under your family health plan is inadequate for subsequent claims by you or your family member we will reset it up to 100% of your base sum insured. Thus, you’ll have us by your...</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='mt-5 p-2'>
                                <div><BsBarChartLine size='3rem' color='#D35700 ' /></div>
                                <div class="card-body">
                                    <h5 class="card-title py-1">You can enjoy additional sum insured</h5>
                                    {toggle8 ? <p className='lh-base'>We know you wouldn’t want to compromise when it comes to your recovery. Hence, our family insurance covers the charges even for a private ward. So if you need your privacy for a speedy recovery, our family floater health policy will have you covered.</p> : <p className='lh-base'>We reward you if you have made no claims in the previous policy year with us. The sum insured of your medical insurance policy for family is increased by 10% for every claim-free year up to a maximum of 50%. In case of a claim, the same will be reduced by 10%. Your benefits under the base plan remain unchanged.</p>}
                                    <button onClick={() => settoggle8(!toggle8)}><IoMdArrowDropdown /></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4"></div>
                        <div className="col-4">
                            <div className='mt-5 p-2'>
                                <div><FaRegMoneyBillAlt size='3rem' color='#D35700 ' /></div>
                                <div class="card-body">
                                    <h5 class="card-title py-1">Fast, convenient cashless claims</h5>
                                    {toggle9 ? <p className='lh-base'>In case of treatment at our network hospitals, we provide cashless authorisation and discharge authorisation within a 60 minute turnaround time. You can focus solely on getting better, without waiting </p> : <p className='lh-base'>In case of treatment at our network hospitals, we provide cashless authorisation and discharge authorisation within a 60 minute turnaround time. You can focus solely on getting better, without waiting or worrying. </p>}
                                    <button onClick={() => settoggle9(!toggle9)}><IoMdArrowDropdown /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Coupleofsmallcards;