import React from 'react';

import Divider from './Divider';
import config from '../config/index.json';

const Features = () => {
  const { features } = config;
  const { title, subtitle, description, items: featuresList } = features;

  return (
    <div className={`py-12 bg-background font-custom`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container lg:text-center">
          <h1
            className={` text-primary font-semibold leading-tight 
            text-[7vh] `}
          >
            {title.split(' ').map((word, index) => (
              <span
                key={index}
                className={!(index % 2) ? 'text-primary' : 'text-border'}
              >
                {word}{' '}
              </span>
            ))}
          </h1>
          <Divider />

          <p className="mt-2 leading-2 font-extrabold tracking-tight text-gray-100 text-[5vh]">
            {subtitle}
          </p>
          <p className="mt-4  text-xl text-gray-300 lg:mx-auto font-[3vh] md:pb-10">
            {description}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div
                    className={`absolute flex items-center justify-center h-6 w-6 rounded-md bg-background text-tertiary border-primary border-4`}
                  >
                    {/* <img
                      className={`inline-block h-6 w-6 rounded-full`}
                      src={feature.icon}
                      alt={feature.name}
                    /> */}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-primary">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-300">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
