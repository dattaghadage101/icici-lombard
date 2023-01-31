import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './BussinessComponent/Navbar';
import Home from './BussinessComponent/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WorkmenInsurence from './BussinessComponent/DropDownPages/WorkmenInsurence';
import Ghelthinsurence from './BussinessComponent/DropDownPages/Ghelthinsurence';
import MarinSingletransitInsu from './BussinessComponent/DropDownPages/MarinSingletransitInsu';
import MarinOpenInsurence from './BussinessComponent/DropDownPages/MarinOpenInsurence';
// sandhya
import CropInsurance from './OtherInsurance/CropInsurance';
import CyberInsurance from './OtherInsurance/CyberInsurance';
import NRIInsurance from './OtherInsurance/NRIInsurance';
import NavbarOtherInsurance from './OtherInsurance/NavbarOtherInsurance';
import HealthInsurance from './HealthInsurance/component1/HealthInsurance';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        {/* <NavbarOtherInsurance/> */}
        <Routes>
          {/* <Route path='/' element={<Home />}></Route> */}
          <Route path='/' element={<Home />}></Route>
          <Route path='/Workmeninsurence' element={<WorkmenInsurence/>}></Route>
          <Route path='/Group_helth_insurence' element={<Ghelthinsurence/>}></Route>
          <Route path='/MarinSingletransitInsu' element={<MarinSingletransitInsu/>}></Route>
          <Route path='/MarinOpenInsurence' element={<MarinOpenInsurence/>}></Route>
          {/* sandhya ghadage */}
          <Route exact path='/1' element={<CropInsurance/>}></Route>
          <Route exact path='/nriinsurance' element={<NRIInsurance/>}></Route>
          <Route exact path='/cyberinsurance' element={<CyberInsurance/>}></Route>
          {/* Sayli */}
          <Route path='/2' element={<HealthInsurance/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
