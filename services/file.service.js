const { imgFile } = require("./../utils/fileHandler");

exports.createFile = async (body, files) => {
    try {
        // const [idDocente] = await create(body);
        const results = files.map((file) => {
            const uid = imgFile(file);

            // const obj = {
            //     idDocente,
            //     uid,
            // };

            // //lo guardaria en la DB
            // const [idImagen] = createImages(obj); // [10]
        });
        return uid;
    } catch (e) {
        throw e;
    }
};