import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import HealthInsurance from './component1/HealthInsurance';
import {BrowserRouter as Router} from 'react-router-dom'



function HealthInsurancemain() {
    return (
        <>
        {/* <Router> */}
            <HealthInsurance/>
        {/* </Router> */}
       
        </>
    );
}

export default HealthInsurancemain;