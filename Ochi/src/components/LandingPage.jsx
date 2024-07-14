import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed = '-0.3'  className="landing  w-full mt-24 ">
      {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index) => (
        <div className="masker overflow-hidden">
          <div className="w-fit flex px-10  ">
            {index === 1 && (
              <motion.div initial = {{width:0}} animate = {{width : '8vw'}} transition={{ease : [0.76 , 0, 0.24  ,1] , duration : 1}} className="bg-green-600 relative object-cover overflow-hidden rounded-lg top-[1.9vw]   w-[8vw] h- [5.1vw]"> <img className="w-full h-full" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" /> </motion.div>
            )}
            <h1 className="pt-[2vw] text-[7vw] font-bold -tracking-[.1em] leading-[.70] hover:text-green-600 ">
              {item}
            </h1>
          </div>
        </div>
      ))}
      <div className=" mt-20  border-t-[1px] border-slate-950 flex justify-between align-center py-8 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <a
            className="text-black font-light tracking-tight leading-none"
            href=""
          >
            {item}
          </a>
        ))}
        <div className="start flex justify-center align-center  gap-3">
          <div className=" border-zinc-600 border-[2px]  p-2 rounded-full uppercase font-light font-xsm">
            Start The Project
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
