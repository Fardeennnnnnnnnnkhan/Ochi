import React from "react";
import { useState } from "react";
import { motion,  useAnimation } from "framer-motion";
function Feature() {
const cards = [useAnimation() , useAnimation()]

  const handlehover = (index)=>{
  cards[index].start({y:'0'})
  }
  const handlehoverEnd = (index)=>{
  cards[index].start({y:'100%'})
  }
  return (
    <div className="w-full min-h-screen bg-[#F1F1F1]  ">
      <div className="w-full p-6">
        <h1 className="text-6xl text-[#212121] font-light p-6">
          Featured Projects
        </h1>
        <div className="tracking-tighter border-t-[1px] mt-6 border-[#212121]"></div>
      </div>

      <div className="w-full cards flex gap-8 p-10 ">
        <motion.div onHoverStart={()=> handlehover(0)} onHoverEnd={()=> handlehoverEnd(0)} className="cardContainier relative w-1/2 h-[75vh]">
          <h1 className="text-7xl font-light text-[#CDEA68] z-[9] overflow-hidden flex top-1/2 absolute left-full tracking-tighter  -translate-x-[50%] -translate-y-[50%] ">
            {"FYDE".split("").map((item, index) => (
              <motion.span initial ={{y:"100%"}} animate={cards[0]} transition ={{ease : [0.22  , 1 , 0.36 , 1] , delay :index*.04}} className="text-[#CDEA68] inline-block ">{item}</motion.span>
            ))}
          </h1>
          <div className=" card object-cover w-full h-full overflow-hidden bg-black rounded-lg">
            <img
              className="w-full h-full bg-cover bg-center"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div  onHoverStart={()=> handlehover(1)} onHoverEnd={()=> handlehoverEnd(1)} className="cardContainier relative  w-1/2 h-[75vh]"
        >
          <h1 className="text-7xl flex overflow-hidden font-light text-[#CDEA68] z-[9] top-1/2 absolute  tracking-tighter  -translate-x-[50%] -translate-y-[50%] ">
            {"VISE".split("").map((item, index) => (
                            <motion.span initial ={{y:"100%"}} animate={cards[1]} transition ={{ease : [0.22  , 1 , 0.36 , 1] , delay :index*.04}} className="text-[#CDEA68] inline-block ">{item}</motion.span>

            ))}
          </h1>
          <div className="card object-cover w-full h-full overflow-hidden bg-black rounded-lg">
            <img
              className="w-full h-full bg-cover bg-center"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Feature;
