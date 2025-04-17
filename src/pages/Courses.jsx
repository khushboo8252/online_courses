import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://online-backend-yc9d.onrender.com/api/courses');
        setCourses(response.data);
      } catch (error) {
        setError('Error fetching courses. Please try again later.');
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleEnroll = (title) => {
    alert(`Enrolled successfully in "${title}" 🎉`);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">Our Popular Courses</h1>

        {loading && !error ? (
          <div className="text-center text-gray-600 text-lg">Loading courses...</div>
        ) : error ? (
          <div className="text-center text-red-600 text-lg">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white border rounded-2xl overflow-hidden shadow hover:shadow-lg transition duration-300"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 space-y-3">
                  <h2 className="text-xl font-semibold text-gray-800">{course.title}</h2>
                  <p className="text-gray-600 text-sm">{course.description}</p>
                  <div className="text-sm text-gray-500">Instructor: <span className="text-gray-700 font-medium">{course.instructor}</span></div>
                  <div className="text-sm text-gray-500">Duration: {course.duration}</div>
                  <div className="text-lg font-bold text-blue-600">₹{course.price}</div>
                  <button
                    onClick={() => handleEnroll(course.title)}
                    className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
