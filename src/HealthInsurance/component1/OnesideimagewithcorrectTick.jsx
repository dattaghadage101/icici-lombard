import React from 'react';
import { FcApproval } from "react-icons/fc";

function OnesideimagewithcorrectTick({onesideImegeone,img,heading}) {
    return (
        <>
            <div className="container onesideimagewithcorrecttick mt-4">
                <div>
                    <div class=" mb-3 mt-5">
                        <div class="row g-0">
                            <div class="col-md-5">
                                <img src={img} class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-7">
                               <h1 class="card-title">{heading}</h1>
                                {onesideImegeone.map((item)=>{
                                    return(<>
                                            <div className='d-flex'>
                                                <span><FcApproval size='1.5rem'/></span>
                                                <p class="card-text">{item.para}</p>
                                            </div>
                                    
                                    </>)
                                })}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OnesideimagewithcorrectTick;