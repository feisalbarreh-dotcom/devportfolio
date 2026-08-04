import React from 'react';

const Hero = ({ name, title, callToAction }) => {
  return (
    <div className="hero">
      <h1>{title}</h1>
      <h2>{name}</h2>
      <button onClick={callToAction}>Click Here</button>
    </div>
  );
};

export default Hero;