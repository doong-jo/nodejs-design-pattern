function task1(callback) {
    asyncOperation(() => {
        task2(callback);
    });
}

function task2(callback) {
    asyncOperation(() => {
        task3(callback);
    });
}

// ...

task1(() => {
    // task1, task2 ... 가 완료될 때 실행됨
    console.log("task finish!");
});
