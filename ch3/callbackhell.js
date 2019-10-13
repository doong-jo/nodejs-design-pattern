function spider(url, callback) {
    const filename = util.urlToFilename(url);
    fs.exist(filename, exists => {
        if (!exists) {
            request(url, (err, res, body) => {
                if (err) {
                    callback(err);
                } else {
                    mkdirp(path.dirname(filename), err => {
                        // 계속 파고 들어가게 됨
                    });
                }
            });
        }
    });
}
