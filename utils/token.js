const fs = require("fs");
const jwt = require("jsonwebtoken");
const privateKey = fs.readFileSync("./keys/private.pem");
const publicKey = fs.readFileSync("./keys/public.pem");

const signOptions = { algorithm: "RS256", expiresIn: "1h" };

const createToken = (payload) => jwt.sign(payload, privateKey, signOptions);

const verifyToken = (token) => {
    return { uuidEmail } = jwt.verify(token, publicKey);
}

module.exports = { createToken, verifyToken };