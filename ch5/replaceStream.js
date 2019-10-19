const stream = require("stream");
const util = require("util");

// searchString으로 split 후 replaceString으로 join하고 모든 작업 종료 시 flush가 호출 될 때 tailPiece를 이어 붙이고 종료
class ReplaceStream extends stream.Transform {
    constructor(searchString, replaceString) {
        super();
        this.searchString = searchString;
        this.replaceString = replaceString;
        this.tailPiece = "";
    }

    _transform(chunk, encoding, callback) {
        console.log(1);
        const pieces = (this.tailPiece + chunk).split(this.searchString);
        const lastPiece = pieces[pieces.length - 1];
        const tailPieceLen = this.searchString.length - 1;

        this.tailPiece = lastPiece.slice(-tailPieceLen);
        pieces[pieces.length - 1] = lastPiece.slice(0, -tailPieceLen);

        this.push(pieces.join(this.replaceString));
        callback();
    }

    _flush(callback) {
        this.push(this.tailPiece);
        callback();
    }
}

module.exports = ReplaceStream;
