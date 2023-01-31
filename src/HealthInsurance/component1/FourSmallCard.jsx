import React from 'react';
import { FourSmallCardData } from './../../ThirdPagedata'

function FourSmallCard({ fourSmallCardData }) {
    console.log(fourSmallCardData)
    return (
        <>   
        {/* <div className="container text-center"> */}
            <div className='foursmallcard mt-5 '>
                <div class=" card">
                    <div className="row ">
                        {FourSmallCardData.map((item,index) => {
                            if(index==1 || index==2){

                            return <>
                                <div class="col-lg-6 col-xsm-12 g-0 smallcards d-flex col-6" style={{ background: '#F9FAFC'}}>

                                    <span>
                                        <img src={item.img} class="img-fluid rounded-start" alt="..." className='mt-3 p-4 ml-5' />
                                    </span>

                                    <div class="col-md-8 pt-5 pb-5">


                                        <p class="card-text">{item.para}</p>

                                    </div>
                                </div>
                            </>
                            }else{
                                return <>
                                <div class="col-lg-6 col-xsm-12 g-0 smallcards d-flex " >

                                    <span>
                                        <img src={item.img} class="img-fluid rounded-start" alt="..." className='mt-3 p-4 ml-5' />
                                    </span>

                                    <div class="col-md-8 pt-5 pb-5">


                                        <p class="card-text">{item.para}</p>

                                    </div>
                                </div>
                            </>

                            }
                        })}
                    </div>
                    </div>
                </div>
            {/* // </div> */}
        </>
    );
}

export default FourSmallCard;