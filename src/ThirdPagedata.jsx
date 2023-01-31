// *********sixthPageicons*********
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
// ******************seventhPageicon******************************
import { FcApproval } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
// ************************Cradsdata**********************************



const ThirdPagedata =[
    {   id:1,
        heading:'Covers complete OPD requirements',
        Para:"ICICI Lombard's Befit plan is tailored to cover the expenses of all your minor and severe health concerns, including teleconsultation with the doctor, pharmacy, and routine diagnostics on a cashless basis."
    },
    {   id:2,
        heading:"Covers pre and post hospitalisation",
        Para:"One of the key benefits of a health insurance policy is that it covers your medical expenses incurred just before and after hospitalisation."
    },
    {   id:3,
        heading:"Covers pre-existing diseases",
        Para:"A health plan covers you for a pre-existing disease once you have completed the waiting period mentioned in the policy certificate."
    },
    {   id:4,
        heading:"Provides cashless treatment",
        Para:"At the time of hospitalisation, you don’t have to worry about arranging cash to pay your hospital bill. Your health insurance company will settle it directly with the hospital if it is in their network."
    },
    {   id:5,
        heading:"Lets you claim tax benefit",
        Para:"You can claim a tax deduction on health insurance insurance premium under section 80D of the Income Tax Act, 1961."
    },
    {   id:6,
        heading:"Provides additional sum insured",
        Para:"Keeping healthy has its own benefits. You can enjoy additional sum insured for every claim-free year as per the policy certificate of your health plan."
    },
] 
export default ThirdPagedata


// *******************************************fifthpagedata.js********************************

const fifthpagesdataone = [
    {
        heading:'No limit on hospital room rent',
        Paga:"ICICI Lombard Complete Health Insurance policy has no sub-limits on hospital room rent. In case you opt for a private ward, we will bear its expenses.",
    },
    {
        heading:'Free health check-up every year',
        Paga:"ICICI Lombard Complete Health Insurance plan provides you with a complimentary health check-up coupon per policy year. If you have a floater policy for family, you get two free coupons every year for your medical check-ups.",
    },
    {
        heading:'No co-pay clause',
        Paga:"A co-pay is a fixed sum that you usually pay out-of-pocket for your medical services, and the insurance company takes care of the remaining amount. There is no co-payment clause under ICICI Lombard Complete Health Insurance. That means, you won’t have to worry about the medical expenses eating into your savings.",
    },
    {
        heading:'Wellness program',
        Paga:"You earn reward points for undertaking some wellness activities. These include joining a gym or a yoga centre, going for a medical check-up, participating in a health or fitness event organised by us, etc. You can redeem these points on your OPD bills for doctor’s consultation, medicine and drugs, diagnostic expenses, dental expenses, etc.",
    },

    
]
export {fifthpagesdataone}

const fifthpagesdatatwo=[
    {
        heading2:'Domiciliary hospitalisation',
        Paga2:"In case the insured has to undergo medical treatment at home either because no room is available in the hospital or the patient can't be moved to one, we cover that expense too.",
    },
    {
        heading2:'Discount on premium',
        Paga2:"You save up to 12.5% on our Health Booster policy by paying the premium for 3 years in one go",
    },
    {
        heading2:'Cumulative bonus',
        Paga2:"You enjoy 10% additional sum insured on every claim-free year with our Health Booster policy. You can get up to 50% cumulative bonus with us.",
    }
]
export {fifthpagesdatatwo}


const fifthpagesdatathree=[
    {
        heading3:'Flexible sum insured',
        paga3:"You get to choose your sum insured from ₹1 lakh to ₹5 lakh depending upon your health needs."
    },{
        heading3:'Ambulance charges',
        paga3:'Your ambulance expenses will be covered up to ₹2000 per hospitalisation.',
    }
]
export {fifthpagesdatathree}


// ***************************************sixthpage******************************************

