// 1. return 사용
if (err) {
    return callback(err);
}
// 오류가 없을 때 실행할 코드

// 2. 함수 분리
function saveFile(filename, contents, callback) {
    mkdirp(path.dirname(filename), err => {
        // ...
    });
}

function spider(url, callback) {
    const filename = util.urlToFilename(url);
    fs.exist(filename, exists => {
        if (!exists) {
            request(url, (err, res, body) => {
                if (err) {
                    return callback(err);
                }
                saveFile(filename, body, err => {
                    // ...
                });
            });
        }
    });
}
