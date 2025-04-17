import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 px-4 sm:px-10 py-14">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Left: Headline */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-blue-900">
            Learn with effective <br />
            <span className="text-blue-800">classroom based training</span><br />
            <span className="text-blue-600">for real-world success</span>
          </h1>
        </div>

        {/* Right: Course Cards */}
        <div className="w-full lg:w-[450px] space-y-6">
          {loading ? (
            <p className="text-gray-500">Loading courses...</p>
          ) : courses.length === 0 ? (
            <p className="text-red-500">No courses found.</p>
          ) : (
            courses.map(course => (
              <div
                key={course._id}
                className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 text-left relative"
              >
                {/* Course Info */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-blue-800">{course.instructor}</h2>
                  <p className="text-sm text-gray-500 -mt-1">Instructor</p>
                </div>

                <p className="text-xl font-medium text-gray-800 mb-1">{course.title}</p>
                <p className="text-sm text-gray-600 mb-2">{course.description}</p>
                <p className="text-md font-semibold text-blue-600 mb-2">Duration: {course.duration}</p>
                <p className="text-md font-semibold text-green-600 mb-4">Price: ₹{course.price}</p>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm">
                  Enroll Now
                </button>

                {course.image && (
                  <img
                    src={course.image}
                    alt={course.title}
                    className="mt-4 w-full h-48 object-cover rounded-md"
                  />
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Course;
