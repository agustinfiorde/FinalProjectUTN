const nodemailer = require('nodemailer');

exports.send = async ({ to, subject = "Gracias por registrarte", html }) => {
    try {
        const transporter = nodemailer.createTransport({
            service: process.env.CORREO_SERVICE,
            auth: {
                user: process.env.CORREO_USER,
                pass: process.env.CORREO_PASSWORD,
            }
        });

        const mail = {
            from: "Desde mi",
            to,
            subject,
            html,
        };

        const { messageId } = await transporter.sendMail(mail);

        return messageId;
    } catch (e) {
        console.log(e);
    }
}