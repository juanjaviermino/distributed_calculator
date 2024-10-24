import nodemailer from 'nodemailer';

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
  subject: 'Deploy exitoso',
  text: "El workflow 'workflow_build_and_deploy' culminó con éxito.",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
    process.exit(1);
  } else {
    console.log('Correo enviado: ' + info.response);
  }
});
