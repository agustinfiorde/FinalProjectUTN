const mail = require("./../services/notification.service");


exports.getProfile = async (req, res) => {

    console.log("EYYYYYY entre al perfil");
    console.log("El id del usuario autenticado es ", req.id);

    const messageId = await mail.send({
        to: "fernandoagustincocco@gmail.com",
        subject: "Gracias por ingresar",
        html: `<div><h1>Sos Platino?</h1>
        <h6>From node.js</h6></div>`,
    });

    res.json({ message: "Welcome to the jungle :O", "messageId": messageId });

};