const sixthPagesData=[
    {    Image:<FcLike size='4rem'/>,
        heading:"Sum insured",
        paragraph:"It is the maximum amount that you can claim in a policy year for hospitalisation. If you are looking for a policy with a lesser coverage (under ₹5 lakh sum insured), you may opt for Arogya Sanjeevani Policy, ICICI Lombard. But, if you need an extensive coverage (above ₹5 lakh sum insured), you should go for ICICI Lombard Complete Health Insurance, our comprehensive health insurance policy. In case you already have a group health insurance and need a super top-up plan, then you can buy our Health Booster policy.",
    },
    {   Image:<FcLikePlaceholder size='4rem'/>,
        heading:"Additional sum insured",
        paragraph:"It is the bonus amount that is added to your sum insured for every claim-free year. While you can earn up to 10% additional sum insured with ICICI Lombard Complete Health Insurance and Health Booster policy, you can earn up to 5% with Arogya Sanjeevani Policy, ICICI Lombard. The maximum cumulative bonus that can be earned across our health insurance plans is 50%.",
    },
    {   Image:<FcDislike size='4rem'/>,
        heading:"Add-ons",
        paragraph:"You can purchase our add-ons at an additional premium. If you wish to customise your health plan with our add-ons that cover maternity, donor and OPD expenses, then you can consider ICICI Lombard Complete Health Insurance policy. We also let you customise our Health Booster policy with add-ons like critical illness cover critical illness cover, personal accident cover, hospital daily cash, etc.",
    }
]

export {sixthPagesData}

// *************************seventhPagedata************************
const SeventhPagesData =[
    {
        icon:<FcApproval size='1rem' style={{diaplay:'inline'}}/>,
        para:"If you require hospitalisation for any illness or injury during the policy year, some of our health insurance plans will cover your hospitalisation expenses."
    },
    {
        icon:<FcApproval size='1rem'/>,
        para:"If you need a daycare procedure or treatment, our health insurance plan will also cover the doctor recommended procedure or surgery."
    },
    {
        icon:<FcApproval size='1rem'/>,
        para:"Our health insurance plans will also cover your pre-hospitalisation expenses incurred 30 days prior to your hospitalisation and post-hospitalisation expenses incurred 60 days after your discharge from the hospital."
    },
    {
        icon:<FcApproval size='1rem'/>,
        para:"Our health insurance policy will also pay for the in-patient AYUSH treatment undertaken in government hospital or in any institute that is government recognised or accredited by the Quality Control Council of India or the National Accreditation Board on Health."
    },
    
]
export {SeventhPagesData}

const SeventhPagesDatatwo=[
    {
        image:<RxCross2 size='1rem' color='white'  style={{border:'2px solid #B02A30',borderRadius:'50%',background:'#B02A30'}}/>,
        paragraph:'Diagnostic or pathological costs such as blood tests, scans, or other similar procedures, unless specifically covered under the policy or necessitated by the treatment.'
    },
    {
        image:<RxCross2 size='1rem' color='white'  style={{border:'2px solid #B02A30',borderRadius:'50%',background:'#B02A30'}}/>,
        paragraph:'Any cosmetic or plastic surgery to change the appearance is excluded from our health insurance. However, we will cover the same surgery performed in the event of a burn, cancer, an accident, or any other essential medical condition.'
    },
    {
        image:<RxCross2 size='1rem' color='white'  style={{border:'2px solid #B02A30',borderRadius:'50%',background:'#B02A30'}}/>,
        paragraph:'Treatment required as a result of engaging in any dangerous or adventurous activities is not covered under our health insurance policy.'
    },
    {
        image:<RxCross2 size='1rem' color='white'  style={{border:'2px solid #B02A30',borderRadius:'50%',background:'#B02A30'}}/>,
        paragraph:'Drug, alcohol, or other toxic substance misuse, as well as any other addictive conditions and their repercussions.'
    },
    {
        image:<RxCross2 size='1rem' color='white'  style={{border:'2px solid #B02A30',borderRadius:'50%',background:'#B02A30'}}/>,
        paragraph:'Medical expenses incurred due to an insured person committing or attempting to commit a criminal act or breach the law.'
    },
    {
        image:<RxCross2 size='1rem' color='white'  style={{border:'2px solid #B02A30',borderRadius:'50%',background:'#B02A30'}}/>,
        paragraph:'Dietary or nutritional supplements and substances purchased without a recognised doctors prescription are not covered under our health insurance.'
    },
    {
        image:<RxCross2 size='1rem' color='white'  style={{border:'2px solid #B02A30',borderRadius:'50%',background:'#B02A30'}}/>,
        paragraph:'Medical expenses related to birth control, abortion, sterility and infertility.'
    },
    {
        image:<RxCross2 size='1rem' color='white'  style={{border:'2px solid #B02A30',borderRadius:'50%',background:'#B02A30'}}/>,
        paragraph:'Dental procedures unless and until they arise due to an accident.'
    },
    {
        image:<RxCross2 size='1rem' color='white'  style={{border:'2px solid #B02A30',borderRadius:'50%',background:'#B02A30'}}/>,
        paragraph:'Birth abnormalities, exterior congenital diseases, defects, or anomalies.'
    },
    {
        image:<RxCross2 size='1rem' color='white'  style={{border:'2px solid #B02A30',borderRadius:'50%',background:'#B02A30'}}/>,
        paragraph:'Unproven treatments or costs associated with unproven treatments, supplies, or services.'
    },
]
export {SeventhPagesDatatwo}

