import React from 'react'
import CropInsurance from './CropInsurance'
import CyberInsurance from './CyberInsurance'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NRIInsurance from './NRIInsurance'

function ParentOtherInsurance() {
  return (
    <div>
      
       
      <Router>
        <div>
          <Link to='/cropinsurance'>Crop Insurance</Link>
          <Link to='/nriinsurance'>NRI Insurance</Link>
          <Link to='/cyberinsurance'>Cyber Insurance</Link>
        </div>
        <Routes>
          <Route exact path='/cropinsurance' element={<CropInsurance/>}></Route>
          <Route exact path='/nriinsurance' element={<NRIInsurance/>}></Route>
          <Route exact path='/cyberinsurance' element={<CyberInsurance/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default ParentOtherInsurance
