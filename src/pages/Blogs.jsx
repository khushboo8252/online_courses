import React, { useEffect, useState } from 'react';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://online-backend-yc9d.onrender.com/api/blogs');
        const data = await response.json();
        setBlogs(data);
        setFilteredBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredBlogs(filtered);
  }, [search, blogs]);

  return (
    <div className="bg-[#f0e6ff] min-h-screen px-4 py-10 sm:px-6 lg:px-20">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">Our Blog</h2>
        <h3 className="text-lg text-gray-600 mb-2">Resources and insights</h3>
        <p className="text-gray-600">The latest industry news, interviews, technologies, and resources.</p>
      </div>

      {/* Search Bar */}
      <div className="max-w-lg mx-auto mb-10">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#007bff]"
        />
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map((post, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition p-5">
            <img
              src={post.image}
              alt={post.title}
              className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <h4 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h4>
            <p className="text-gray-600">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
