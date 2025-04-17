import React from 'react';

const Mission = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 bg-gray-100 px-6 py-12">
      
      {/* Mission Card */}
      <div className="bg-gray-400 shadow-lg rounded-lg p-6 w-full md:w-96 flex flex-col items-center text-center">
        <div className="flex justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <line x1="12" y1="6" x2="12" y2="15" stroke="currentColor" strokeWidth="2" />
            <line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-blue-600 mb-2">MISSION</h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          Provide practice-based skill trainings using unique teaching methodologies & platforms to enhance industry-required skills for professionals, non-tech individuals, college students, and startups through new skilling, upskilling, and reskilling.
        </p>
      </div>

      {/* Vision Card */}
      <div className="bg-gray-400 shadow-lg rounded-lg p-6 w-full md:w-96 flex flex-col items-center text-center">
        <div className="flex justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v9l4 3" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-blue-600 mb-2">VISION</h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          To transform learners into industry-ready professionals by imparting IT skills in a corporate-style environment using a holistic approach.
        </p>
      </div>
    </div>
  );
};

export default Mission;
