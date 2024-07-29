const mongoose = require('mongoose');

// Define the schema for a blog post
const blogSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true, // Makes this field required
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, // This could be a URL or base64 encoded image string
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Sets a default value to the current date
  },
});

// Create a model using the schema
const Blog = mongoose.model('Blog', blogSchema);

// Export the model
module.exports = Blog;
