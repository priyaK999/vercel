const collaborationInvitationTemplate = (name, email, query, phone) => {
    return `
<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h2 style="color: #0056b3;">Collaboration Invitation</h2>

    <p>Dear Sir/Madam,</p>

    <p>We are excited to inform you that <strong>${name}</strong> is interested in collaborating with you on a project. Here are their professional details for your reference:</p>

    <ul style="list-style-type: none; padding: 0;">
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> <a href="mailto:${email}" style="color: #0056b3;">${email}</a></li>
        <li><strong>Message:</strong> ${query}</li>
        <li><strong>Mobile Number:</strong> ${phone}</li>
    </ul>

    <p>${name} is enthusiastic about the opportunity to work with you and looks forward to discussing potential collaborations. Please feel free to reach out to them via the provided contact information.</p>

    <p>Thank you for considering this opportunity.</p>

    <p>Best regards,<br/>
    <strong>CentennialInfotech Team</strong></p>

    
</div>
`;
};

module.exports = { collaborationInvitationTemplate };



