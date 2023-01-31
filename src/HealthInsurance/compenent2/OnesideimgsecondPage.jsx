import React from 'react';



function OnesideimgsecondPage({ heading,onesidedata }) {
    return (
        <>

            <div className="container second mt-5">

                <div className="row smallcard">
                    <div class="row g-0  rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative d-sm-block d-lg-flex">
                        {onesidedata.map((item) => {

                            return (<>

                                <div class="col-auto  d-lg-block">
                                    <img src={item.img} alt='hii' className='mt-5'/>
                                </div>
                                <div class="col p-4 d-flex flex-column position-static">
                                    <p class="d-inline-block mb-2 text-dark pb-3 fs-1">{heading}</p>
                                    <p className='lh-base'>{item.paragraph1}</p>
                                    <p className='lh-lg'>{item.paragraph2}</p>
                                    <p className='lh-lg'>{item.paragraph3}</p>
                                    <p className='lh-lg'>{item.paragraph4}</p>
                                </div>
                            </>)
                        })}

                    </div>
                </div>
            </div>

        </>
    );
}

export default OnesideimgsecondPage;