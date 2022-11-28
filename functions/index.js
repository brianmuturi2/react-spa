const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true})
const config = functions.config();
admin.initializeApp();

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: config.user.email,
        pass: config.user.password,
    },
});

const mailOptions = {
    from: 'Brian Muturi',
    to: 'brianmuturi2@gmail.com',
    subject: 'Material UI',
    text: 'Test text',
};

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
exports.sendMail = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                response.send(error);
            } else {
                response.send('Message sent successfully');
            }
        });
    })
});
