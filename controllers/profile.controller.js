
exports.getProfile = async (req, res) => {

    const { id } = req.headers;

    console.log("EYYYYYY entre al perfil");
    console.log("El id del usuario autenticado es ", id);

    res.json({ message: "Welcome to the jungle :O", "messageId": id });
};