// sudo code
resources = [socketA, socketB, pipeA];
while (!resources.isEmpty()) {
    for (i = 0; i < resources.length; i++) {
        resource = resources[i];
        let data = resource.data();
        if (data === NO_DATA_AVAILABLE) {
            // 당장 읽을 데이터가 없습니다.
            continue;
        }
        if (data === RESOURCE_CLOSE) {
            // 데이터 리소스가 닫혔기 때문에, 리소스 목록에서 제거합니다.
            resources.remove(i);
        } else {
            // 데이터가 도착하여 이를 처리합니다.
            consumeData(data);
        }
    }
}
