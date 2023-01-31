import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function FirstPageOneSubComponent(props) {

  return (
    <>
      <div className="container">
        <div className='row'>
          <div className="col-12"></div>
          <div className='firstPageOneComponent'>
            <div className='firstPageOneComponent1 rounded-3 h-100 p-3'>
              <div className=''>
                <span className='span1'>Adult(s)</span>
                <span className='span2 me-5'>(21 years & above)</span>
              </div>
              <div className='ml-3'>
                <span className='span3'>-</span> <span style={{ color: "black" }}> 0 </span> <span className='span4'>+</span>
              </div>
            </div>
            <div className='firstPageOneComponent1 rounded-3 h-100 p-3'>
              <div className=''>
                <span className='span1'>Kida(s)</span>
                <span className='span2 me-5'>(3 years - 20 year)</span>
              </div>
              <div className='ml-3'>
                <span className='span3'>-</span> <span style={{ color: "black" }}> 0 </span> <span className='span4'>+</span>
              </div>
            </div>
          </div>
          <div className="col-12">

            <div className='InputField bg-light '>
              <TextField
                id="standard-textarea"
                label="Mobile Number"
                multiline
                variant="standard"
              />
              <TextField
                id="standard-textarea"
                label="Email"
                multiline
                variant="standard"
              />

            </div>
          </div>


        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default FirstPageOneSubComponent;