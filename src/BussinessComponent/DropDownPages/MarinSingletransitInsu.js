import React from 'react'
import '../../CSS/MarinSingletransitInsu.css'
import marine_banner_new from '../../images/marine_banner_new.webp'
import  marindata from '../../JSONDATA/MarinInsuJson.json'
import { useFormik } from 'formik'
import { Marinschema } from './Validation_Schema/MarinsingleSchema'
import Navbar from '../../BussinessComponent/Navbar'

function MarinSingletransitInsu() {

    const initialValues={
      commodity_type:"",
      cargo_sum_insured:"",
      mobile_number:"",
      pincode:"",
      email:"",
      company_name:"",
      term_condition:"",
      wh_update:"true"

    }

  const{handleBlur,handleChange,handleSubmit,values,errors,touched}=useFormik({
    initialValues:initialValues,
    validationSchema:Marinschema,
    onSubmit:(value)=>{
      // alert(JSON.stringify(value))
      console.log(value)
    }
  })
  // alert(JSON.stringify(errors))
  // console.log(errors.mobile_number)
  return (
   <div>
   <Navbar/>
  <section className="h-100 marin-single-top">
    <div className="container py-5 h-100">
      <form onSubmit={handleSubmit}>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card-registration my-4">
            <div className="row g-0">
              <div className="col-xl-6 d-none d-xl-block marin-image">
              <h1>Marine Transit Insurance (Inland)</h1>
              <p className='para'>Cover risk on goods under a single policy <br />Claim settl ement upto 5 lakhs within 10 days</p>
                <img src={marine_banner_new} alt="Sample photo"height={100} className="img-fluid " style={{borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem'}} />
              </div>
              <div className="col-xl-6">
                <div className=" p-md-5 text-white">
                  <h3 className="mb-5 text-uppercase">Marine Transit Insurance (Inland)</h3>
                  
                  <div className="row">
                    <div className="form-outline mb-4">
                      <select className="select form-control form-control-lg" value={values.commodity_type} onChange={handleChange} onBlur={handleBlur} name="commodity_type">
                        <option value={1} disabled selected>--select--</option>
                     {
                        marindata.map((e,i)=>(
                         <>
                    
                        <option value={e.value}>{e.lable}</option>
                 
                         </>
                        ))
                     }
                     </select>
                     <label className="form-label" htmlFor="form3Example8">Commodity Type</label>
                     {errors.commodity_type && touched.commodity_type ? <p className='error_msg'>{errors.commodity_type}</p>:null }


                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example8" className="form-control form-control-lg" value={values.cargo_sum_insured} onChange={handleChange} onBlur={handleBlur} name="cargo_sum_insured" />
                    <label className="form-label" htmlFor="form3Example8">Cargo Sum Insured (₹)</label>
                    {errors.cargo_sum_insured && touched.cargo_sum_insured ? <p className='error_msg'>{errors.cargo_sum_insured}</p> :null}
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1m" className="form-control form-control-lg" value={values.mobile_number} onChange={handleChange} onBlur={handleBlur} name="mobile_number" />
                        <label className="form-label" htmlFor="form3Example1m">Mobile Number </label>
                        {errors.mobile_number && touched.mobile_number ? <p className='error_msg'>{errors.mobile_number}</p>:null }
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1n" className="form-control form-control-lg" value={values.pincode} onChange={handleChange} onBlur={handleBlur} name="pincode" />
                        <label className="form-label" htmlFor="form3Example1n">Pincode </label>
                        {errors.pincode && touched.pincode ? <p className='error_msg'>{errors.pincode}</p>:null }
                      </div>
                    </div>
                  </div>
             
         
                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example8" className="form-control form-control-lg" value={values.email} onChange={handleChange} onBlur={handleBlur} name="email" />
                    <label className="form-label" htmlFor="form3Example8">Email ID</label>
                    {errors.email && touched.email ? <p className='error_msg'>{errors.email}</p>:null }
                  </div>
         
                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example97" className="form-control form-control-lg" value={values.company_name} onChange={handleChange} onBlur={handleBlur} name="company_name" />
                    <label className="form-label" htmlFor="form3Example97">Name of Company</label>
                    {errors.company_name && touched.company_name ? <p className='error_msg'>{errors.company_name}</p>:null }
                  </div>
                         {/* Default checkbox */}
                         <div className="form-check">
                          <input className="form-check-input"  type="checkbox"  id="flexCheckDefault" defaultChecked value={values.term_condition} onChange={handleChange} onBlur={handleBlur} name="term_condition" />
                          <label className="form-check-label" htmlFor="flexCheckDefault">I agree to the Terms and Conditions
                          </label>
                          {errors.term_condition && touched.term_condition ? <p className='error_msg'>{errors.term_condition}</p>:null }
                        </div>
                        {/* Checked checkbox */}
                        <div className="form-check">
                          <input className="form-check-input"  type="checkbox" id="flexCheckChecked" defaultChecked value={values.wh_update} onChange={handleChange} onBlur={handleBlur} name="wh_update" />
                          <label className="form-check-label" htmlFor="flexCheckChecked">Receive updates on WhatsApp </label>
                          {errors.wh_update && touched.wh_update ? <p className='error_msg'>{errors.wh_update}</p>:null }
                        </div>
                  <div className="d-flex justify-content-end pt-5">
                    <button type="submit" className="btn btn-light btn-lg">Get Quote</button>
                    <button type="submit" className="btn btn-warning btn-lg ms-2">Retrive Quote</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  </section>
</div>

  )
}

export default MarinSingletransitInsu