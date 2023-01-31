import React, { useState } from 'react';
import OnesideimgsecondPage from './OnesideimgsecondPage';
import { TwelvePagedata } from "./../../ThirdPagedata"
import { TwelvePagedatatwo, TwelvePagedatathree } from "./../../ThirdPagedata"
import Coupleofsmallcards from './Coupleofsmallcards';
import { TbCash } from "react-icons/tb";
import { BiHeart } from "react-icons/bi";
import { SlUserFemale } from "react-icons/sl";
import { RiHospitalLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io"
import { TabView, TabPanel } from 'primereact/tabview';
import {CiCircleRemove} from 'react-icons/ci'
import Incluisive, { BigInclusive } from './Incluisive';
import { Button } from 'primereact/button';





function TwelvePage(props) {
    const [toggle1, settoggle1] = useState(true)
    const [toggle2, settoggle2] = useState(true)
    const [toggle3, settoggle3] = useState(true)
    const [toggle4, settoggle4] = useState(true)

    const [Readmorebtn, setReadmorebtn] = useState(false)
    return (<>
        <div className="container second">
            <div className='text-center mt-4'>
                <h1>Why our customers love us?</h1>
                <p>And, we think you will too.</p>
            </div>
            <div className='d-md-flex secondpagelist justify-content-around  d-sm-block'>

                <li>
                    <h4>6700+ Healthcare providers*</h4>
                    <p>for a hassle-free service</p>
                </li>
                <li>
                    <h4>Quick claim intimation</h4>
                    <p>through our IL Take Care app</p>
                </li>
                <li>
                    <h4>24x7 customer support</h4>
                    <p><span className='spandot'>Call</span> <span className='spandot'>centreChat286*</span> <span>branches</span></p>
                </li>

            </div>

        </div>
        <OnesideimgsecondPage heading='What is ICICI Lombard Complete Health Insurance policy?' onesidedata={TwelvePagedata} />

        <Coupleofsmallcards heading='Why should you buy a health insurance policy for yourself and your family?' head="Family health insurance is the need of the hour."
            twelvepagedatathree={TwelvePagedatathree} />
        <OnesideimgsecondPage heading='Why should you buy health policy online from ICICI Lombard?' onesidedata={TwelvePagedatatwo} />
        <div style={{background:'#F8F6F6'}} className='mb-5'>
        <div className='container inclusiveexclusive'>
            <div className='text-center pt-4'>
                <p className='fs-2'>What is covered by ICICI Lombard Complete Health Insurance policy?</p>
                <p>Here’s what the ICICI Lombard Complete Health Insurance policy includes and excludes:</p>
            </div>
            <div className='mb-5 pb-5'>
                <div className='mb-5 pb-5 mt-4'>
                    <TabView>
                        <TabPanel header="Inclusions">
                            {Readmorebtn ? <BigInclusive/> : <Incluisive/>}
                            <div className='text-center mt-3'>
                            {Readmorebtn ?<Button label="Read More" onClick={()=>setReadmorebtn(!Readmorebtn)} iconPos="right" icon="pi pi-chevron-up" className='p-button-rounded' /> :<Button label="Read More" onClick={()=>setReadmorebtn(!Readmorebtn)} iconPos="right" icon="pi pi-chevron-down" className='p-button-rounded' />}  
                            </div>                       
                        </TabPanel>
                        <TabPanel header="Exclusions">
                            <div class="grid">
                                <div class="col-6">
                                        <span className='d-flex'>
                                            <CiCircleRemove color='red' size='3rem' className=' pr-2'/>
                                            <p className='mt-1'>Any illness contracted within 30 days from the start date of your policy, except those incurred due to an accident. This clause does not apply to the subsequent renewals.</p>
                                        </span>
                                        <span className='d-flex'>
                                            <CiCircleRemove color='red' size='2rem' className=' pr-2'/>
                                            <p className='mt-1'>For the first 2 years, some diseases like cataract, hernia, stone in the urinary system and others will not be covered.</p>
                                        </span>
                                        <span className='d-flex'>
                                            <CiCircleRemove color='red' size='5rem' className=' pr-2'/>
                                            <p className='mt-1'>Any illness or disease or injury or a pre-existing disease before the start of the policy. However, these pre-existing diseases start to get covered if the policy is renewed with us for two consecutive years for a sum insured of ₹3 lakh and above. For ₹2 lakh sum insured the same gets covered if the policy is renewed for 4 consecutive years.</p>
                                        </span>
                                        <h5>Permanent exclusions:</h5>
                                        <span className='d-flex'>
                                            <CiCircleRemove color='red' size='2rem' className=' pr-2'/>
                                            <p className='mt-1'>Pregnancy and childbirth related complications, cosmetic, aesthetic and obesity related treatment.</p>
                                        </span>
                                        <span className='d-flex'>
                                            <CiCircleRemove color='red' size='2rem' className=' pr-2'/>
                                            <p className='mt-1'>War, civil war or breach of law.</p>
                                        </span>
                                        <span className='d-flex'>
                                            <CiCircleRemove color='red' size='2rem' className=' pr-2'/>
                                            <p className='mt-1'>Naturopathy treatment, acupressure, acupuncture, magnetic and other such therapies.</p>
                                        </span>
                                        <span className='d-flex'>
                                            <CiCircleRemove color='red' size='2rem' className=' pr-2'/>
                                            <p className='mt-1'>Treatment taken outside the country.</p>
                                        </span>
                                        <p>*Please refer to policy wordings for a detailed list of exclusions.</p>

                                </div>
                                <div class="col-6">
                                    <h3>Exclusions valid for the first 2 years:</h3>
                                    <p>Treatment of the following diseases/illness/ailments</p>
                                    <div>
                                        <span className='d-flex'>
                                            <CiCircleRemove color='red' size='2rem' className=' pr-2'/>
                                            <p className='mt-1'>Cataract #</p>
                                        </span>
                                        <span className='d-flex'>
                                            <CiCircleRemove color='red' size='2rem' className=' pr-2'/>
                                            <p className='mt-1'>Benign prostatic hypertrophy</p>
                                        </span>
                                        <span className='d-flex'>
                                            <CiCircleRemove color='red' size='2rem' className=' pr-2'/>
                                            <p className='mt-1'>Myomectomy, hysterectomy unless because of malignancy</p>
                                        </span>
                                        <span className='d-flex'>
                                            <CiCircleRemove color='red' size='2rem' className=' pr-2'/>
                                            <p className='mt-1'>All types of hernia and hydrocele</p>
                                        </span>
                                        <span className='d-flex'>
                                           <CiCircleRemove color='red' size='2rem' className=' pr-2'/>
                                            <p className='mt-1'>Joint replacement, unless due to accident</p>
                                        </span>
                                        <span className='d-flex'>
                                            <CiCircleRemove color='red' size='2rem' className=' pr-2'/>
                                            <p className='mt-1'>Sinusitis and related disorders</p>
                                        </span>
                                        <span className='d-flex'>
                                            <CiCircleRemove color='red' size='3rem' className=' pr-2'/>
                                            <p className='mt-1'>All types of skin and all internal tumours/cysts/nodules/polyps of any kind, including breast lumps, unless malignant</p>
                                        </span>
                                        <span className='d-flex'>
                                            <CiCircleRemove color='red' size='2rem' className=' pr-2'/>
                                            <p className='mt-1'>Dilatation and curettage, endometriosis</p>
                                        </span>
                                        <span className='d-flex'>
                                            <CiCircleRemove color='red' size='2rem' className=' pr-2'/>
                                            <p className='mt-1'>Surgery on tonsils, adenoids and sinuses</p>
                                        </span>
                                        <span className='d-flex'>
                                            <CiCircleRemove color='red' size='2rem' className=' pr-2'/>
                                            <p className='mt-1'>Gastric and duodenal erosions and ulcers</p>
                                        </span>
                                        <span className='d-flex'>
                                            <CiCircleRemove color='red' size='2rem' className=' pr-2'/>
                                            <p className='mt-1'>Deviated nasal septum</p>
                                        </span>
                                        <span className='d-flex'>
                                            <CiCircleRemove color='red' size='2rem' className=' pr-2'/>
                                            <p className='mt-1'>Varicose veins/varicose ulcers</p>
                                        </span>
                                        <span className='d-flex'>
                                            <CiCircleRemove color='red' size='2rem' className=' pr-2'/>
                                            <p className='mt-1'>All types of internal congenital anomalies/ illness/ defects</p>
                                        </span>
                                        <p>If you renew the policy with us for 2 consecutive years, we will cover the above diseases or illness or ailments from the third year.</p>
                                        <p>#After 2 years from the policy start date, any claim for cataract treatment shall not exceed ₹20,000 per eye during each policy year for sum insured up to ₹5 lakh and shall not exceed ₹1 lakh per eye for sum insured ₹7 lakh and above.</p>

                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </TabView>
                </div>
            </div>
        </div>
        </div>
        <div className='coupleofdatatwo mt-4'>
            <div className="container">
                <div className='text-center'>
                    <p className='fs-2'>ICICI Lombard Complete Health Insurance plan add-on benefits</p>
                    <p className='fs-5'>Customise your health insurance policy for family with our ready-made set of add-ons*.</p>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className='mt-5 p-2'>
                            <div><TbCash size='3rem' color='#D35700 ' className='mb-1' /></div>
                            <div class="card-body">
                                <h5 class="card-title py-1">Hospital daily cash allowance & convalescence benefit</h5>
                                {toggle1 ? <p className='lh-base'>While our family floater health insurance policy has your back for the larger expenses incurred during hospitalisation, our hospital daily cash allowance and convalescence benefit add-ons take care of you... </p> : <p className='lh-base'>While our family floater health insurance policy has your back for the larger expenses incurred during hospitalisation, our hospital daily cash allowance and convalescence benefit add-ons take care of your smaller yet significant out of pocket expenses. With hospital daily cash allowance, you get ₹1,000 or ₹2,000 or ₹3,000 per day as per your sum insured, for maximum 10 days and minimum 3 days of hospitalisation per member. Under convalescence benefit, you get ₹10,000 per member for 10 or more consecutive days of hospitalisation once a year.   </p>}
                                <button onClick={() => settoggle1(!toggle1)}><IoMdArrowDropdown /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className='mt-5 p-2'>
                            <div><BiHeart size='3rem' color='#D35700 ' className='mb-1' /></div>
                            <div class="card-body">
                                <h5 class="card-title py-1">Donor expenses & critical illness cover</h5>
                                {toggle2 ? <p className='lh-base'>In your attempt to put together a reliable family health insurance plan, you should not leave out essential add-ons like donor expenses and critical illness cover. The donor expenses add-on reimburses med...  </p> : <p className='lh-base'>In your attempt to put together a reliable family health insurance plan, you should not leave out essential add-ons like donor expenses and critical illness cover. The donor expenses add-on reimburses medical expenses for organ donor up to ₹50,000, incurred during organ transplantation screening, treatment, and surgery of the donor. The critical illness cover, on the other hand, provides a lump sum benefit of up to 100% of the sum insured for plan with SI up to ₹10 lakh and 50% of SI for plans with SI greater than ₹10 lakh if you're diagnosed with any of the 9 critical illnesses for the first time during policy period. This cover can be purchased for adults only under family floater health policy. You cannot cover children under this cover.  </p>}
                                <button onClick={() => settoggle2(!toggle2)}><IoMdArrowDropdown /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className='mt-5 p-2'>
                            <div><SlUserFemale size='3rem' color='#D35700 ' className='mb-1' /></div>
                            <div class="card-body">
                                <h5 class="card-title py-1">Outpatient treatment, wellness cover, maternity benefit & new born baby cover</h5>
                                {toggle3 ? <p className='lh-base'>Our cashless health policy for family has your back for medical costs incurred before, after and during hospitalisation. Moreover, our outpatient treatment cover will help you avoid any out-of-pocket expe... </p> : <p className='lh-base'>Our cashless health policy for family has your back for medical costs incurred before, after and during hospitalisation. Moreover, our outpatient treatment cover will help you avoid any out-of-pocket expenses like doctor consultation fees, prescribed medication and diagnostics for occasional sickness.
                                    The benefits under wellness cover make ICICI Lombard Complete Health Insurance one of the preferred health insurance policies. It rewards your initiatives to maintain good health and reimburses your expenses on wellness activities through the points you earn for them.
                                    If you think you may not need a maternity insurance policy now but will need one in 2 or 3 years from now, then our maternity benefit add-on is worth adding to the cart. It covers you and your spouse after 3 years waiting period and bears the medical expenses for the normal delivery of a child, caesarian delivery and pre and postnatal care.
                                    Besides, under the new born cover, your baby is covered for a maximum period of up to 91 days from birth.

                                </p>}
                                <button onClick={() => settoggle3(!toggle3)}><IoMdArrowDropdown /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-4">
                        <div className='mt-5 p-2'>
                            <div><RiHospitalLine size='3rem' color='#D35700 ' className='mb-1' /></div>
                            <div class="card-body">
                                <h5 class="card-title py-1">Nursing at home & compassionate visit cover</h5>
                                {toggle4 ? <p className='lh-base'>If you need nursing care at home for your recovery, we’ll provide up to ₹3,000 per day for maximum 15 days. This way, you can avoid an unnecessary hospital stay. You can also benefit from this add-on if y...    </p> : <p className='lh-base'>If you need nursing care at home for your recovery, we’ll provide up to ₹3,000 per day for maximum 15 days. This way, you can avoid an unnecessary hospital stay. You can also benefit from this add-on if you are a senior citizen who may need post hospitalisation nursing care at home.
                                    The compassionate visit cover will come handy if your hospitalisation extends beyond 5 days. We will cover an economy class air ticket up to ₹20,000 for your spouse or children or parent to be able to visit you</p>}
                                <button onClick={() => settoggle4(!toggle4)}><IoMdArrowDropdown /></button>
                                <p className='mt-2'>*Optional covers available at an additional premium.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </>
    );
}

export default TwelvePage;