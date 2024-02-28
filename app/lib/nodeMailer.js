import nodemailer from "nodemailer";

export const welcomeMail = async function (userName, email) {
  console.log(userName, email, "Function called");
  try {
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "registrations@genfinityglobal.com",
        pass: "blcxkxzfedvehyya",
      },
    });
    const mailOption = {
      from: "registrations@genfinityglobal.com",
      to: email,
      subject: "Welcome to DITS",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to DITS</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            .logo {
              text-align: center;
            }
            .logo img {
              width: 150px; 
              height: 150px; 
              margin-bottom: 20px;
              background-color: white; 
              border-radius: 50%; 
            }
            img-holder{
              width: 150px; 
              height: 150px; 
              margin-bottom: 20px;
              background-color: white; 
              border-radius: 50%; 
            }
            h1 {
              text-align: center;
              color: #333333;
            }
            p {
              color: #666666;
            }
            .signature {
              margin-top: 30px;
              text-align: right;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo">
              <img class="img-holder" src="https://omandits.com/assets/images/logo/gg_logo.jpg" alt="Company Logo">
            </div>
            <h1>Warm Welcome to Our Esteemed Delegates</h1>
            <p>Dear ${userName},</p>
            <p>We are thrilled to welcome you to DITS (Digital Innovation and Transformation Summit). Your presence and participation are greatly appreciated.</p>
            <p>Over the next two days, we hope to provide a platform for fruitful discussions, insightful sessions, and successful collaborations. We believe that your expertise and knowledge will significantly contribute to the richness of the event.</p>
            <p>We wish you a successful and fulfilling experience. May these two days be filled with learning, growth, and meaningful connections.</p>
            <p>Thank you for being a part of our event. Enjoy!</p>
            <div class="signature">
              <p>Best Regards,</p>
              <p>Team Genfinity Global</p>
              <p>Feel free to connect with us</p>
              <a href="#">info@genfinityglobal.com</a>
            </div>
          </div>
        </body>
        </html>
        `,
    };
    const info = await transport.sendMail(mailOption);
    console.log("Mail has been sent:", info.response);
  } catch (error) {
    console.log("Error sending email:", error.message);
  }
};
