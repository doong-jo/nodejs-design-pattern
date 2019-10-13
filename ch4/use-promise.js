asyncOperation(arg)
    .then(result1 => {
        // 다른 프라미스를 반환
        return asyncOperation(arg2);
    })
    .then(result2 => {
        // 값을 반환
        return "done";
    })
    .then(undfined, err => {
        // 체인의 모든 에러를 여기서 처리함
    });
