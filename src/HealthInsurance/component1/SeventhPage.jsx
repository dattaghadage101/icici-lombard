import React from 'react';

import { NavLink } from 'react-router-dom';
import { HiChevronRight } from "react-icons/hi";
import {
    SeventhPagesData, SeventhPagesDatatwo, Cardsdata, smallCardinRowData, smallCardinRowDatatwo, smallcardthree, carddatatwo,
    smallCardinRowDatathree, smallCardinRowDatafour,DifferenceTabledata
} from './../../ThirdPagedata'

import Cards from './Cards';
import SmallCardInRowData from './SmallCardInRowData';
import SmallCardThree from './SmallCardThree';

function SeventhPage(props) {

    return (
        <>
            <div className="container seventhPage">
                <div className="row">

                    <div className="col-lg-6 col-xsm-12">
                        <h2>What is the need for health insurance?</h2>
                        <ul>
                            <li>
                                <div class="col d-flex align-items-start">
                                    <HiChevronRight size="3rem" color="#EC6608" />
                                    <div>
                                        <p>Health insurance helps in protecting your savings in case of a medical emergency..</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="col d-flex align-items-start">
                                    <HiChevronRight size="6rem" color="#EC6608" />
                                    <div>
                                        <p>Health insurance covers the cost of treatment for illness due to medical conditions, including lifestyle diseases such as diabetes, hypertension and obesity.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="col d-flex align-items-start">
                                    <HiChevronRight size="3rem" color="#EC6608" />
                                    <div>
                                        <p>When you buy health insurance, you can avail tax benefit under section 80D.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="col d-flex align-items-start">
                                    <HiChevronRight size="3rem" color="#EC6608" />
                                    <div>
                                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                    <div className="col-lg-6 col-xsm-12">
                        <h2>What are fixed benefits health insurance plans?</h2>
                        <ul>
                            <li>
                                <div class="col d-flex align-items-start">
                                    <HiChevronRight size="6rem" color="#EC6608" />
                                    <div>
                                        <p>Fixed benefit plans guarantee a payout if something unexpected happens. If an insured person dies or becomes permanently disabled due to an accident, a fixed benefit plan will settle the claim.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="col d-flex align-items-start">
                                    <HiChevronRight size="4rem" color="#EC6608" />
                                    <div>
                                        <p>Since the claim settlement is based on the occurrence of fatality, the documents required are minimal.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="col d-flex align-items-start">
                                    <HiChevronRight size="4rem" color="#EC6608" />
                                    <div>
                                        <p>Some fixed benefit plans also cover the insured family's needs in the event of death.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>

            <div className='sevenPage mt-5 '>
                <div className="container">
                    <h3 className='m-4 text-center p-5'> What is covered by ICICI Lombard Health insurance policy? </h3>
                    <div>
                        <nav>
                            <div class="nav nav-tabs changestabs" id="nav-tab" role="tablist" >
                                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Inclusions</button>
                                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Exclusions</button>
                                {/* <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button> */}
                            </div>
                        </nav>
                        <div class="tab-content sevenpagealldata" id="nav-tabContent">

                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className="row">
                                    {SeventhPagesData.map((item) => {
                                        return <>
                                            <div className="col-lg-6 d-flex col-xsm-12">
                                                <span>{item.icon}</span>
                                                <p>{item.para}</p>
                                            </div>
                                        </>
                                    })}
                                </div>
                            </div>
                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <div className="row ">
                                    <h2>What is not covered in the ICICI Lombard health insurance policy?</h2>
                                    {SeventhPagesDatatwo.map((item) => {
                                        return <>
                                            <div className="col-lg-6 d-flex col-xsm-12">
                                                <span>{item.image}</span>
                                                <p>{item.paragraph}</p>
                                            </div>
                                        </>
                                    })}
                                </div>
                                {/* <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div> */}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <Cards Cardsdata={Cardsdata} img='Images/HealthInsurence/key-factors-spd.png' heading='Key factors to consider before buying health insurance plans' />
            <SmallCardInRowData smallCardinRowData={smallCardinRowData} smallCardinRowDatatwo={smallCardinRowDatatwo} headingleft='Does your health insurance policy cover coronavirus treatment?' headingright='Why compare health insurance plans online?' />
            <SmallCardThree smallcardthree={smallcardthree} heading='How to buy health insurance online?' />
            <Cards Cardsdata={carddatatwo} heading='Why choose ICICI Lombard?' img='Images/HealthInsurence/why-choose-lombard-spd.png' />
            <h2 className='mt-5 mb-4 text-center' style={{ fontWeight: "700" }}>Difference between mediclaim and health insurance</h2>
            <div className="container mt-3">
            <div className="table-responsive tableborder">
              <table class="table  differencetabledata">
                <thead>
                    <tr style={{background:'#DDDCCB'}} className='text-center'>
                        <th scope="col">Parameters</th>
                        <th scope="col">Mediclaim</th>
                        <th scope="col">Health Insurance</th>
                    </tr>
                </thead>
                <tbody>
                    {DifferenceTabledata.map((item,index)=>{
                        if(index==1){
                            return(
                                <tr style={{background:'#F5F6F6'}} className='m-2'>
                                    <td>{item.parameter}</td>
                                    <td>{item.Mediclaim}</td>
                                    <td>{item.HealthInsurance}</td>
                                </tr>
                            )
                        }else{
                            return(
                                <tr>
                                    <td>{item.parameter}</td>
                                    <td>{item.Mediclaim}</td>
                                    <td>{item.HealthInsurance}</td>
                                </tr>)
                        }
                        
                    })}
                </tbody>

            </table>
            </div>
            </div>
            <h2 className='mt-5 mb-4 text-center' style={{ fontWeight: "700" }}>How to save tax with a health insurance policy?</h2>
            <SmallCardInRowData smallCardinRowData={smallCardinRowDatathree} smallCardinRowDatatwo={smallCardinRowDatafour} />
        </>
    );
}

export default SeventhPage;