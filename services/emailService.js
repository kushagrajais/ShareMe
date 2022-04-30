const nodemailer = require("nodemailer");
module.exports = async ({ from, to, subject, text, html}) => {
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.MAIL_USER, // generated user
            pass: process.env.MAIL_PASS, // generated password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `ShareMe <${from}>`, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        html: html, // html body
    });
}
