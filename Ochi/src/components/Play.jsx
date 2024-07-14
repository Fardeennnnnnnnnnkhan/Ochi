import React from "react";
import { useEffect, useState } from "react";
function Play() {
  const [rotate, setrotate] = useState();
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      let y = e.clientY;

      let deltaX = x - window.innerWidth / 2;
      let deltaY = y - window.innerHeight / 2;

      let angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI);
      setrotate(angle-180);
    });
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden ">
      <div data-scroll data-scroll-speed='-0.8' className="w-full flex justify-center items-center  relative h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] ">
        <div className="absolute flex items-center justify-center gap-12">
          <div className="w-[15vw]  flex items-center justify-center h-[15vw] rounded-full bg-white">
            <div className="w-2/3 relative overflow-hidden  h-2/3 bg-black rounded-full">
              <div
                style={{
                  transform: `translate(-50% , -50% )  rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10  bg-black"
              >
                
                <div className="w-5  h-5 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw]  flex items-center justify-center h-[15vw] rounded-full bg-white">
            <div className="w-2/3   text-white overflow-hidden relative h-2/3 bg-black rounded-full">
            
              <div
                style={{
                  transform: `translate(-50% , -50% )  rotate(${rotate}deg)`,
                }}
              
                className="line absolute w-full h-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  bg-black"
              > 
                <div className="w-5 h-5 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Play;
