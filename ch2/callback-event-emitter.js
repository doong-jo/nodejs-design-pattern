/* glob(pattern, [options], callback)
 * 세번째 인자로 주어진 패턴과 일치하는 모든 파일의 리스트를 가지고 호출될 콜백 함수를 취한다.
 * 동시에 이 함수는 프로세스 상태에 대해 보다 세분화된 알림을 제공하는 EventEmitter를 반환한다.
 */
const glob = require("glob");
glob("data/*.txt", (errors, files) =>
    console.log(`All files found: ${JSON.stringify(files)}`)
).on("match", match => console.log(`Match found: ${match}`));
