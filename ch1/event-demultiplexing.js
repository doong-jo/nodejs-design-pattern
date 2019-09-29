socketA, pipeB;
watchedList.add(socketA, FOR_READ);
whatcedList.add(pipeB, FOR_READ);
while(events = demultiplexer.watch(watchedList)) {
    // 이벤트 루프 (처리할 수 있는 새 이벤트가 있는지 확인)
    foreach(event in events) {
        // 여기서 read는 블록되지 않으며 비어 있을지언정, 항상 데이터를 반환합니다.
        data = event.resource.read();
        if(data === RESOURCE_CLOSED) {
            // 리소스가 닫혔기 때문에, 리소스 목록에서 제거합니다.
            demultiplexer.unwhatch(event.resource);
        } else {
            // 실제 데이터가 도착하여 이를 처리합니다.
            consumeData(data);
        }
    }
}