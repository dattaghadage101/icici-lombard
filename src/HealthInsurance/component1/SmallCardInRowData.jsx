import React from 'react';
// import {smallCardinRowData} from './../../ThirdPagedata';
import {RiArrowRightSLine} from 'react-icons/ri'

function SmallCardInRowData({ smallCardinRowData, headingleft, smallCardinRowDatatwo, headingright }) {
    // console.log(smallCardinRowDatatwo)
    return (
        <>
            <div className="container my-4">
                <div className="row">
                    <div className="col-lg-6 col-xsm-12">
                        <h2 style={{fontWeight:'700',fontSize:'35px'}}>{headingleft}</h2>
                        {smallCardinRowData.map((item) => {
                            return <>
                                <div>
                                    <div className='d-flex p-2'>
                                        <span><RiArrowRightSLine size='2rem' color='#EC6608' /></span>
                                        <p style={{fontWeight:'300', fontSize:'16px'}}>{item.paragraph}</p>
                                    </div>

                                </div>

                            </>
                        })}
                    </div>
                    <div className="col-lg-6 col-xsm-12">
                            <h2 style={{fontWeight:'700',fontSize:'35px'}}>{headingright}</h2>
                            {smallCardinRowDatatwo.map((element) => {
                                return (
                                <>
                                    <div>
                                        <div className='d-flex p-2'>
                                            <span><RiArrowRightSLine size='2rem' color='#EC6608' /></span>

                                            <p style={{fontWeight:'300', fontSize:'16px'}}>{element.paragraph}</p>
                                        </div>

                                    </div>

                                </>)
                            })}
                        
                    </div>
                </div>
            </div>    
            </>
            );
}

            export default SmallCardInRowData;