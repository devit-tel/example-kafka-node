docker stop kafka-dev
docker rm kafka-dev
docker run -ti --name kafka-dev -e ADV_HOST=127.0.0.1 -e RUNNUNG_SAMPLEDATA=0 -e SAMPLEDATA=0 -e EULA="https://dl.lenses.stream/d/?id=3b646ddc-7ec7-414d-b9cb-b04f073dfda2" --rm -p 3030:3030 -p 9092:9092 -p 2181:2181 -p 8081:8081 landoop/kafka-lenses-dev
