import React from 'react';
import ScrollDown from '../assets/scrolldown.png';

const Hero = () => {
  return (
    <div id="home" className="bgnavy">
      <div className="heroleft">
        <h1 className="text-[2rem] md:text-[4rem] font-black text-gray-200">
          WEBDEVELOPER
        </h1>
        <p className="text-1xl md:text-2xl font-semibold mt-6 text-gray-200">
          {' '}
          Frontend / Backend / React / Node
        </p>
      </div>
      <div className="heroright">
        <button className="herobtn">Learn More</button>
        <img
          src={ScrollDown}
          className="animate-bounce h-[100px] w-[100px] mb-2"
        ></img>
      </div>
    </div>
  );
};

export default Hero;
