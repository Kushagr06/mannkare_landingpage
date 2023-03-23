import React from 'react';

// import config from '../config/index.json';

const MainHeroImage = () => {
  // const { mainHero } = config;

  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lgleft-30 lg:w-1/2  ">
     <iframe title="demo" style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} className=" sm:w-[470px] h-[580px] w-[90vw] md:translate-y-24 md:translate-x-40 sm:scale-105 scale-100 md:scale-110 " src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F4WYZB0WOviBIFyt4TbFFTg%2FMannkare%3Fpage-id%3D0%253A1%26node-id%3D1211-2566%26viewport%3D1071%252C2168%252C0.34%26scaling%3Dscale-down%26starting-point-node-id%3D988%253A1097" allowFullScreen>

     </iframe>
    </div>
  );
};

export default MainHeroImage;
