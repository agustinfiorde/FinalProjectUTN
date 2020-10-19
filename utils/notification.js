const nodemailer = require('nodemailer');

const send = async (to, token, id, emailType) => {
    try {
        const transporter = nodemailer.createTransport({
            service: process.env.CORREO_SERVICE,
            auth: {
                user: process.env.CORREO_USER,
                pass: process.env.CORREO_PASSWORD,
            }, tls: {
                rejectUnauthorized: false,
            },
        });

        switch (emailType) {
            case "register":
                const mail = {
                    from: "PerroMania",
                    to,
                    subject: mails.register.subject,
                    html: mails.register.html,
                };
                break;
            case "recover":
                const mail = {
                    from: "PerroMania",
                    to,
                    subject: mails.recover.subject,
                    html: mails.recover.html,
                };
                break;
            default:
                break;
        }


        const { messageId } = await transporter.sendMail(mail);
        return messageId;
    } catch (e) {
        console.log(e);
    }
}

const mails = {
    register: {
        subject: "Bienvenido a Perromania",
        html: `<a href:"http://127.0.0.1:3000/user/confirm?token=${token}&id=${id}" target="_blank">
        http://localhost:3000/user/confirm?token=${token}&id=${id}
        </a>`,
    },
    recoverPassword: {
        subject: "Recuperacion de clave - Perromania",
        html: `<a href:"http://127.0.0.1:3000/user/confirm?token=${token}&id=${id}" target="_blank">
        http://localhost:3000/user/confirm?token=${token}&id=${id}
        </a>`,
    },
    notification: {}
}

module.exports = { send };