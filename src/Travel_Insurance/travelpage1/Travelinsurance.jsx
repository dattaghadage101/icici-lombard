import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
// import '../css/travelinsurance.css'
import '../CSS/travelinsurance.css'

import { Link } from 'react-router-dom'


function Travelinsurance() {
  return (
    /*main div */
    <div className='containter-fluid b '>
      <div className='container-fluid tabcontainer '>
        <div className='container '>
          <div className='row tabh2 py-2 d-flex'>

            <div className='col-lg-4 py-4 my-2 rounded-left-3 d-flex justify-content-center'>
              <Link to='/fmultitrip'>
                <div>
                <h2>Multi-Trip</h2>
                <span>Travelling multiple times in year</span>
              </div></Link>
            </div>

            <div className='col-lg-4  py-4 my-2 d-flex justify-content-center'>
              <Link to='/fsingletrip'>
                <div>
                  <h2>Single-Trip</h2>
                  <span>One Policy for a trip</span>
                </div>
              </Link>
            </div>

            <div className='col-lg-4  py-4 my-2 rounded-right-3 d-flex justify-content-center '>
              <Link to='/fextendpolicy' className='link'><div  >
                <h2>Extend Policy</h2>
                <span>Trip extended? Revise the dates</span>
              </div>
              </Link>
            </div>

          </div>   {/*rowend */}

        </div>
      </div>   {/* tabcontainer end */}




    </div> /*main container-fluid close */



  )
}

export default Travelinsurance