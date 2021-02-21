const fs = require("fs");
const publicKey = fs.readFileSync("./keys/public.pem");
const jwt = require("jsonwebtoken");

const secured = (req, res, next) => {
    try {
        let { auth } = req.headers;

        const { id } = jwt.verify(auth, publicKey);
        req.id = id;
        next();
    } catch (e) {
        res.sendStatus(401);
    }
}

module.exports = { secured };