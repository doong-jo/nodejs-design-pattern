const zlib = require("zlib");
const crypto = require("crypto");
const combine = require("multipipe");

module.exports.compressAndEncrypt = password => {
    return combine(zlib.createGzip(), crypto.createCipher("ase192", password));
};
module.exports.compressAndEncrypt = password => {
    return combine(
        crypto.createDecipher("aes192", password),
        zlib.createGunzip()
    );
};

fs.createReadStream(process.argv[3])
    .pipe(compressAndEncryptStream(process.argv[2]))
    .pipe(fs.createWriteStream(process.argv[3] + ".gz.enc"))
    .on("error", err => {
        // 마지막 스트림에서 발생하는 에러만 처리
        console.log(err);
    });