// **************************************************Cardsdata*********************************************************

const Cardsdata =[
    {
   
        paragraph:'Look for the coverage offered under different health insurance plans and choose as per your needs and budget.'
    },
    {
                            
        paragraph:'Check various modes of premium payment to see if your preferred one is available.'
    },
    {
 
        paragraph:'Before purchasing a health insurance plan, see whether your policy covers pre-existing illnesses or not. There is usually a waiting period for certain medical conditions under health insurance. Check your health policy for it before buying.'
    } ,
     
    {
 
         paragraph:'Go through the list of network hospitals available with your insurer. Ensure your nearest hospital is on the list.'
    },
    
]
export {Cardsdata}



const carddatatwo=[
    {
        paragraph:'With us, you can buy instant health insurance online by providing a few details.',
    },
    {
        paragraph:'ICICI Lombard has a network of 6700+ hospitals where you can avail cashless facility.',
    },
    {
        paragraph:'We care for you and are always there to help you 24×7.',
    },
    {
        paragraph:'Through our IL Take Care app, you can experience speedy claim settlement by sharing your policy details and uploading relevant documents.',
    },

]
export {carddatatwo}
// ********************************************twosmallcardinrowdata*********************************************

const smallCardinRowData =[
    {
        paragraph:"The IRDAI (regulatory body for insurance) has mandated health insurance companies to offer coronavirus cover in existing health policies."
    },
    {
        paragraph:"The COVID-19 claim process is similar to any other medical condition."
    },
    {
        paragraph:"The policy covers both pre and post hospitalisation expenses related to COVID-19."
    },
]
export {smallCardinRowData}

const smallCardinRowDatatwo =[
    {
        paragraph:"Different health insurers offer different plans with different features. By comparing, you can choose a health insurance plan that works the best for you."
    },
    {
        paragraph:"Premium quotes comparison can help you figure out a health policy that fits your budget."
    },
    {
        paragraph:"You can check for value-added services like complimentary health check-ups offered by different insurers. Thus, on comparing, you’ll be able to decide the best health insurance policy for yourself.."
    },
]
export {smallCardinRowDatatwo}

const smallCardinRowDatathree =[
    {
        paragraph:'Under the Income Tax Act of 1961, if you are under 60 years of age, you can get a tax exemption of up to ₹25,000 on your health insurance policy premium.',
    },
    {
        paragraph:'Senior citizens are allowed a maximum tax deduction of ₹50,000 on their policy premium.',
    },
    {
        paragraph:'If the premium is paid for both individuals and parents under 60 years of age, the maximum deduction allowed is ₹50,000.',
    },
    {
        paragraph:'If the premium is paid for an individual and family below 60 years, but parents above 60 years, the maximum deduction allowed is ₹75,000.',
    },

]
export {smallCardinRowDatathree}

const smallCardinRowDatafour =[
    {
        paragraph:'If both individuals and parents are above 60 years, the premium is subject to the maximum tax deduction of ₹1 lakh.',
    },
    {
        paragraph:'Preventive health check-ups are allowed an additional deduction of ₹5,000. However, this cannot exceed the maximum deduction threshold of ₹25,000 or ₹50,000, depending on the individual insured in the health policy.',
    },
    {
        paragraph:'These deductions are provided under section 80D of the Income Tax Act, 1961.',
    },


]
export {smallCardinRowDatafour}

