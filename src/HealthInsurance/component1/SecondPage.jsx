import React from 'react';

function SecondPage() {
    
    return (
        <>
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
                <div className="row smallcard">
                    <div class="row g-0  rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative d-sm-block d-lg-flex">
                       <div class="col-auto  d-lg-block">
                            {/* <svg class="bd-placeholder-img" width="400" height="280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg> */}
                            <img src='/Images/HealthInsurence/ui-health-insurance-policy-spd.png' alt='hii'/>
                        </div>
                        <div class="col p-4 d-flex flex-column position-static">
                            <h1 class="d-inline-block mb-2 text-success">What is Health Insurance?</h1>
                            <p >A medical insurance policy, also called as health insurance, covers medical expenses for illnesses or injuries. It reimburses your bills or pays the medical care provider directly on your behalf. A comprehensive medical insurance covers the cost of hospitalisation, daycare procedures, medical care at home (domiciliary hospitalisation), ambulance charges, amongst others..</p>
                            <p>A health insurance plan helps you stay covered against various diseases. Additionally, it helps you boost tax savings. Under section 80D of the Income Tax Act, 1961, you can claim tax benefits against your health insurance premium.</p>
                        </div>    
                    </div>
                </div>
            </div>
        </>
    );
}

export default SecondPage;