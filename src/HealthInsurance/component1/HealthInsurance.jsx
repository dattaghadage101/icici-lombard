import React from 'react';
import EightPage from './EightPage';
import FifthPage from './FifthPage';
import FirstPage from './FirstPage';
import FourthPage from './FourthPage';
import NinePage from './NinePage';
import SecondPage from './SecondPage';
import SeventhPage from './SeventhPage';
import SixthPage from './sixthPage';
import ThirdPage from './ThirdPage';
import {
   BrowserRouter, Route,Routes} from 'react-router-dom'
import FourSmallCard from './FourSmallCard';
import BtnPage from './BtnPage';
import TenthPage from './TenthPage';
import TwelvePage from '../compenent2/TwelvePage';
import HealthAdvanEade from '../compenent2/HealthAdvanEade';
import CoronaKavachPolicy from '../compenent2/CoronaKavachPolicy';




function HealthInsurance() {
    return (
        <>
           {/* <FirstPage/>
           <SecondPage/>
           <ThirdPage/>
           <FourthPage/>
           <FifthPage/>
           <SixthPage/>
           <SeventhPage/>
           <EightPage/>
           <NinePage/>
           <TenthPage/> */}
           
          
        
           
           {/* <BrowserRouter> 
                     
           
                   
               <Routes>
                   <Route path='/BtnPage' element={<BtnPage/>}/>
               </Routes> 
            </BrowserRouter> */}
             {/* <TwelvePage/> */}

              <BrowserRouter> 
              <HealthAdvanEade/>  
              {/* <CoronaKavachPolicy/> */}
               <Routes>
                   <Route/>
               </Routes> 
            </BrowserRouter>

        </>
    );
}

export default HealthInsurance;