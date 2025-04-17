import React from 'react';
import { FaChalkboardTeacher, FaClipboardList, FaProjectDiagram, FaUserTie, FaUserCheck } from 'react-icons/fa';

const steps = [
  {
    id: 1,
    title: 'Hands on Technical Training',
    icon: <FaChalkboardTeacher size={28} />,
  },
  {
    id: 2,
    title: 'Periodic Assessments',
    icon: <FaClipboardList size={28} />,
  },
  {
    id: 3,
    title: 'Real world project implementations',
    icon: <FaProjectDiagram size={28} />,
  },
  {
    id: 4,
    title: 'Professionals Soft skills Training',
    icon: <FaUserTie size={28} />,
  },
  {
    id: 5,
    title: 'Job relevant assessment and interview support',
    icon: <FaUserCheck size={28} />,
  },
];

const Works = () => {
  return (
    <section className="bg-blue-900 text-white py-16 px-4 sm:px-10 rounded-t-[2rem] relative">
      {/* Title */}
      <div className="flex justify-center mb-10">
        <div className="bg-blue-600 text-white px-6 py-2 text-lg font-bold rounded-md shadow-md">
          How It Works
        </div>
      </div>

      {/* Steps */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Start: Job Seeker */}
        <div className="bg-white text-blue-900 rounded-xl p-4 w-[140px] text-center shadow-md">
          <p className="font-bold">Job Seeker</p>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/007/081/892/small/people-stand-in-line-queuing-and-waiting-for-an-interview-with-job-seekers-corporate-recruitment-or-job-vacancy-concept-flat-style-illustration-vector.jpg" alt="Job Seeker" className="w-full mt-2" />
        </div>

        {/* Steps Flow */}
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center gap-2 max-w-[140px]">
              <div className="text-white bg-blue-700 p-4 rounded-full shadow">
                {step.icon}
              </div>
              <p className="text-sm text-white">{step.title}</p>
              <span className="text-xs font-bold mt-1 text-blue-300">0{step.id}</span>
            </div>
          ))}
        </div>

        {/* End: Employed */}
        <div className="bg-white text-blue-900 rounded-xl p-4 w-[140px] text-center shadow-md">
          <p className="font-bold">Employed</p>
          <img src="https://cdn.hifives.in/wp-content/uploads/2020/05/8-Common-Traits-of-Successful-Employees-in-any-Organization.png" alt="Employed" className="w-full mt-2" />
        </div>
      </div>

      {/* Dotted Decoration (Optional) */}
      <div className="absolute bottom-10 left-6 hidden md:block">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(18)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
