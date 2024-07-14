import React from 'react'

function About() {
  return (
    <div className='w-full py-20 bg-[#CDEA68] p-20 rounded-3xl '>
      <h1 className='text-[3.2vw] font-light   leading-[3.5vw]   '>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>

      <div className='flex gap-5 p-10 w-full mt-20 border-t-[1px] border-[#131706] '>
        <div className="w-1/2">
        <h1 className='text-[4vw]   font-light'>Our approach: </h1>      
        <button className="px-8 mt-6 py-5 flex items-center justify-center gap-6 rounded-full bg-black text-white " >Read More
        <div className='w-2  h-2 rounded-full bg-white' ></div>
        </button>
        </div>

        <div className="w-1/2 max-h-[70vh] bg-yellow-500 rounded-3xl overflow-hidden object-cover"><img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" /></div>
      </div>
    </div>
  )
}

export default About