const  smallCardinRowDatafive = [
    {
        paragraph:"You can compare and choose the appropriate health insurance plan from a wide range of options for plans and insurers.",
    },
    {
        paragraph:"You can also get a premium quote instantly by sharing your basic details and get covered immediately by paying the same.",
    },
    {
        paragraph:"You may get a lower premium as there is no involvement of middlemen.",
    },
    {
        paragraph:"Buying online health insurance saves your time and effort.",
    },

]
export {smallCardinRowDatafive}

const smallCardinRowDatasix = [
    {
        paragraph:'You can get a health policy at a lesser premium. This is because, for the insurance company, the lower the age, the lesser is the health risk associated.',
    },
    {
        paragraph:'You are exempted from the mandatory health check-ups that people of a certain age must undergo to obtain health insurance.',
    },
    {
        paragraph:'Usually, health insurance policies have waiting periods for certain conditions. When you start young, you complete them sooner.',
    },
    
]
export {smallCardinRowDatasix}

const smallCardinRowDataseven = [
    {
        paragraph:'Age is one of the crucial factors that determine your health policy premium. As a general rule, the older you are, the higher your premium will be, and vice versa.'
    },
    {
        paragraph:'If you have any pre-existing medical condition, you may have to pay higher health insurance premiums..'
    },
    {
        paragraph:'Your occupation can significantly impact the cost of your insurance policy. Working in hazardous conditions such as a construction site or a mine increases insurance premiums..'
    },
    {
        paragraph:'If you choose a higher policy duration, the policy premium will be lower..'
    },
    {
        paragraph:'BMI index directly relates to diseases such as diabetes, obesity, heart disease, etc. A person with a high BMI index has to pay a higher premium on their health insurance.'
    }
]
export {smallCardinRowDataseven}

const smallCardinRowDataeight = [
    {
        paragraph:'If you are a smoker or an alcoholic, the premium charged will be higher when compared to that of a non-smoker or someone who doesn’t consume alcohol.'
    },
    {
        paragraph:'Geographical areas with harsh climatic conditions also result in high health policy premiums.'
    },
    {
        paragraph:'When compared to group health insurance or family floater policies, purchasing a separate policy for each member of your family will result in a higher premium. In addition, health insurance add-ons also raise the cost of your policys premium..'
    },
    {
        paragraph:'Opting for co-insurance in a health insurance policy also lowers the policy premium.'
    }
]
export {smallCardinRowDataeight}

    
// *************************************************************************************************************
const smallcardthree=[
    {
        id:'1',
        para:'Visit the health insurance section of the ICICI Lombard website.',
    },
    {
        id:'2',
        para:'Enter basic information such as contact details, proposers information, pre-existing illness details etc.',
    },
    {
        id:'3',
        para:'Customise your policy by choosing the desired sum insured, policy terms, and other information.',
    },
    {
        id:'4',
        para:'Make an online payment using our secure payment gateway.',
    },
]
export {smallcardthree}

const smallcardfour=[
    {
        id:'1',
        para:'Contact us on our 24x7 toll-free number 18002666 to intimate the claim.'
    },
    {
        id:'2',
        para:'Keep your documents such as consultation, pharmacy, hospital bills, payment receipts, doctors prescriptions, etc., handy.'
    },
    {
        id:'3',
        para:'Fill the online claim form and upload the relevant documents.'
    },
    {
        id:'4',
        para:'Post verification, we will settle the claim with our network hospital in case of a cashless claim or transfer the claim amount to your account if you claimed for reimbursement..'
    }
]
export {smallcardfour}

const smallcardfive=[
    {
        id:'1',
        para:'Click here to visit our health insurance renewal page.'
    },
    {
        id:'2',
        para:'Enter your existing policy number or your registered mobile number.'
    },
    {
        id:'3',
        para:'Click on ‘Proceed’.'
    },
    {
        id:'4',
        para:'Follow the instructions for health insurance renewal online.'
    },
]
export {smallcardfive}

