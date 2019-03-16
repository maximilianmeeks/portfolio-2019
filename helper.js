require("dotenv").config({ path: __dirname + "/.env" });
const nodemailer = require("nodemailer");
/* const MailError = require("./mailerror"); */

module.exports = sendMail = html => {
  return new Promise(async (resolve, reject) => {
    //TODO use dotenv
    const MAILHOST = process.env.MAILHOST;
    const MAILUSER = process.env.MAILUSER;
    const MAILPW = process.env.MAILPW;
    const MAILPORT = process.env.MAILPORT;
    const MAILRECEIVER = process.env.MAILRECEIVER;
    try {
      let transporter = nodemailer.createTransport({
        host: MAILHOST,
        port: MAILPORT,
        auth: {
          user: MAILUSER,
          pass: MAILPW
        }
      });

      let mailOptions = {
        from: "Dein liebes Portfolio",
        to: MAILRECEIVER,
        subject: `Neue Nachricht über Portfolio`,
        text: html,
        html: html
      };
      const info = await transporter.sendMail(mailOptions);
      resolve(info);
      console.log("Message sent: %s", info.messageId);
    } catch (error) {
      throw new Error(error)
    }
  });
};