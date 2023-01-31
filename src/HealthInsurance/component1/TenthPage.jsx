import React, { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';
import { TenthpageDataone, TenthpageDatatwo, btntitle } from './../../ThirdPagedata';
import { BiRightArrowAlt } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram, AiFillYoutube, AiOutlineTwitter,AiOutlineDown } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";


function TenthPage() {
    console.log(TenthpageDataone)
    const [basicActive, setBasicActive] = useState('tab1');
    // const [basicstyle, setBasicstyle] = useState('');

    const handleBasicClick = (value: string) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);



    };

    return (
        <> <div className="tablastmain mt-5">
            <div className="container">
                <div className='tabslast'>
                    <div className='text-center'>
                        <h2 className='pt-5 pb-2 mt-4'>Frequently asked questions on health insurance</h2>
                    </div>
                    <div className='smalltabslast'>
                        <MDBTabs className='mb-3 activecase'>
                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'} className='mdbbtn'>
                                    General
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'} className='mdbbtn'>
                                    COVID-19 cover
                                </MDBTabsLink>
                            </MDBTabsItem>

                        </MDBTabs>

                        <MDBTabsContent>
                            <MDBTabsPane show={basicActive === 'tab1'}>
                                <div>
                                    {TenthpageDataone.map((item, index) => {
                                        if (index !== 1) {
                                            return (
                                                <>
                                                    <div className='MDBtabs'>
                                                        <h6>{item.head}</h6>
                                                        <p>{item.para}</p>
                                                    </div>
                                                </>
                                            )
                                        } else {
                                            return (
                                                <>
                                                    <div className='MDBtabs'>
                                                        <h6>{item.head}</h6>
                                                        <p>{item.para}</p>

                                                        <div className='rightarrowlist d-flex pl-1'><span><BiRightArrowAlt size='1.5rem' color="#5D5D5D" /></span><li>{item.link1}</li></div>
                                                        <div className='rightarrowlist d-flex pl-1'><span><BiRightArrowAlt size='1.5rem' color="#5D5D5D" /></span><li>{item.link2}</li></div>
                                                        <div className='rightarrowlist d-flex pl-1'><span><BiRightArrowAlt size='1.5rem' color="#5D5D5D" /></span><li>{item.link3}</li></div>
                                                        <div className='rightarrowlist d-flex pl-1'><span><BiRightArrowAlt size='1.5rem' color="#5D5D5D" /></span><li>{item.link4}</li></div>
                                                    </div>
                                                </>
                                            )
                                        }
                                    })}
                                </div>
                            </MDBTabsPane>
                            <MDBTabsPane show={basicActive === 'tab2'}>
                                <div>
                                    {TenthpageDatatwo.map((item, index) => {
                                        if (index !== 1) {
                                            return (
                                                <>
                                                    <div className='MDBtabs'>
                                                        <h6>{item.head}</h6>
                                                        <p>{item.para}</p>
                                                    </div>
                                                </>
                                            )
                                        } else {
                                            return (
                                                <>
                                                    <div className='MDBtabs'>
                                                        <h6>{item.head}</h6>
                                                        <p>{item.para}</p>
                                                        <div>
                                                            <li>{item.list1}</li>
                                                            <li>{item.list2}</li>
                                                            <li>{item.list3}</li>
                                                            <li>{item.list4}</li>
                                                            <li>{item.list5}</li>

                                                        </div>

                                                    </div>
                                                </>
                                            )
                                        }
                                    })}
                                </div>
                            </MDBTabsPane>
                        </MDBTabsContent>
                    </div>

                </div>
            </div>
        </div>
            <div className='mt-3 manybtnsmain'>
                <div className="container">
                    <div className="row pt-4 mt-4">
                        <div className="col-lg-4 mt-5 col-xsm-12">
                            <img src='Images/HealthInsurence/boy.png' height='360px' className='p-3 mt-5' />
                        </div>
                        <div className="col-lg-7 pl-5 col-xsm-12">
                            <h2>Popular Searches</h2>
                            <div>
                                {btntitle.map((element) => {
                                    return <>
                                        <button className='btn manysmallbtns border rounded-pill m-1'>{element}</button>
                                    </>
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container mt-3" style={{ fontWidth: 400, fontSize: '14px' }}>
                <p>Disclaimers:</p>
                <p>##Additional covers that you can avail by paying an extra premium under our Complete Health Insurance policy. As donor expense is an inbuilt cover under our Health Booster policy, you'll only need to pay extra for the other three covers if you want to add them to your Health Booster policy.</p>
                <p>#Premium including GST for ₹5L sum insured (SI) for a customer aged 21 years (DOB – 20/02/2001) for iHealth is ₹6499. Premium excluding 18% GST is ₹5507.63. Therefore, per day premium is ₹15.09.</p>
            </div>
            <div>
            <div className='footer mt-2 pt-5'>
                <div className="container pt-3">
                    <div className="row">
                        <div className="col-md-3 col-xsm-12">
                            <div>
                                <img src="Images/HealthInsurence/icicilombard-footer-logo.png" className='mb-2'/>
                                <p>ICICI Lombard General Insurance Company Limited,</p>
                                <p>ICICI Lombard House, 414, Veer Savarkar Marg, Near Siddhi Vinayak Temple, Prabhadevi, Mumbai - 400025.</p>
                                <p>Reg.no:115</p>
                                <p>Email:abf@gmail.com</p>
                                <p>Fax no: - 022 61961323</p>
                                <div>
                                    <span><FaFacebookF style={{marginRight:'2rem'}}/><AiOutlineTwitter style={{marginRight:'2rem'}}/><GrLinkedinOption style={{marginRight:'2rem'}}/><AiFillYoutube style={{marginRight:'2rem'}}/><AiOutlineInstagram /></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-xsm-12">
                            <p>ICICI Lombard General Insurance Company Ltd. is one of the leading private sector general insurance company in India offering insurance coverage for motor, health, travel, home, student travel and more. Policies can be purchased and renewed online as well. Immediate issuance of policy copy online.</p>
                            <p>ICICI trade logo displayed above belongs to ICICI Bank and is used by ICICI Lombard GIC Ltd. under license and Lombard logo belongs to ICICI Lombard GIC Ltd. Insurance is the subject matter of the solicitation. The advertisement contains only an indication of cover offered. For more details on risk factors, terms, conditions and exclusions, please read the sales brochure carefully before concluding a sale. CIN: L67200MH2000PLC129408</p>
                            <div>
                                <div className="row">
                                    <div className="col-9">
                                        <img src="Images/HealthInsurence/digicert (1).png" className='mx-3'/>
                                        <img src="Images/HealthInsurence/entrust (1).png" />
                                    </div>
                                    <div className="col-3">
                                        <div class="input-group mb-3">
                                            <input type="text" aria-label="Text input with dropdown button" placeholder='Search'/>
                                            <button  type="button" data-bs-toggle="dropdown" aria-expanded="false"><AiOutlineDown/></button>
                                            <ul class="dropdown-menu dropdown-menu-end footerdropdown">
                                                <li><a class="dropdown-item" href="#">ICICI</a></li>
                                                <li><a class="dropdown-item" href="#">ICICI Home</a></li>
                                                <li><a class="dropdown-item" href="#">ICICI Search</a></li>
                                                <li><a class="dropdown-item" href="#">ICICI Finance</a></li>
                                                <li><a class="dropdown-item" href="#">ICICI Home Search</a></li>
                                                <li><a class="dropdown-item" href="#">ICICI direct</a></li>
                                                <li><a class="dropdown-item" href="#">ICICI Life Insurenace</a></li>
                                                <li><a class="dropdown-item" href="#">ICICI Mutual fund</a></li>
                                                
                                            </ul>
                                        </div>
                                        

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default TenthPage;