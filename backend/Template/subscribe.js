const crypto = require('crypto');

// Use environment variables for key and IV
const algorithm = 'aes-256-cbc';
const key = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');
const iv = Buffer.from(process.env.ENCRYPTION_IV, 'hex');

// Function to generate an unsubscribe token
const generateUnsubscribeToken = (email) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let token = cipher.update(email, 'utf8', 'hex');
  token += cipher.final('hex');
  return token;
};

// Function to decode the unsubscribe token
const decodeUnsubscribeToken = (token) => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let email = decipher.update(token, 'hex', 'utf8');
  email += decipher.final('utf8');
  return email;
};

// Function to generate the unsubscribe URL
const unsubscribeLink = (email) => {
  const token = generateUnsubscribeToken(email);
  return `http://localhost:3001/unsubscribe?token=${token}`;
};

// Email template for subscribers
const subscribeTemplate = (email) => {
  const link = unsubscribeLink(email);
  return `
    <html>
    <body style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #333; margin: 0; padding: 0; background-color: #f5f5f5;">
    <div style="text-align: center;">
             <img src="https://res.cloudinary.com/dvfmw4c9f/image/upload/v1722234617/logo_c_nv0icd.png" style="max-width: 150px; margin-bottom: 10px;" />
        </div>
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border: 1px solid #ddd; border-radius: 8px;">
        <h1 style="color: #007BFF; margin-top: 0;">Welcome to Our Newsletter!</h1>
        <p>Hi,</p>
        <p>Thank you for subscribing to our newsletter with the email address: <strong>${email}</strong>. We're excited to have you on board!</p>
        <p>You'll receive regular updates on our latest content, news, and special offers. Stay tuned!</p>
        <p>If you have any questions or need further assistance, feel free to contact us.</p>
        <p>Best regards,</p>
        <p>The Team</p>
        <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;">
        <footer style="font-size: 0.9em; color: #777;">
          <p>You received this email because you subscribed to our newsletter.</p>
          <p>If you wish to unsubscribe, please click <a href="${link}" style="color: #007BFF; text-decoration: none;">here</a>.</p>
        </footer>
      </div>
    </body>
    </html>
  `;
};

// Email template for admin
const adminSubscribeTemplate = (email) => {
  return `
    <html>
    <body style="font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f5f5f5;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border: 1px solid #ddd; border-radius: 8px;">
        <h1 style="color: #FF5722; margin-top: 0;">New Newsletter Subscription</h1>
        <p style="color: #555;">A new user has subscribed to the newsletter. Here are the details:</p>
        <ul style="list-style: none; padding: 0; color: #555;">
          <li style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</li>
        </ul>
        <p style="color: #555;">Please ensure they receive our welcome email and are added to the subscriber list.</p>
        <div style="margin-top: 20px;">
          <a href="mailto:${email}" style="display: inline-block; background-color: #007BFF; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Send Welcome Email</a>
        </div>
      </div>
    </body>
    </html>
  `;
};

module.exports = { subscribeTemplate, adminSubscribeTemplate };
