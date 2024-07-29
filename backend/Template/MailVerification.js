// src/Template/MailVerification.js


const contactUsTemplate = (name, email, query, phone) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px; background-color: #f9f9f9;">
        <div style="text-align: center;">
             <img src="https://res.cloudinary.com/dvfmw4c9f/image/upload/v1722234617/logo_c_nv0icd.png" style="max-width: 150px; margin-bottom: 10px;" />
        </div>
        <h2 style="color: white; text-align: center; margin-bottom: 20px;">Contact Us Confirmation</h2>
        
        <p style="font-size: 16px;">Dear <strong>${name}</strong>,</p>

        <p style="font-size: 16px;">Thank you for contacting us. We have received your message and will respond to you as soon as possible. Below are the details you provided:</p>
        
        <div style="margin: 20px 0;">
            <p style="font-size: 16px; margin-bottom: 10px;"><img src="https://img.icons8.com/ios-filled/20/000000/user.png" style="vertical-align: middle;" /> <strong>Name:</strong> ${name}</p>
            <p style="font-size: 16px; margin-bottom: 10px;"><img src="https://img.icons8.com/ios-filled/20/000000/email.png" style="vertical-align: middle;" /> <strong>Email:</strong> ${email}</p>
            <p style="font-size: 16px; margin-bottom: 10px;"><img src="https://img.icons8.com/ios-filled/20/000000/phone.png" style="vertical-align: middle;" /> <strong>Phone Number:</strong> ${phone}</p>
            <p style="font-size: 16px; margin-bottom: 10px;"><img src="https://img.icons8.com/ios-filled/20/000000/feedback.png" style="vertical-align: middle;" /> <strong>Message:</strong> ${query}</p>
        </div>
        
        <p style="font-size: 16px;">Best regards,<br/>Centennial InfoTech</p>
    </div>
  `;
};

module.exports = { contactUsTemplate };
