const allowImageExtension = ["png", "jpeg"];
const allowPDFExtension = ["pdf"];

const fs = require('fs');
const { v4: uuid } = require('uuid');

const saveFile = ({ mimetype, path, size }, allowExtension, destFolder = "./public/img") => {
    try {
        const extension = mimetype.split("/")[1];
        if (allowExtension.includes(extension)) {
            const id = uuid();
            const fileName = `${id}.${extension}`;
            const fileNameOut = `${destFolder}/${fileName}`;
            fs.createReadStream(path).pipe(fs.createWriteStream(fileNameOut));
            fs.unlink(path, (e) => {
                if (e) throw e;
            });
            return id;
        }
    } catch (e) {
        throw e;
    }
};

const imgFile = (file) => {
    return saveFile(file, allowImageExtension);
};
const pdfFile = () => { };

//Multer
const multer = require('multer');
const config = { dest: "./public/tmp" };
const upload = multer(config);

module.exports = { imgFile, upload };