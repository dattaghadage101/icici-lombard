import React from 'react';
import FirstPageOne from './FirstPageOne';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import  FirstPageOneSubComponent  from "./FirstPageOneSubComponent";


function FirstPage() {
    return (
        <>   <div className='firstmainpage'>
            <div className="container">
                <div className="row firstrow mt-1 mb-3">
                    <div className="col-12 p-4">
                        <h4>Zero hassle health plans starting @₹15/day<sup>#</sup></h4>
                    </div>
                    <div className="col-12 pt-2 pb-3">
                        <ul>
                            <li className='smallline smaillline1'>No medical checkup required*</li>
                            <li  className='smallline'>Instant policy</li>
                            <li  className='smallline'>All plans cover <span>COVID-19</span></li>
                            <li  className='smallline'><span>6700+</span> cashless hospitals**</li>
                            <li >With 60 mins^ <span>TAT</span> for cashless hospitalisation</li>
                        </ul>
                    </div>
                </div>
                <FirstPageOne/>

            </div>
            </div>
            
            
        </>
    );
}

export default FirstPage;