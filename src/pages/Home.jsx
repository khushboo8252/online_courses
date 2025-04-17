import React from 'react';
import Hero from '../components/Hero';
import Course from '../components/Course';
import Works from '../components/Works';
import RecognizedBy from '../components/Recognized';

const Home = () => {
  return (
    <div>
      <Hero />
      <Course />
      <Works />
      <RecognizedBy />
    </div>
  );
};

export default Home;
