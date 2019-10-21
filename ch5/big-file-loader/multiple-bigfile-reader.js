const fs = require("fs");
const es = require("event-stream");

let countReadStream = 0;

module.exports = {
    readMultipleFiles(files, outputPath) {
        const writeOutput = fs.createWriteStream(outputPath);
        countReadStream = 0;

        for (const file of files) {
            fs.createReadStream(file.path)
                .pipe(es.split("\n"))
                .pipe(
                    es.mapSync(line => {
                        writeOutput.write(line);
                    })
                )
                .on("error", err => {
                    console.log("Error while reading file.", err);
                })
                .on("end", () => {
                    countReadStream++;
                    if (countReadStream === files.length) {
                        writeOutput.end();
                        console.log("Read entire files.");
                        console.log("Output file was generated.");
                    }
                    console.log(`Read ${file.path} done.`);
                });
        }
    }
};
