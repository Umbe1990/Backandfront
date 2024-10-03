import nodemailer from 'nodemailer'
import 'dotenv/config';


var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",  // da fare con punto env
    port: 2525,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    }
  });
   export default transport