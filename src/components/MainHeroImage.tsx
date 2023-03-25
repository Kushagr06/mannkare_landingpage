import React from 'react';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;

  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lgleft-30 lg:w-1/2  ">
   <img
   className='md:scale-[.70] md:mx-12 md:-my-16 scale-[.65] mx-[w/2] -my-10' 
   src={mainHero.img} 
   alt="mann_kare" />
    </div>
  );
};

export default MainHeroImage;
