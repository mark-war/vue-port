const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const multer = require('multer');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3000;

// Use bodyParser for JSON and URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Initialize multer for handling multipart/form-data
const upload = multer();

// Route handler for sending emails
app.post('/send-email', upload.none(), async (req, res) => {
    try {
        // Extract email data from the request body
        const { name, email, subject, message } = req.body;

        // Create a transporter object using nodemailer with SMTP authentication
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.APP_UN, 
                pass: process.env.APP_PW
            }
        });

        // Email message configuration
        const mailOptions = {
            from: email,
            to: process.env.APP_UN, // Replace with the recipient's email address
            subject: subject,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            replyTo: email
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).send('Error sending email');
            } else {
                console.log('Email sent:', info.response);
                res.status(200).send('Email sent successfully');
            }
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
