import React from 'react';

function Hero() {
  return (
    <div id="home" className="bghero">
      <div className="herocontainer">
        <h1 className="text-4xl md:text-[6vw] font-black text-gray-100">
          WEBDEVELOPER
        </h1>
        <p className="text-1xl text-center font-black md:text-3xl mt-9 text-gray-100">
          {' '}
          Tackling Problems With Code
        </p>
        <p className="text-2xl text-center md:text-[3vw] font-light mt-4 text-gray-100">
          {' '}
          Frontend / Backend / React.js / Node.js
        </p>

        <button className="herobtn">Learn More</button>
      </div>
    </div>
  );
}

export default Hero;
