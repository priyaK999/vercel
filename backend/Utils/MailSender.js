const nodemailer = require("nodemailer");

const nodemamailSender = async (email, title, body) => {
  console.log("Sending email to:", email);
  console.log("Subject:", title);
  console.log("Body:", body);
  
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Gmail SMTP server
      port: 465, // For SSL
      secure: true, // Use SSL
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: `Centennial <${process.env.MAIL_USER}>`, // Ensure this is a valid email address
      to: email,
      subject: title,
      html: body,
    });

    console.log("Mail sent:", info);
    return info;

  } catch (err) {
    console.error("Error sending mail:", err);
    throw err; // Optional: re-throw the error if you want to handle it further up the call stack
  }
};

module.exports = nodemamailSender;