// **********************************************************differenceTabledata*********************************************
const DifferenceTabledata =[
    {
        parameter:'Cover',
        Mediclaim:'Mediclaim policy covers only hospitalisation, accident-related treatment, and pre-specified medical conditions; that too up to a predetermined limit.',
        HealthInsurance:"Health insurance extensively covers your pre and post hospitalisation expenses along with ongoing treatment’s medical costs incurred while you are hospitalised."
    },
    {
        parameter:"Add-on covers",
        Mediclaim:"You cannot purchase add-ons under a mediclaim policy.",
        HealthInsurance:"Add-ons are available under health insurance. You can enhance your cover by purchasing add-ons such as critical illness cover, hospital daily cash, etc."
    },
    {
        parameter:"Sum insured",
        Mediclaim:'The maximum sum insured available under a mediclaim policy is ₹5 lakh.',
        HealthInsurance:'The sum insured that you can opt under health insurance can be as high as ₹50 lakh.'
    }
         
]
export {DifferenceTabledata}
// *************************************FourSmallCard******************************************

const FourSmallCardData = [
    {
        img:'Images/HealthInsurence/health-ins-plan-1spd.png',
        para:"If you are planning to secure your family, a family floater health insurance is ideal for you. By paying a single premium for family floater health insurance, you may cover your parents as well as your children.",
    },
    {
        img:'Images/HealthInsurence/health-ins-plan-2spd.png',
        para:"If you are young and have just started your career, an individual insurance plan will be a great idea for you. Being young and free from any pre-existing illness, you can get the health policy for an affordable premium.",
    },
    {
        img:'Images/HealthInsurence/health-ins-plan-3spd.png',
        para:"If you or your parents, both or only your parents are above the age of 60 years, choose a health insurance plan that comes with critical illness cover .",
    },
    {
        img:'Images/HealthInsurence/health-ins-plan-4spd.png',
        para:"Health insurance policies that offer sufficient coverage and cover a wide range of illnesses always make a good pick.",
    }
]
export {FourSmallCardData}

// ***********************************************OnesideimagewithcorrectTick**************************************************************
const OnesideImegeonedata=[
    {
        para:'The proposer must be over the age of 21 to be eligible for health insurance.'
    },
    {
        para:'The minimum age for a child to be covered by a health policy in the case of a family floater policy is above 3 months.'
    },
    {
        para:'The maximum size allowed under the family floater policy is two adults and two children.'
    },
    {
        para:'If you are above 56 years of age, you need to undergo a medical check-up at our designated centre. Depending upon your health condition and any pre-existing disease, your eligibility for health insurance will be determined.'
    }
]
export {OnesideImegeonedata}

const OnesideImegeonedatatwo =[
    {
        para:'Duly filled claim form with your signature and valid identity proof.'
    },
    {
        para:'Doctors prescription recommending hospitalisation, diagnostic tests and medicines.'
    },
    {
        para:'Original invoice of pharmacy bills, indoor case papers and ambulance receipt.'
    },
    {
        para:'Policy documents stating the name, address, illness and other details of the insured.'
    },
    {
        para:'Any other documents that we may deem fit at the time of claim settlement.'
    }
]
export {OnesideImegeonedatatwo}
// *****************************************************************tenthpage*************************************
const TenthpageDataone = [
    {
        head:'What do you mean by a pre-existing disease?',
        para:'Any condition, ailment or injury or related condition(s), for which you have had signs or symptoms, and/or were diagnosed, and/or received medical advice/treatment, within 48 months prior to the first policy with the insurance company is called a pre-existing disease..'
    },
    {
        head:'What do you mean by waiting period?',
        para:'The duration after which you can make a claim is called a waiting period. Our waiting periods for ICICI Lombard Complete Health Insurance and Health Booster policy are as below:.',
        link1:'No waiting period for accidental hospitalisation.',
        link2:'30 days for all claims other than accidental hospitalisation.',
        link3:'2 years for pre-existing diseases. These diseases should be declared at the time of proposal and accepted by us for policy with sum insured of ₹3 lakh and above.',
        link4:'2 years for standard list of diseases and procedures.'
    },
    {
        head:'What does annual sum insured mean?',
        para:'Annual (basic) sum insured is the maximum amount that an insurance company will pay you in the event of a claim in a policy year.'
    },
    {
        head:'If I increase my sum insured at the time of renewal, does a waiting period apply?',
        para:'Yes, a waiting period will apply only to the added sum insured.'
    },
    {
        head:'My employer provides me with a health insurance. Do I still need one?',
        para:'Numerous employers offer group or individual health plans. However, these are not customised as per your needs and may have certain restrictions and limitations. Also, the coverage is dependent on the continuation of the job. Once you quit, you cannot avail the health plan benefits. Therefore, it is important to insure yourself with a comprehensive cover that lets you customise as per your needs. For example, for a family of 4 members, a sum insured of ₹2 lakh-₹3 lakh provided by your employer may be inadequate.'
    },
    {
        head:'From what age can I include my children in the plan?',
        para:'You can include your children aged between 90 days to 20 years in your policy. Newborns can be included after 90 days of birth. However, your daughter or son cannot be shown as a ‘dependent’ if they file a joint tax return.'
    },
    {
        head:'Which health insurance policy is ideal?',
        para:'If you have a family, you should choose a family floater health insurance over an individual health plan. It not only protects your entire family but also helps you save a lot on premiums.'
    },
    {
        head:'What is the advantage of health insurance?',
        para:'Health insurance plans provide cover for unexpected medical expenses. It covers an array of costs incurred on daycare procedures, hospitalisation, ambulance and domiciliary hospitalisation. Apart from this, you can also get tax benefits on your health insurance policy.'
    },
    {
        head:'Can a person have more than one health insurance policy?',
        para:'Yes, you can buy multiple health insurance policies to cover your medical costs. If one insurer rejects your claim, there is still a chance that others may accept as per its terms and conditions.'
    },
    {
        head:'What is the right age to buy a health insurance policy?',
        para:'It is recommended that you obtain a health insurance policy as soon as possible. Purchasing insurance at a young age allows you to earn an additional sum insured for every claim-free year under your policy. And as you get older, you will be able to accumulate higher and better coverage.'
    },
    {
        head:'What to do if I am admitted to a non-network hospital?',
        para:'If you get admitted to a non-network hospital, you have to pay for the medical treatment costs out of your pocket. Post-discharge, you can submit all the relevant documents such as medical bills and ambulance receipts for the reimbursement claim. Post verification, the claim amount will be transferred to your bank account.'
    },

]
export {TenthpageDataone}

