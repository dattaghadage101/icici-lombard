import React from 'react';
import {sixthPagesData} from "./../../ThirdPagedata";
import { FcLike } from "react-icons/fc";

export default function SixthPage() {
    return (
        <>
            <div className='sixthPage'>
                <div className="container sixpageone">
                    <div className='sixpagetwo'>
                        <h2>How to pick a suitable health insurance plan from ICICI Lombard?</h2>
                        <p>Go for the health insurance plan that suits your needs the best!</p>
                    </div>
                    <div>
                        <div className="row">
                       {sixthPagesData.map((item)=>{
                         return <><div className="col-lg-4 col-xsm-12 col-md-6">
                            {item.Image}
                         <h2 style={{fontSize:'17px',color:'rgb(40,40,40)'}}>{item.heading}</h2>
                         <p style={{fontSize:'15px',color:'rgb(40,40,40)'}}>{item.paragraph}</p>
                        
                         </div>
                         </>
                   
                         
                       })}
                       </div>
                        
                    </div>
                </div>
            </div>


        </>
    );
}