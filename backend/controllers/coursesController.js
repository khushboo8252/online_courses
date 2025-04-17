const Course = require('../models/Courses');

// Get All Courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses', error });
  }
};

// Get Course by ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching course', error });
  }
};

// Create a New Course (POST)
exports.createCourse = async (req, res) => {
  const { title, description, duration, price, instructor, image } = req.body; // ✅ Include image

  // Validation
  if (!title || !description || !duration || !price || !instructor || !image) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newCourse = new Course({
      title,
      description,
      duration,
      price,
      instructor,
      image,
    });

    await newCourse.save();
    res.status(201).json({ message: 'Course created successfully', course: newCourse });
  } catch (error) {
    res.status(500).json({ message: 'Error creating course', error });
  }
};

