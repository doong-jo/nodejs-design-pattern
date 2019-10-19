const Chance = require("chance");
const chance = new Chance();

require("http")
    .createServer((req, res) => {
        res.writeHead(200, { "Content-type": "text/plain" });

        function generateMore() {
            while (chance.bool({ likelihood: 95 })) {
                // stream 쓰기
                // shouldContinue가 false라면 더 이상 쓰지 말아야 함
                let shouldContinue = res.write(
                    chance.string({ length: 16 * 1024 - 1 })
                );

                if (!shouldContinue) {
                    console.log("Backpressure");
                    // 다시 쓰기를 시작해도 될 때 generateMore가 다시 호출 됨
                    return res.once("drain", generateMore);
                }
            }
            res.end("\nThe end...\n", () => console.log("All data was sent"));
        }
        generateMore();
    })
    .listen(8080, () => console.log("Listening on http://localhost:8080"));
