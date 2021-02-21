const nodemailer = require('nodemailer');

const send = async (to, token, id, typeOfEmail) => {
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

        const mail = createMail(typeOfEmail, token, id, to);

        const { messageId } = await transporter.sendMail(mail);
        return messageId;
    } catch (e) {
        throw e;
    }
}

const createMail = (typeOfEmail, token, id, to) => {

    switch (typeOfEmail) {
        case "register":
            return {
                from: "PerroMania",
                to,
                subject: "Bienvenido",
                html: `<a href:"http://127.0.0.1:3000/api/user/confirm?token=${token}&id=${id}" target="_blank">
                        http://localhost:3000/api/user/confirm?token=${token}&id=${id}
                        </a>`,
            };
        case "recover":
            return {
                from: "PerroMania",
                to,
                subject: "Recuperar Contraseña",
                html: `<a href:"http://127.0.0.1:3000/user/confirm?token=${token}&id=${id}" target="_blank">
                            http://localhost:3000/user/confirm?token=${token}&id=${id}
                            </a>`,
            };
        default:
            return null;
    }
};

module.exports = { send };