const TenthpageDatatwo = [
    {
        head:'Will my existing health insurance policy cover hospitalisation expenses on account of COVID-19?',
        para:'Yes, hospitalisation expenses on account of COVID-19 will be covered under the policy in accordance with the policy terms and conditions.'
    },
    {
        head:'How can I intimate my claim after hospitalisation?',
        para:'You can intimate a claim by calling us on 1800 2666 (toll-free) or using our mobile app, IL Take Care. Scanned copies or photographs of all claim related documents can be uploaded in the app.Further, the Insured is required to furnish/courier hard copies of all requisite claim documents at his/ her own expense to the below mentioned address:',
        list1:"ICICI Lombard Healthcare,",
        list2:"ICICI Bank Towers,",
        list3:"Plot No. 12, Financial district,",
        list4:"Nanakramguda, Gachibowli,",
        list5:"Hyderabad- 500032",
    },
    {
        head:'Are any waiting periods applicable to claims under COVID-19?',
        para:'In case your policy has an outpatient treatment cover, then waiting periods are not applicable. A claim under outpatient treatment cover can be made in accordance with the claims procedure mentioned in the policy wordings. In case of hospitalisation on account of COVID-19, the hospitalisation expenses incurred will be covered provided the illness is contracted after completion of 15 days in case of a fresh policy. In case of a policy that has been renewed continuously without a break or in case of policies that have been ported in to ICICI Lombard, the 15 day condition will not be applicable.'
    },
    {
        head:'Will I be allowed to enhance my sum insured?',
        para:'Sum insured enhancement will be allowed based on medical assessment in accordance with the underwriting guidelines. However, such sum insured enhancement will be done only at the time of renewal.'
    },
    {
        head:'Are the expenses on medicines and diagnostic tests incurred during medically advised home isolation due to COVID-19 covered?',
        para:'In case the quarantine is in a hospital on the advice of a medical practitioner, then the medical expenses incurred will be covered in accordance with the policy terms and conditions. However, expenses incurred on account of self-quarantine or quarantine at home will not be covered.'
    },
    {
        head:'Will the policy cover hospitalisation in a country other than India?',
        para:'No. The geographical scope of the policy is limited to India.'
    },
    {
        head:'Will my travel history abroad affect the admissibility of claim under the policy?',
        para:'So long as the hospitalisation is in India, the travel history will not affect the admissibility of claim under the policy.'
    },
    {
        head:'Are the consultations with a medical practitioner and diagnostic tests in relation to COVID-19 covered under my health insurance policy?',
        para:'In case your policy has an outpatient treatment cover, then consultations with a medical practitioner and diagnostic tests as advised by a medical practitioner will be covered up to the sum insured. A claim under outpatient treatment cover can be made in accordance with the claims procedure mentioned in the policy wordings.Further, in case there is hospitalisation on account of COVID-19 and the same has been paid under the policy, then all expenses related to COVID-19 incurred on account of consultations with a medical practitioner and diagnostic tests as advised by a medical practitioner in the 30 day period prior to date of admission and 60 day period after date of discharge will be covered in accordance with the policy terms and conditions.'
    },

]
export {TenthpageDatatwo}

