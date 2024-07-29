// imageUpload.js
const cloudinary = require('../config/cloudinaryConfig'); // Adjust path as needed

/**
 * Upload an image to Cloudinary from base64 data
 * @param {string} base64Image - The image data as a base64 encoded string
 * @param {string} folder - Optional: the folder in Cloudinary where the image will be stored
 * @returns {Promise<string>} - The URL of the uploaded image
 */
const uploadImageFromBase64 = async (base64Image, folder = 'default_folder') => {
  try {
    // Upload the image to Cloudinary
    const result = await cloudinary.uploader.upload(`data:image/jpeg;base64,${base64Image}`, {
      folder,
    });

    return result.secure_url;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw new Error('Error uploading image');
  }
};

module.exports = uploadImageFromBase64;
