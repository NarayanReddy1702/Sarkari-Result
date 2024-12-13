import React, { useEffect, useState } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'

export default function Home() {
  const [data ,setData]=useState([])
   const protect=[
    {heading:"Sarkari Result : Resources to Help Indians Get Government Jobs (Sarkari Job)",p1:"The future is uncertain, but a government job, Sarkari Jobs can help you secure your future. Click for valuable resources and help from Sarkari Result.",p2:'Did you know that over 1.5 million people lost their jobs in August 2021 in rural and urban India? Yes, the COVID-19 pandemic has hit the job market hard. Small businesses and multinationals alike have had to reconsider their staffing requirements.',p3:'Are you an unemployed Indian citizen because of the pandemic and fluctuating job market?',p4:"Are you working for a multinational company going through restructuring and considering your next steps?",p5:'Are you a recent graduate looking to find your first job?',p6:'Are you wondering if a government job is right for you?',p7:"You've come to the right place! At Sarkari Result, we will show you the benefits of an Indian government job and help you to find a government job that's stable, long-term, and right for you!"},
    {heading:"Why Should I Consider a Government Job?",p1:"In India, a Sarkari Naukri (or an Indian government job) is highly sought-after. It's the ultimate career goal, offering long-term security, good benefits, and friendly co-workers.",p2:"More than that, an Indian government job offers an opportunity to live a life of purpose.",p3:"It's a way for you to give back to your community.",p4:'According to the Centre for Monitoring Indian Economy Pvt. Ltd. (CMIE), the unemployment rate in India increased from 6.5% in November 2020 to 7.75% in October 2021. In this fluctuating market, there has been an increase in the demand for the stability and permanence offered by a Sarkari Naukri.',p5:"In addition, government jobs in India can be pretty lucrative offering competitive salaries, benefits, and pensions. Some of the highest-paid jobs in the Indian government include the Indian Administrative Services (IAS), Indian Foreign Services (IFS), and Indian Police Services (IPS).",p6:"Keep in mind that these jobs are also highly competitive with a complex application process!"},
    {heading:"What Kind of Government Jobs Can I Get?",p1:"There are a wide variety of government jobs in India. It depends on your interests, but a job in the Indian government can range from policy-making, public administration, military, law, engineering, and even teaching. Some of the more highly-paid and in-demand positions are discussed below to give you a sense of their requirements and salary expectations.",p2:"1. Indian Administrative Services (IAS) and Indian Foreign Services (IFS) Jobs : The role of an IAS officer may include advising the ministers on various policy issues, implementing policies of the government, collecting revenue, and supervising public spending. An IFS officer manages foreign relations in India with more than 160 Indian Diplomatic Missions and International Organizations around the world. The starting monthly salary of an IAS or IFS officer is about INR 56,100.",p3:"2. Indian Police Services (IPS) Jobs : A role with the IPS involves safeguarding the public, maintaining law and order, and detecting and preventing crime. The role can be with the various agencies and branches including the Research and Analysis Wing (R&AW), Intelligence Bureau (IB), Central Bureau of Investigation (CBI), and Criminal Investigation Department (CID). To be eligible for a job with IPS, there are additional requirements, including physical standards. Physical eligibility includes minimum height for men and women, minimum chest girth for men and women, restriction on vision impairments including myopia limited to less than -4.00, and hyper myopia not exceeding +4.00. According to Payscale, an entry-level police constable with less than 1-year experience can earn an average total compensation of INR 255,094. This includes tips, bonuses, and overtime pay.",p4:'3. Banking Jobs :The banking sector is one of the fastest-growing sectors in India. Its not surprising that jobs in government-approved banks such as the State Bank of India (SBI), Allahabad Bank, HDFC, and ICICI are highly sought after. A job in the banking sector could either be a clerical position such as typists, data entry operators, cashiers, or clerks or a probationary officer (PO) role. As a PO, the candidate will be under probation during the training period and will be hired following the probation based on performance. During the training period, the candidate will be trained in accounting, finance, billing, investment, and revenue collection. A PO role allows opportunities for career growth to middle and senior management based on performance and additional examinations. The starting monthly salary of a PO is about INR 57,000 including allowances.',p5:"4. Defence Jobs : Jobs with the National Defence Academy (NDA) can be in various departments, such as Army, Navy, Air Force, Coast Guard, etc. A job in the NDA comes with strict restrictions on age, physical, and vision standards. Cadet trainees receive a stipend of INR 56,100 per month. Allowances and promotions will increase this salary. There are also several agricultural, engineering, and research jobs with their own set of rules and requirements. These can get very complicated, but Sarkari Result does all the work for you and lists the various jobs ranging from a Rajasthani police constable to Allahabad High Court Review Officer. Each job posting contains all the details you would need to be able to apply for the position with ease."},
    
   ]


  

  const protect1=[
    {heading:'Sarkari Result 2024 : SarkariResult.Com',p1:"India has witnessed a high demand for Government jobs for many decades. People prefer Government jobs as their career option considering the wide variety of benefits that are associated with these. ‘Sarkari Naukri’ is a dream for millions of people across the nation, and only a few are lucky to land up with such jobs. People tend to take pride in having a Sarkari or Government job.",p2:'Government jobs hold the kind of authority not found in private jobs. These also offer job security for a lifetime, and hence a lot of youth prefer them. Getting into a Government job requires a person to go through multiple levels of tests. These include a written examination, interview and sometimes even physical examination. These are competitive exams, and millions of people appear for these exams to get into a coveted Government job.'},
    {heading:'Sarkari Exam for Government Jobs',p1:"Sarkari or Government exams are conducted for various positions in the state as well as central Government. There are various groups in Government jobs and candidates can apply for either of these groups, depending on their qualifications. Group A mostly comprises of managerial roles and are considered to be the highest level of jobs. Group B is for Gazetted officers. To clear the Group B exam, one has to make the UPSC exam. Most seats under Group B are filled via promotions, so only limited seats are left for entrance via exam. Group C and D are for public servants who have non-supervisory roles."},   
    {heading:'Sarkari Result 2023 - 2024',p1:"All information about Sarkari result and Rojgar results can be found on sarkariresult.com. It is now easy to log into sarkariresult.com and find out everything that you would want to know about most of the Government exams and Sarkari Result."},   
    {heading:'Sarkari Results for State Level Exams',p1:"State Governments conduct various exams, and the Sarkari Result Info for all these exams can be found online. Sarkari Results in Bihar for all government job exams conducted by the state of Bihar. Similarly, Sarkari info for the Sarkari Result in Jharkhand can be searched online for all the exams conducted for the state of Jharkhand. UP Sarkari result is one of the most common online searches in India, considering the high demand for Government jobs in the state of U.P."},   
    {heading:'Sarkari Naukri for Government Jobs',p1:"Sarkariresult.com Sarkari Result is a platform where thousands of Sarkari Naukri online forms are available, as soon as a new Sarkari Naukri form comes out in Uttar Pradesh, Bihar, Madhya Pradesh, Delhi, Uttarakhand and other states. The information is available on Sarkari Result. Sarkari Naukri 10+2 Form, Sarkari Naukri Graduate Passed Jobs, Sarkari Naukri Post Graduate Jobs, Sarkari Naukri Medical Jobs, Sarkari Naukri in SSC, UPSC in Sarkari Naukri. And young people can see the information about Sarkari Naukri form organized by many other organizations with a single click on Sarkariresult.com."},   
    {heading:'Sarkari Result - www sarkari result',p1:"Sarkari Result Sarkariresult.com is a one-stop destination for all Sarkari Result queries on सरकारी रिजल्ट Sarkari results. It has a list of all the Government exams, Sarkari Result which can be seen as links. If one clicks on these exam names or links, the Sarkari Result website provides exhaustive information on that specific exam. This includes the timeline when the exam is conducted, admit card information, the number of seats offered, application forms, Sarkari result dates etc."},   
    {heading:'Information about jobs and results in Uttar Pradesh on Sarkari Result UP',p1:"Uttar Pradesh is a very big state of India, where different types of government jobs keep coming out every month, then updates come related to it like exam date, exam result, exam admit card, answer key and other information. All the young candidates of Uttar Pradesh believe only on Sarkari Result that the information they will get on our website Sarkari Result will be correct and accurate.",p2:"There are various government agencies and departments in Uttar Pradesh that organize government jobs such as: UPPCL, UPRVUNL, UPSSSC, UPSSSC PET 2024-2025, UPPSC, UPNHM, UPJL, UP Metro, UPSESSB, UPHESC, Allahabad High Court, UP Basic Education Department, UPDELED, UP Police, etc. The information of all the candidates keeps on getting the Sarkari Result from time to time."},   
    {heading:'Sarkari Result - Online Application Process',p1:"It is now easy to apply for any Government job online. Some of the posts even allow the submission of scanned copies of identification documents. The internet has made it very easy to apply for these jobs, which was once considered to be a cumbersome task. Sarkari result online form can be found on sarkariresult.com. After applying for the exam, one has to appear for the exam and wait for the Sarkari exam result. Some of the exams have multiple stages, and hence, one has to be prepared for all the levels.",p2:'Be it Sarkari result news or Sarkari Naukri result, all of the information is at the fingertips for most applicants. It is even possible just to use the smartphone to make an application and live the dream of getting into a Government job.'},   
    {heading:'Sarkari Result Bihar Latest Jobs, Sarkari Naukri 2023',p1:"Sarkari Result website Like Uttar Pradesh and other states, Bihar's youth is also the first choice, Sarkari Result provides information related to government jobs and admission related to Bihar state from time to time. Such as: BPSC, CSBC, Bihar Police, Patna High Court, Bihar Vidhan Sabha, Biha Sachivalaya, Bihar Scholarship, Patna University, BPSSSC, Bihar SSC, BSSC, Bihar Swastha Vibhag, NHM Bihar, BSPHCL and other major recruitment and admission related information For this the people of Bihar trust only on Sarkari Result."},   
    {heading:'Government job information to be held in Delhi state on Sarkari Result Delhi.',p1:"Delhi is the capital of India where many government jobs keep coming out every month. Delhi has all the offices of the state government as well as the central government, that's why the people of Delhi like the website of Sarkari Result, in which they get all types of government jobs related to Delhi and all the information related to it like admit card, result. , Answer Keys are available very easily and at one place on SarkariResult.Com. Major institutions of Delhi from where recruitment and admission information is issued from time to time: DSSSB, Delhi Metro, Delhi Police, Delhi Jal Nagar, EDU Delhi, Delhi University, Delhi Forest Department, AIIMS Delhi, Delhi District Court, Delhi High Court, India Post Delhi, IB, RRC Delhi, FCI Delhi and other information is also available to the candidate on Sarkari Result."},   
    {heading:'What Can Sarkari Result Do to Help Me?',p1:"Applying for an Indian government job can be done online now. Documents may be scanned and submitted online. Unfortunately, an online application does not make the process any less stressful or cumbersome.",p2:"Applying to a government can be quite overwhelming with several deadlines and exam requirements. Rather than weeding through numerous websites, Sarkari Results lists all the government jobs. One-page summaries of the requirements provide all the important information in an easy-to-read format."},   
    {heading:'Why trust SarkariResult.com for Sarkari Result?',p1:"SarkariResult.Com You also know the name of Sarkari Result, this is not only a website but it is the trust of millions of unemployed youth / studying youth. Sarkari Result was established on 01 Jan 2012 and since then this Sarkari Result website is a trust and trust in which crores of youth are looking for government job/exam result/admit card/exam date information. Sarkari Result is the first and most accurate information reaches the youth, for which the entire team of Sarkari Result works 24x7.",p2:"Whenever a new exam result comes, exam admit card comes or any new government job, whether SSC / UPSC / state government or any other recruitment comes by the central government, first of all the youth open the Sarkari Result website and View information."},   
    
  ]
  const firstLine=[
    {link:"https://play.google.com/store/apps/details?id=com.app.app14f269771c01&pli=1",text:"Sarkari Result Android Apps ",text1:' || Sarkari Result Youtube Channel',text2:" || Sarkari Result Apple / IOS Apps",text3:' || Follow Instagram',animate:""},
    {link:"https://www.youtube.com/c/SarkariResultOfficial",text:" IBPS SO 14th Pre Result 2024 ",text1:'|| CTET December 2024 Exam City ',text2:" || NTA NIFT Online Form 2025"},
    {link:"https://apps.apple.com/us/app/sarkari-result/id1051363935?ls=1",text:" MPESB Primary TET Answer Key 2024",text1:'||   UPP Constable Final Answer Key 2024',text2:"|| Railway ALP CEN 01/2024 Answer Key"},
    {link:"https://www.instagram.com/sarkariresult.comofficial/",text:" Allahabad HC Group C D Exam Date 2024 ",text1:"|| NTA UGC NET December 2024 Online Form",text2:"|| MPPSC SET Admit Card 2024"}
  ]
  let arr = [
    { Text: "SSC MTS 2024 Answer Key", bgColor: "#c92e2e", color: "black" },
    { Text: "Railway ALP ANswer Key", bgColor: "blue", color: 'white' },
    { Text: "UP Aganwadi 2024", bgColor: "orange", color: "white" },
    { Text: "UP Scholarship Apply Online", bgColor: "green", color: "black" },
    { Text: "CTET Dec 2024 Exam City Details", bgColor: "violet", color: "black" },
    { Text: "RPSC PGT 2024 Apply Online", bgColor: "green", color: "black" },
    { Text: "UGC NET Dec 2024 Apply Online", bgColor: "rgb(59, 59, 105)", color: "white" },
    { Text: "RPF Sub Inspector Admit Card", bgColor: "crimson", color: "white" },

  ]




  console.log(data);
  
  useEffect(()=>{
  const options = {
  method: 'GET',
  headers: {
  'x-rapidapi-key': 'b30f9dafbbmsh0574bd1546dbd4bp1a2d2bjsn486f002d2960',
  'x-rapidapi-host': 'sarkari-result.p.rapidapi.com'
  }
  };
  const url = 'https://sarkari-result.p.rapidapi.com/scrape/answerkey';
  fetch(url,options).then((res)=>{
      return res.json()
      }).then((data)=>{
       setData(data.result)
      }).catch((error)=>{
        console.log(error);
      })
  },[])
  
  
  let textArr = [{mainText:"Result",link:"/Results"}, {mainText:"Admit Card",link:"/AdmitCard"}, {mainText:"Latest Job",link:'/latestJobs'}, {mainText:"Answer Key",link:'/AnswerKey'}, {mainText:"Syllabus",link:'/Syllabus'}, {mainText:"Admmission",link:"/Admission"}, {mainText:"Important",link:"/Important"}, {mainText:"Certificate Verification",link:'/Certificate'}]
  const newTextArr = textArr.map((value) => {
    return (
      <div className="box result-box">
        <div className="result d-flex">
          <h1>{value.mainText}</h1>
        </div>
        <div className="list-of-link d-flex-c">
          {data.map((value)=>{
            return (
              <a href={value.href}>{value.text}</a>
            )
          })}
    
          <Link  className='view-more' to={value.link}>View More</Link>
     
        </div>
      </div>
    )
  })
  const newArr = arr.map((element) => {
    return (
      <div className="card">
        <h1 style={{ backgroundColor: element.bgColor, cursor: 'pointer', color: element.color }}>{element.Text}</h1>
      </div>
    )
  });


  return (
    <>
      <div className="home-sec d-flex-c">
      <div className="animate-text d-flex-c">
      {firstLine.map((value,index)=>{
        return(
          <marquee key={index} direction='right' scrollamount="8"  behavior="alternate">
      <div className="link_animation d-flex">
          <a  href={value.link}>{value.text}</a>
          <a  href={value.link}>{value.text1}</a>
          <a  href={value.link}>{value.text2}</a>
          <a  href={value.link}>{value.text3}</a>
          
        </div>
      </marquee>
        )
      })}
      </div>
        <div className="card-container d-flex">
          {newArr}
        </div>
      </div>
      <div className="some-more-details d-flex">
        {newTextArr}
      </div>
      <div className="protect-part d-flex-c">
        <div className="protected-img d-flex" >
          <img src="./Images/Protected.png" alt="" />
        </div>
        <div className="protect-inform">
         {protect.map((value)=>{
          return(
            <div className="details">
            <div className="heading d-flex">
              <h1>{value.heading}</h1>
            </div>
            <div className="protect-para d-flex-c">
              <p>{value.p1}</p>
              <p>{value.p2}</p>
              <p>{value.p3}</p>
              <p>{value.p4}</p>
              <p>{value.p5}</p>
              <p>{value.p6}</p>
              <p>{value.p7}</p>
            </div>
          </div>
          )
         })}
           {protect1.map((value,index)=>{
          return(
            <div key={index} className="details">
            <div className="heading d-flex">
              <h1>{value.heading}</h1>
            </div>
            <div className="protect-para d-flex-c">
              <p>{value.p1}</p>
              <p>{value.p2}</p>
            </div>
          </div>
          )
         })}
        </div>
      </div>
    </>
  )
}
