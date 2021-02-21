const { User } = require('./../models/index');

const jwt = require('jsonwebtoken');
const fs = require('fs');

const privateKey = fs.readFileSync('./keys/private.pem');
const signOptions = { algorithm: "RS256", expiresIn: "12h" };

const createToken = (payload) => jwt.sign(payload, privateKey, signOptions);
const sha1 = require('sha1');


exports.auth = async (req, res) => {
    try {
        const { email, password } = req.body;

        // const [result] = await User.findAll({
        //     where: {
        //         "email": email,
        //         "password": sha1(password)
        //     }
        // });


        const result = await User.findOne({
            where: {
                "email": email,
                "password": sha1(password)
            }
        });

        if (!result) res.sendStatus(401);
        if (!result.isActive)
            res.status(401).json({ message: "Confirmá tu cuenta par seguir :O 🎤" });

        const token = createToken({ id: result.id });
        res.json({ JWT: token, info: { completeName: result.name + " " + result.lastName, rol: result.rol } });

    } catch (e) {
        res.sendStatus(500);
    }
};