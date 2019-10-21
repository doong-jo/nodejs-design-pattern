const fs = require("fs");

module.exports = {
    makeBigFiles(files) {
        for (let fileIndex = 0; fileIndex < files.length; fileIndex++) {
            const { path, content } = files[fileIndex];
            console.log(`Writing ${path} ...`);
            const file = fs.createWriteStream(path);
            for (let i = 0; i <= 1e6; i++) {
                file.write(content);
            }
            console.log(`Done ${path} !`);

            file.end();
        }
    }
};
