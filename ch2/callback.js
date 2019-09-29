const fs = require("fs");
function readJSON(filename, callback) {
    fs.readFile(filename, "utf8", (err, data) => {
        let parsed;
        if (err) {
            // 오류를 전달하고 현재 함수를 종료
            return callback(err);
        }

        try {
            // 없다면 밖에서 try..catch.. 구문을 사용하여도 JSON.parse 예외를 잡지 못함. "비동기 콜백 내부에서 예외를 발생시키면 이벤트 루프로 이동하여 다음 콜백으로 전파되지 않는다."
            // 파일의 내용을 해석
            parsed = JSON.parse(data);
        } catch (err) {
            // 에러를 catch
            return callback(err);
        }

        // 에러가 없으면 데이터를 전달
        callback(null, parsed);
    });
}
