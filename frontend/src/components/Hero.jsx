import React from 'react';


const Hero = () => {
  return (
    <section className="bg-blue-900 text-white px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left Text Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug">
            Empower Your Professional Journey <br className="hidden sm:block" />
            With Industry-Ready Skills
          </h1>
          <ul className="space-y-4 text-base sm:text-lg leading-relaxed">
            <li>✅ Build Real-world projects with in-person collaboration</li>
            <li>✅ Individual tailored learning approach</li>
            <li>✅ Mentored by industry experts</li>
            <li>✅ Get intensive placement assistance</li>
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/05/online-learning.jpeg.jpg"
            alt="Hero Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
