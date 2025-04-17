import React from 'react';
import Mission from '../components/Mission';

const About = () => {
  return (
    <div className="space-y-20">
      {/* Section 1: OUR STORY */}
      

      {/* Section 2: ABOUT US */}
      <div className="bg-blue-900 text-white px-4 py-10 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Left: Text */}
            <div className="lg:w-1/2 text-left">
              <h2 className="text-2xl sm:text-3xl text-blue-300 font-bold mb-2 tracking-wide">ABOUT US</h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
                Learning Made Simple for Everyone
              </h3>
              <p className="text-base sm:text-lg text-gray-200 mb-6">
                Transforming tech education for the next generation of students & employees.
              </p>
              <button className="bg-purple-700 hover:bg-purple-600 transition duration-300 text-white font-medium py-3 px-6 rounded-lg text-base sm:text-lg">
                Enroll Now
              </button>
            </div>

            {/* Right: Images */}
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              <img
                src="https://thumbs.dreamstime.com/b/business-woman-working-laptop-computer-office-63543303.jpg"
                alt="Person working"
                className="rounded-lg w-full h-48 object-cover shadow-md"
              />
              <img
                src="https://media.istockphoto.com/id/1469940271/photo/students-learning-from-teacher.jpg?s=612x612&w=0&k=20&c=p3w4LVV5CfEp-HORafhNbwC36Z83-7SgzTBMsDWo_jE="
                alt="Group learning"
                className="rounded-lg w-full h-48 object-cover shadow-md"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6P6KMTW3Np1E7mGzgtTUawGPBq2aKCRyFh5SWolszCDe0ppmjot81PTUk-je_NgAbbwg&usqp=CAU"
                alt="Tech"
                className="rounded-lg w-full h-48 object-cover shadow-md col-span-1 sm:col-span-2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
  {/* Image Left Side */}
  <div className="flex justify-center md:w-1/2 mb-10 md:mb-0">
    <img 
      src="https://images.unsplash.com/photo-1521791136064-7986c2920216?fit=crop&w=600&q=80" 
      alt="About Nlite" 
      className="rounded-full w-56 h-56 object-cover shadow-lg"
    />
  </div>

  {/* Text Right Side */}
  <div className="flex flex-col md:w-1/2 space-y-6 md:pl-10 text-center md:text-left">
    <h2 className="text-2xl font-bold text-blue-800">OUR STORY</h2>
    <h1 className="text-4xl font-extrabold text-blue-600 leading-snug">
      Innovating new ways to train students
    </h1>
    <p className="text-gray-700">
      We see no limits to what we can achieve by harnessing our individual and collective strengths. 
      We are changing the world with our ideas, insights, and unique perspectives.
    </p>
    <p className="text-gray-700">
      Our innovation is led by data, curiosity, and the occasional happy accident. 
      We create an uplifting environment where we learn from our failures and celebrate our success.
    </p>
    <button className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 transition text-base sm:text-lg w-max">
      Enroll Now
    </button>
  </div>
</div>

      <Mission/>
    </div>
  );
};

export default About;
