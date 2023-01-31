import React from 'react';
import { NavLink } from 'react-router-dom';
import Cardscomponent from './Cardscomponent'

function NinePage(props) {
    return (
        <>
        <div className="container mt-5 ninepage">
            <div className='ninepagediv'>
                <h2>Health insurance blog articles</h2>
            </div>
            <div className="row">
                <div className="col-lg-4 col-xsm-12">
                    <Cardscomponent img='Images\HealthInsurence\how-to-check-health-insurance-policy-status-desk-(1).png'
                    title='How much health insurance do I need?' 
                    paragraph="Purchasing medical insurance without first assessing your needs is pointless. You must account for today's doctor consultation fees, critical illness treatment costs, and more"
                    date="19 jan 2022"/>
                </div>
                <div className="col-lg-4 col-xsm-12">
                    <Cardscomponent img='Images\HealthInsurence\how-to-check-health-insurance-policy-status-desk-(1).png'
                    title='How to Check Health Insurance Policy Status?' 
                    paragraph="You can check your health insurance claim status either online or offline."
                    date="19 jan 2023"/>
                </div>
                <div className="col-lg-4 col-xsm-12">
                    <Cardscomponent img='Images\HealthInsurence\how-to-check-health-insurance-policy-status-desk-(1).png'
                    title='How Does Health Insurance Works?' 
                    paragraph="Understand everything about health insurance, how health insurance works and ensure a stress-free medical experience"
                    date="19 jan 2023"/>
                </div>
            </div>
            <div className='text-center divforbtn m-5'>
                 <button type="button" class="btn p-3 rounded-pill" >Read More Article</button>
            </div>
            <div className='divforbtn m-5'>
              {/* <NavLink to='/BtnPage'><span class="btn p-3 rounded-pill pillbtn">Annual report 2020</span></NavLink> */}
              <button type="button" class="btn p-3 rounded-pill" >Annual report 2020</button>
            </div>
        </div>
        </>
    );
}

export default NinePage;