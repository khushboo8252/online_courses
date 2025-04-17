const express = require('express');
const { getCourses, getCourseById, createCourse } = require('../controllers/coursesController');
const router = express.Router();

// Get All Courses
router.get('/', getCourses);

// Get Course by ID
router.get('/:id', getCourseById);

// Create a New Course
router.post('/', createCourse);

module.exports = router;
