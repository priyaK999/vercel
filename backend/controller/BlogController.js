const cloudinary = require('cloudinary').v2;
const uploadImageFromBase64 = require('./imageUpload');
const Blog = require('../model/Blog');

exports.createBlog = async (req, res) => {
  try {
    const { category, name, username, description, image } = req.body;

    if (!category || !name || !username || !description || !image) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    // Assuming you are saving this data to a MongoDB database
    const newBlog = new Blog({
        category,
        name,
        username,
        description,
        image // This should be the Cloudinary URL
    });

    await newBlog.save();

    res.status(200).json({ success: true, message: 'Blog created successfully!' });
} catch (error) {
    console.error('Error:', error); // Log detailed error
    res.status(500).json({ success: false, message: 'An error occurred while creating the blog.' });
}
};

exports.uploadImage = async (req, res) => {
  const  image  = req.file;
  console.log("image", req.file)

  try {
    if (!image) {
      return res.status(400).json({
        success: false,
        message: 'Please provide an image',
      });
    }

    // Upload the image to Cloudinary
    const imageUrl = await uploadImageFromBase64(image);

    res.status(200).json({
      success: true,
      imageUrl,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};

// exports.createBlog = async (req, res) => {
//   const { category, name, username, description,image } = req.body;


//   try {
//     if (!category || !name || !username || !description || !image) {
//       return res.status(400).json({
//         success: false,
//         message: 'Please provide all required fields',
//       });
//     }

//     // Upload the image to Cloudinary
//     // const result = await cloudinary.uploader.upload(image, {
//     //   folder: 'blog_images', // Optional: specify a folder in Cloudinary
//     // });

//     // Create the blog post with the image URL from Cloudinary
//     const savedBlog = await Blog.create({
//       category,
//       name,
//       username,
//       description,
//       image,
//     });

//   return  res.status(200).json({
//       success: true,
//       message: savedBlog,
//     });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error',
//     });
//   }
// };

exports.getBlogs = async (req, res) => {
  try {
    // Fetch the latest two blog posts in ascending order (oldest first)
    const latestTwoBlogs = await Blog.find().sort({ createdAt: 1 }).limit(2);

    // Fetch the rest of the blog posts in descending order (newest first)
    const restOfBlogs = await Blog.find().sort({ createdAt: -1 }).skip(2);

    // Concatenate the two results
    const allBlogs = latestTwoBlogs.concat(restOfBlogs);

    res.status(200).json({
      success: true,
      data: allBlogs
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};



