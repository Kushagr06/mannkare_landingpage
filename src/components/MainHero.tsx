import React, { useState } from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;

  const [text, setText] = useState('');

  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{mainHero.title}</span>{' '}
          <span
            className={`block text-primary xl:inline font-custom tracking-wider`}
          >
            {mainHero.subtitle}
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {mainHero.description}
        </p>
        <p className="mt-3 text-base text-secondary sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-custom leading-5 tracking-widest">
          {text}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <div
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary  hover:text-border md:py-4 md:text-lg md:px-10 cursor-pointer`}
              onClick={() => setText('Coming Soon')}
            >
              {mainHero.primaryAction.text}
            </div>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <div
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-background bg-border hover:text-primary md:py-4 md:text-lg md:px-10 cursor-pointer`}
              onClick={() => setText('Coming Soon')}
            >
              {mainHero.secondaryAction.text}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
