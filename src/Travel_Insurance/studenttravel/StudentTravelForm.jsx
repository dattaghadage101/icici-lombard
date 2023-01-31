import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

import Checkbox from '@mui/material/Checkbox';

// import '../../css/travelinsurance.css'
import '../../CSS/travelinsurance.css'
import { Button } from '@mui/material';

function StudentTravelForm() {
  const initialvalue={
    monbilenumber:'',
    email:'',
    region:'excluding'

  }

    const [value, setValue] = React.useState(initialvalue);

    const handleChange = (event) => {
      setValue({...value,[event.target.name]:event.target.value});
      console.log(value)
    };

    const sendData=()=>{
    alert(`${value}`)
  }


  return (
    <div>
        <form className='formbg'>
 <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch'},
      }}
      noValidate
      autoComplete="off"
    >
          
      <div>
      <TextField id="number"  label="Mobile Number" variant="standard" onChange={(event)=>handleChange(event)} name='mobilenumber'/>
      </div>
      <div>
      <TextField id="standard-basic" label="Email" variant="standard" onChange={(event)=>handleChange(event)} name='email'/>
      </div>
    </Box>


    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group"><h3>Select region of travel</h3></FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="excluding" control={<Radio />} label="Worldwide excluding USA or Canada" />
        <FormControlLabel value="including" control={<Radio />} label="Worldwide including USA or Canada" />
      </RadioGroup>

    </FormControl>
      <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="I agree to the terms and conditions" />
      <FormControlLabel control={<Checkbox />} label="I want to get updates on" />
    </FormGroup>

          <FormControl className='d-flex justify-content-center'>
            <Button variant='contained' onClick={()=>sendData()}>Submit</Button>
          </FormControl>

    
    </form>
    </div>
  )
}

export default StudentTravelForm