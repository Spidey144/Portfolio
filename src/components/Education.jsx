import { div, title } from 'framer-motion/client';
import React from 'react'
import ACTE from '../assets/about/ACTE.jpg';
import MO from '../assets/about/MO.jpg';
import AI from '../assets/about/AI.jpg';
import Python from '../assets/about/Python.jpg';


const info =[

  {
    title :"B.Tech in Information Technology",
    college :"Ganesh College of Engineering, Salem",
    score :"CGPA: 7.3",
    year : "2022 – 2026",
  },

  {
    title :"Higher Secondary Certificate (HSC)",
    college: "Government Boys Higher Secondary School, Salem",
    score: "SCORE: 69%",
    year: "2022",

  },

  {
    title: "Secondary School Leaving Certificate (SSLC)",
    college: "Government Boys Higher Secondary School, Salem",
    score: "SCORE: 79%",
    year: "2020",
  },

];


function Academic({ list }) {
  return (
    <div className=" text-white p-8">
      <div className="max-w-4xl mx-auto relative">
        {/* Center Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-sky-500/40" />

        <div className="space-y-12">
          {list.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex items-center justify-between ${
                  isEven ? "flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Center Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-6 h-6 rounded-full bg-slate-950 border-2 border-sky-400  hover:scale-110 duration-400 transition ease-in-out">
                  <div className="w-2 h-2 bg-sky-400 rounded-full" />
                </div>

                {/* Content Block (Left or Right) */}
                <div className=" fadeUp w-[calc(50%-2rem)]  p-5 rounded-xl bg-slate-900/60 border border-slate-800  hover:ring-1 ring-indigo-800 hover:shadow-md shadow-indigo-600 hover:scale-105 duration-400 transition ease-in-out ">
                  <div >
                    <div className="flex items-center  justify-between gap-4 mb-2 ">
                    <h3 className="text-lg font-bold w-200 text-white">{item.title}</h3>
                    <span className="text-xs px-2.5 py-1 rounded-md bg-sky-500/20 text-sky-300 font-medium whitespace-nowrap">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-sky-400 text-sm font-medium">{item.college}</p>
                  <p className="text-slate-400 text-xs mt-1">{item.score}</p>
                  </div>
                  
                </div>

                {/* Empty Spacer to maintain 50/50 symmetry */}
                <div className="w-[calc(50% 2rem)]" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  
  );
}





function Education() {
  return (
    <section id='education' 
    className='bg-[#111827] h-450 '>
      
    {/* headings */}
    <p className="fadeUp text-center bg-[#111827] w-auto text-white text-5xl font-black tracking-tight  ">
    <span className='text-red-500/70  tracking-tight text-4xl'>#4</span>  Education</p>

    
    {/* Academic History */}
    <div >
      <div className='fadeUp flex ms-30 mt-20 gap-5'>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z"/>
        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z"/>
        </svg>
        <h1 className='fadeUp text-3xl font-bold'>Academic History</h1>
      </div>


      <div className='  flex mt-10 flex items-center justify-center'>
 
       {/* timetine */}
       <Academic list={info} />

      </div>

    </div>

    
    {/* Certification */}

     
    <div className='fadeUp flex ml-30 gap-5 mt-20'>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.96668 14.7219L7 22L11.5884 19.247C11.7381 19.1572 11.8129 19.1123 11.8928 19.0947C11.9634 19.0792 12.0366 19.0792 12.1072 19.0947C12.1871 19.1123 12.2619 19.1572 12.4116 19.247L17 22L16.0343 14.7212M19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <h1 className='text-3xl font-bold'>Achievements</h1>
    </div>
    

    <div className='mx-30 mt-15 grid  grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3   ' >
      {/* box1 */}
      <div className=' row-span-2 p-3'>
        <div className='fadeUp'>
        <h1 className='text-lg font-bold'>Python Full Stack Certification</h1>
        <h1 className='text-sm font-semibold text-base tracking-wide text-slate-400'>ACTE Technologies, Chennai</h1>

        <div className='mt-1 gap-1 flex'>
          <svg className='fill-salte-400' xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="currentColor" viewBox="0 0 16 16">
          <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
          </svg>
          <p className='text-xs text-base tracking-wide text-slate-400 '>Completed May 2026</p>
        </div>
        </div>

        <div className='fadeUp mt-10 rounded-xl ring-3 ring-indigo-800 hover:shadow-lg shadow-indigo-600 hover:scale-110 duration-500 transition ease-in-out'>
          <img className='rounded-xl  ' src={ACTE} alt="" />
        </div>
      </div>
      
      {/* box2 */}
      <div className='  p-3   '>
        <div className='fadeUp'>
        <h1 className='text-lg font-bold'> Microsoft Office Essentials</h1>
        <h1 className='text-sm font-semibold text-base tracking-wide text-slate-400'>Naan Mudhalvan Program</h1>
        <div className='mt-1 gap-1 flex'>
          <svg className='fill-salte-400' xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="currentColor" viewBox="0 0 16 16">
          <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
          </svg>
          <p className='text-xs text-base tracking-wide text-slate-400 '>Completed May 2025</p>
        </div>
        </div>

        <div className='fadeUp w-auto  rounded-xl ring-3 ring-indigo-800 hover:shadow-lg shadow-indigo-600 hover:scale-110 duration-500 transition ease-in-out'>
          <img className='mt-6 rounded-xl' src={MO} alt="" />
        </div>
         

      </div>

      {/* box3 */}
      <div className=' p-3 h-90'>
        <div className='fadeUp'>
        <h1 className='text-lg font-bold'>AI Fluency Training on All About AI</h1>
        <h1 className='text-sm font-semibold text-base tracking-wide text-slate-400'>Naan Mudhalvan Program</h1>
        <div className='mt-1 gap-1 flex'>
          <svg className='fill-salte-400' xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="currentColor" viewBox="0 0 16 16">
          <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
          </svg>
          <p className='text-xs text-base tracking-wide text-slate-400 '>Completed December 2023</p>
        </div>
        </div>

        <div className='fadeUp w-auto  rounded-xl ring-3 ring-indigo-800 hover:shadow-lg shadow-indigo-600 hover:scale-110 duration-500 transition ease-in-out'>
          <img className='mt-6 rounded-xl' src={AI} alt="" />
        </div>
      </div>
      
      {/* box4 */}
      <div className=' mt-[-20px] p-3'>
        <div className='fadeUp'>
        
        <h1 className='text-lg font-bold'>Python Programming</h1>
        <h1 className='text-sm font-semibold text-base tracking-wide text-slate-400'>Yard Stick Academy</h1>

        <div className='mt-1 gap-1 flex'>
          <svg className='fill-salte-400' xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="currentColor" viewBox="0 0 16 16">
          <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
          </svg>
          <p className='text-xs text-base tracking-wide text-slate-400 '>One Week</p>
        </div>
        </div>

        <div className=' fadeUp rounded-xl ring-3 ring-indigo-800 hover:shadow-lg shadow-indigo-600 hover:scale-110 duration-500 transition ease-in-out'>
          <img className='mt-6 rounded-xl' src={Python} alt="" />
        </div>

      </div>
      
      
    </div>





    

  
    </section>
  )
}

export default Education