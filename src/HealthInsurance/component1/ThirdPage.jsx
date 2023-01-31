import React from 'react';
import ThirdPagedata from "./../../ThirdPagedata";

function ThirdPage(props) {
    // console.log(ThirdPagedata[0])
    return (
        <>  
        <div className='fullcolorpage'>
            <div className="container carddata">
                <div>
                    <h2>What are the benefits of buying a health insurance policy?</h2>
                    <p>A comprehensive health insurance plan in India comes with many advantages.</p>
                </div>
                <div className="row">
                    {ThirdPagedata.map((item) => {
                        return (
                            <div className=" col-md-4 innersmallcard col-xsm-12">
                                {/* <div className="card"> */}
                                <div className="card-body">
                                    <div className='d-flex'>
                                        <span>{item.id}</span><h5 className="card-title">{item.heading}</h5>
                                    </div>
                                    <p className="card-text">{item.Para}</p>
                                </div>
                            </div>
                            // </div>
                        )
                    })}

                </div>
            </div>
        </div>
        </>
    );
}

export default ThirdPage;