const nodemailer = require('nodemailer');

const user = process.env.GMAIL_USER;
const pass = process.env.GMAIL_APP_PASSWORD;

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: user,
    pass: pass,
  },
});

let mailOptions = {
  from: user,
  to: 'jminoarboleda@gmail.com',
  subject: 'Workflow Iniciado',
  text: "El workflow 'workflow_build_and_deploy' ha comenzado.",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
    process.exit(1);
  } else {
    console.log('Correo enviado: ' + info.response);
  }
});
