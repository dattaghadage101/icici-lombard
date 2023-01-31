import React from 'react';

function SmallCardThree({smallcardthree,heading,head}) {
    return (
        <>
         <div className="container">
                <div>
                    <div class=" mb-3 mt-5" style={{maxWidth: '100%'}}>
                        <div class="row g-0 smallcardthree">
                            <div class="col-md-4">
                                <h2 className='p-4'>{heading}</h2>
                                <p>{head}</p>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    {smallcardthree.map((item)=>{
                                        return <>
                                            <div className='d-flex innercard'>
                                               <span className='p-2'>{item.id}</span>
                                               <p className='mt-3'>{item.para}</p>
                                            </div>
                                            <hr style={{width:'92%',marginLeft:'5%'}}/>
                                        </>}
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SmallCardThree;