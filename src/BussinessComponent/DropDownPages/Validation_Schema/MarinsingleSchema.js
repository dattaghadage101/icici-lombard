import * as Yup from 'yup'

export const Marinschema=Yup.object({
    commodity_type:Yup.string().required("Plz select commodity type"),
    cargo_sum_insured:Yup.number().required("Plz fill cargo sum insured"),
    mobile_number:Yup.number().min(10).max(11).required("Plz enter mobile number"),
    pincode:Yup.number().min(6).max(6).required("Plz enter pincode"),
    email:Yup.string().email().max(20).required("Plz enter email id"),
    company_name:Yup.string().max(40).required("enter company name"),
    term_condition:Yup.boolean().oneOf([true],"you need to accept term and condition"),
    wh_update:Yup.boolean().oneOf([true],"Plz accept Whatsapp notification")
})