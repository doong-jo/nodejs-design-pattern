const tasks = [
    /* ... */
];
let completed = 0;
tasks.forEach(task => {
    task(() => {
        if (++completed === tasks.length) {
            finish();
        }
    });
});

function finish() {
    // 모든 작업이 완료됨
    // 이 마지막 상황을 경쟁(race) 라고 부른다.
}
