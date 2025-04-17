import React from 'react';


const RecognizedBy = () => {
  return (
    <section className="relative bg-white text-center py-16 px-4">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
        Recognized <span className="text-blue-600 font-bold">by</span>
      </h2>

      {/* Dotted pattern (top left) */}
      <div className="absolute top-6 left-6 hidden md:grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-blue-600 rounded-full opacity-70" />
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQ159FLDVua4-5xU0-jlxbU7eAcTAis6Rr-Re_og403xCFzOZ_zFOOW-1C3utJnwLfOU&usqp=CAU"
          alt="Ministry of Corporate Affairs"
          className="h-24 object-contain"
        />

        <div className="text-left max-w-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-1">
            Ministry of Corporate Affairs
          </h3>
          <p className="text-sm text-gray-600">GOVERNMENT OF INDIA</p>
          <p className="mt-2 text-xs sm:text-sm text-gray-700 leading-snug">
            Empowering Business, Protecting Investors
          </p>
          <div className="mt-1 flex flex-wrap gap-x-2 text-xs font-semibold text-blue-600">
            <span className="text-red-500">REGULATOR</span>
            <span className="text-green-500">INTEGRATOR</span>
            <span className="text-blue-500">FACILITATOR</span>
            <span className="text-purple-500">EDUCATOR</span>
          </div>
        </div>
      </div>

      {/* Dotted pattern (bottom right) */}
      <div className="absolute bottom-6 right-6 hidden md:grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-blue-600 rounded-full opacity-70" />
        ))}
      </div>
    </section>
  );
};

export default RecognizedBy;
