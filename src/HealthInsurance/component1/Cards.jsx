import React from 'react';
import {RiArrowRightSLine} from 'react-icons/ri'

function Cards({Cardsdata,img,heading}) {
//    console.log(Cardsdata);
    return (
        <>
            <div className="container mt-5">
                <div>
                    <div class="row g-0  rounded overflow-hidden flex-md-row mb-4  h-md-250 position-relative d-sm-block d-lg-flex">
                        <div class="col-auto  d-lg-block mt-5 pt-5">
                             <img src={img} className="card-img-top" alt="placeholder" width="400" height="300" />
                        </div>
                        <div class="col p-4 d-flex flex-column position-static">
                            <h2 style={{fontWeight:'700',fontSize:'35px'}}>{heading}</h2>
                            {Cardsdata.map((item)=>{
                                return (
                                    <>
                                    <div className='d-flex p-2'>
                                    <span><RiArrowRightSLine size='2rem' color='#EC6608'/></span>
                                    <p style={{fontWeight:'300',fontSize:'px'}}>{item.paragraph}</p>
                                    </div>
                                    </>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;