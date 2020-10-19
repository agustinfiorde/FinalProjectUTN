const db = require("../models/index");
const Owner = db.owners;

const jwt = require('jsonwebtoken');
const fs = require('fs');

const privateKey = fs.readFileSync('./keys/private.pem');
const signOptions = { algorithm: "RS256", expiresIn: "2h" };

const createToken = (payload) => jwt.sign(payload, privateKey, signOptions);
const sha1 = require('sha1');


exports.auth = async (req, res) => {
    try {
        const { email, password } = req.body;

        const [result] = await Owner.findAll({
            where: {
                "email": email,
                "password": sha1(password)
            }
        });

        if (!result) res.sendStatus(401);
        if (!result.active)
            res.status(401).json({ message: "Confirmá tu cuenta par seguir :O 🎤" });

        const token = createToken({ id: result.id });
        console.log(token);
        res.json({ JWT: token, info: { completeName: result.name + " " + result.lastName, rol: result.rol } });

    } catch (e) {
        res.sendStatus(500);
    }
};