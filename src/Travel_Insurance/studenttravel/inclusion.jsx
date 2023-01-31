import React from 'react'
// import '../../css/travelinsurance.css'
import '../../CSS/travelinsurance.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Fragment } from 'react'
// import { useEffect } from 'react'

function Inclusion() {


  const InclusionDataFirst = [
    {
      title: " Health cover",
      content: "In case you fall ill or meet with an accident on your trip abroad, we cover your medical expenses. These include in-patient and outpatient treatment, medical aid, X-rays and other diagnostic tests. You need to consult with our Third Party Administrator to get authorisation in advance for any medical treatment. We also cover your costs of coming back to India in case it’s medically necessary. Please read our policy wordings for all the terms and conditions."
    },
    {
      title: "Dental treatment",
      content: "We compensate your expenses in treating any tooth or teeth during your trip abroad. This is applicable only for your natural teeth."
    },
    {
      title: "Compassionate visit",
      content: "Suppose you are hospitalised for more than 7 days and your medical condition does not permit you to travel back to your home country. Moreover, no adult family member is present with you abroad. In such a scenario, we will pay for a round trip economy class air ticket, or first class railway ticket, to allow an immediate family member, to be at your bedside at the hospital."
    },
    {
      title: "Treatment for mental and nervous disorders",
      content: "We cover treatment of mental disorders, including alcoholism and drug dependency, subject to a maximum limit of US$ 1,000. This is limited to inpatient hospitalisation (24 hours or more), provided by a hospital / nursing home."
    }
  ];

  const InclusionDataSecond = [
    {
      title: "Pregnancy-related hospitalisation*",
      content: "We take care of in-patient medical expenses related to pregnancy, subject to a maximum limit of US$ 500, after a waiting period of 10 months."
    },
    {
      title: "Sports injuries*",
      content: "As per of the medical cover, we also take care of medical expenses for inter-collegiate sports injuries. These expenses will be treated as any other medical expenses for an accident, and will be subject to the terms of conditions mentioned in the policy."
    },
    {
      title: " Cancer screening*",
      content: "If a physician recommends cancer screening and mammographic examinations, we pay out the expenses for the same, subject to a maximum limit of US$ 2,000. Any tests you undergo as a part of preventive health check-up will not be covered under this benefit."
    },
    {
      title: "Childcare benefits*",
      content: "Suppose your child is hospitalised for more than 2 days, for any ailment. In such a scenario, we provide a hospital cash benefit of US$ 100, subject to a maximum of 7 days. This is applicable provided the child is above 90 days of age."
    }
  ];

  const InclusionDataThird = [
    {
      title: "Personal liability",
      content: "Suppose you are involved in an incident which leads to the death, injury or damage to someone’s health/property and you are legally liable for the same. In that case, we compensate you for the liability expenses up to the sum insured in your policy."
    },
    {
      title: "Personal accident",
      content: "We provide coverage to the insured or nominee (as applicable) in case of death or permanent disablement due to an accident abroad. The compensation depends on the nature of the claim; for e.g. 20% of sum insured is given in case of a lost thumb, whereas 70% is given for an arm lost from the shoulder joint."
    },
    {
      title: "Bail bond",
      content: "In case of an arrest or detainment by the police/judicial authorities abroad, we cover the bail amount. We provide this amount to the appropriate authority/court, only in case of a bailable offence. The coverage under this benefit will be up to the amount mentioned in the selected plan."
    }
  ];

  const InclusionDataFourth = [
    {
      title: "Study interruption",
      content: "If your study abroad is interrupted because you are hospitalised, or because your sponsor or an immediate family member passed away. In that case you need to make a written request to the institution, asking for a tuition fee refund. We reimburse the remaining fees (which are not refunded by the institute), up to your policy sum insured."
    },
    {
      title: "Sponsor protection",
      content: "If the sponsor is injured and loses his life, we reimburse the insured student his/her tuition fee for the remaining period of study. The fees covered under this benefit will be up to the maximum limited mentioned in the policy."
    }
  ];


  // const listRender=(DataArrName)=>{
  //   DataArrName.map((e) => {
  //     return (
  //       <ul>
  //         <li>{<h3>{e.title}</h3>}
  //           {<p>{e.content}</p>}
  //         </li>

  //       </ul>
  //     )
  //   })
  // }

  return (
    <>
      <section>
        <div className='container'>
          <div className='row'>
            <h3 className='inclusionh31'>Medical coverage</h3>
            <div className='col-lg-6 inclusionlist_style'>
              {InclusionDataFirst.map((e) => {
                return (
                  <ul>
                    <li>{<h3>{e.title}</h3>}
                      {<p>{e.content}</p>}
                    </li>

                  </ul>
                )
              })}
              {/* {listRender(InclusionDataFirst)} */}

            </div>{/* colend */}
            <div className='col-lg-6 inclusionlist_style'>

              {InclusionDataSecond.map((e) => {

                return (
                  <ul>
                    <li>{<h3>{e.title}</h3>}
                      {<p>{e.content}</p>}
                    </li>

                  </ul>
                )
              })}
            </div>{/* colend */}
          </div>{/* rowend */}

          <div className='row'>
            <h3 className='inclusionh31'>Stay-related coverage</h3>
            <div className='col-lg-6 inclusionlist_style'>
              {InclusionDataThird.map((e) => {
                return (
                  <ul>
                    <li>{<h3>{e.title}</h3>}
                      {<p>{e.content}</p>}
                    </li>

                  </ul>
                )
              })}
            </div>{/* colend */}

            <div className='col-lg-6 inclusionlist_style'>
              {InclusionDataFourth.map((e) => {
                return (
                  <ul>
                    <li>{<h3>{e.title}</h3>}
                      {<p>{e.content}</p>}
                    </li>

                  </ul>
                )
              })}
            </div>{/* colend */}
          </div>{/* secondrowend */}


          <div className='row'>
            <h3 className='inclusionh31'>Travel-related coverage</h3>
            <div className='col-lg-6 inclusionlist_style'>
              <ul>
                <li>{<h3>Total loss of checked in baggage</h3>}
                  {<p>If your airline loses your checked-in baggage, we compensate you with its market value under this benefit. In case of a single checked-in bag, we pay out your entire sum insured. In case of more than one checked-in bag, we pay out 50% of the applicable sum insured.</p>}
                </li>

              </ul>

            </div>{/* colend */}
            <div className='col-lg-6 inclusionlist_style'>
              <ul>
                <li>{<h3>Loss of passport</h3>}
                  {<p>We compensate you in case you lose your passport during your trip abroad. Under this benefit, we will reimburse you for the expenses you need to obtain a duplicate or fresh passport.</p>}
                </li>

              </ul>
            </div>{/* colend */}
          </div>{/* thirdrowend */}

        </div> {/* containerend */}
      </section>








    </>
  )
}

export default Inclusion