const btntitle=["Car Insurance","Bike Insurance","Travel Insurance","Vehicle Insurance","Vehicle Insurance","Health Insurance Plans for Family","Health Insurance Premium Calculator","Premium Calculator","Parents Health Insurance","Maternity Insurance","Tax Benefit On Health Insurance ","Top Up Health Insurance","Health Advantage","Saral Suraksha Bima","Corona Kavach Policy","Personal Accident Insurance","Arogya Sanjeevani Policy","Health Insurance Renewal","Health Insurance","Health Insurance","Health Insurance","Health Insurance for Diabetics","Individial Health Insurance","Children Health Insurance","Cashless Health Insurance","o Claim Bonus in Health Insurance","OPD Health Insurance","Health Insurance Value Added Service","Health Insurance in Bangalore","Health Insurance in Chennai","Health Insurance in delhi","Health Insurance in kolkatta","Health Insurance in Hydrabad","Health Insurance in Mumbau","Health Insurance in Pune"]
export {btntitle}


// ************************************************************twelvePagedata************************************************

const TwelvePagedata = [
    {
        img:'Images/HealthInsurence/chi-policy.png',
        paragraph1:'ICICI Lombard Complete Health Insurance policy secures your finances against sudden medical expenses. It is a comprehensive policy for you and your family, designed to cater to most of your common healthcare needs. It comes with an option to include your family under one policy called the family floater option. You can choose coverage for your family health insurance as per your medical needs such as maternity cover, OPD cover, critical illness cover, donor expenses cover, etc. Some of its noteworthy features include no limit on hospital room rent, no co-pay, no pre-medical check-up up to 45 years of age and 2 complimentary health check-up coupons every year for a family floater health insurance policy. As a result, it is one of the preferred health insurance policies in India.'
    }
]
export {TwelvePagedata}

const TwelvePagedatatwo = [
    {
        img:'Images/HealthInsurence/why_should_buy_chi8c0003ff45fd68ff8a0df0055efb99b6.png',
        paragraph1:'It is a fuss-free way to secure yourself with one of the leading health insurance policies.',
        paragraph2:'We know that your busy schedule may leave you with very little time to find a reliable health policy for family. So, digital can become your go-to solution for choosing one of the preferred health policies in India..',
        paragraph3:'We have hence put together a super easy and customisable online experience. It can help you zero down on a health insurance policy for family from the comfort of your home. You can select, edit the number of family members you wish to cover under the family health plan. You can also have your pick from our smart set of add-on covers basis your healthcare needs. Additionally, our health assistance team is available to answer your health related queries on our dedicated helpline – 04066274205 between 9 AM to 6 PM from Monday to Saturday.',
        paragraph4:'That’s not all. We let you claim digitally under your family medical insurance with us on our IL TakeCare mobile app. You also get to save 10% on your health insurance premium when you buy ICICI Lombard Complete Health Insurance policy for 2 years’ tenure.',
       
    }
]
export {TwelvePagedatatwo}

const TwelvePagedatathree=[
    {
        heading:"Never pay out-of-pocket again in case of hospitalisation",
        para:"Our health plans cover hospitalisation on a cashless basis. So, suppose you get our health insurance for parents or family. In that case, you and your loved ones will be covered against any diseases or injuries that require hospitalisation just 15 days"
    },
    {
        heading:"You can avail unlimited reset benefit",
        para:"If the balance sum insured under your family health plan is inadequate for subsequent claims by you or your family member we will reset it up to 100% of your base sum insured. Thus, you’ll have us by your... "
    },
]
export {TwelvePagedatathree}