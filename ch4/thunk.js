function readFileThunk(filename, options) {
    return function(callback) {
        fs.readFile(filename, options, callback);
    };
}
