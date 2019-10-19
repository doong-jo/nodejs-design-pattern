function fsAdapter(db) {
    const fs = {};
    fs.readFile = (...) => {
        //...
    }

    fs.writeFile =  (...) => {
        // ...
    }
}

const levelup = require('level') // level-up db
const db = levelup("./fsDB", {valueEncoding: 'binary'});
const fs = fsAdapter(db);
// 어댑터를 사용하여 수행한 작업은 Level Up 데이터베이스에서 수행되는 작업으로 변환된다.