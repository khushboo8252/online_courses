const express = require('express');
const { getBlogs, createBlog } = require('../controllers/blogController');
const router = express.Router();

// Get All Blogs
router.get('/', getBlogs);

// Create Blog
router.post('/', createBlog);

module.exports = router;
