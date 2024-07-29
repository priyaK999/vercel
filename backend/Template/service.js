const serviceTemplate = (fullName, email, phone) => {
  return `
    <html>
    <body style="font-family: Arial, sans-serif; line-height: 1.6;">
    <div style="text-align: center;">
             <img src="https://res.cloudinary.com/dvfmw4c9f/image/upload/v1722234617/logo_c_nv0icd.png" style="max-width: 150px; margin-bottom: 10px;" />
        </div>
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #333;">Thank You, ${fullName}!</h1>
        <p style="color: #555;">We have received your contact information. Here are the details you provided:</p>
        <ul style="color: #555;">
          <li><strong>Full Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
        </ul>
        <p style="color: #555;">Our team will get back to you soon. If you have any further questions or need immediate assistance, please don't hesitate to contact us.</p>
        <div style="margin-top: 20px;">
          <a href="#" style="display: inline-block; background-color: #007BFF; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Visit Our Website</a>
        </div>
      </div>
    </body>
    </html>
  `;
};

const adminServiceTemplate = (fullName, email, phone) => {
  return `
    <html>
    <body style="font-family: Arial, sans-serif; line-height: 1.6;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #333;">New Contact Request</h1>
        <p style="color: #555;">A new contact request has been submitted. Here are the details:</p>
        <ul style="color: #555;">
          <li><strong>Full Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
        </ul>
        <p style="color: #555;">Please follow up with the individual as soon as possible.</p>
        <div style="margin-top: 20px;">
          <a href="mailto:${email}" style="display: inline-block; background-color: #007BFF; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Reply to ${fullName}</a>
        </div>
      </div>
    </body>
    </html>
  `;
};

module.exports = { serviceTemplate, adminServiceTemplate };
