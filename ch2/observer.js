const EventEmitter = require("events").EventEmitter;
const fs = require("fs");

function findPattern(files, regex) {
    const emitter = new EventEmitter();
    files.forEach(function(file) {
        fs.readFile(file, "utf8", (err, content) => {
            if (err) {
                // Node.js는 특별한 방식으로 에러 이벤트를 처리하고 예외를 자동으로 throw하며, 이에 연결된 리스너가 없는 경우 프로그램을 종료하므로 항상 에러 이벤트에 대한 리스너를 등록하는 것이 좋다.
                return emitter.emit("error", err);
            }
            emitter.emit("fileread", file);
            let match;
            if ((match = content.match(regex))) {
                match.forEach(elem => emitter.emit("found", file, elem));
            }
        });
    });
    return emitter;
}

fidPattern(["fileA.txt", "fileB.json"], /hello \w+/g)
    .on("fileread", file => console.log(file + " was read"))
    .on("found", (file, match) =>
        console.log('Matched "' + match + '"in file ' + file)
    )
    .on("error", err => console.log("Error emitted: " + err.message));
