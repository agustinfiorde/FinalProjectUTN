const FileService = require('../services/file.service');

exports.create = (req, res) => {
    try {

        const result = FileService.createFile(req.body, req.files);

        res.json({ result });

    } catch (e) {
        res.sendStatus(500);
    }
};
