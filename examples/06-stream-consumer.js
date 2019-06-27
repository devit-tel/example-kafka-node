const Kafka = require("node-rdkafka");
const { createWriteStream } = require("fs");
const os = require

const consumerStream = new Kafka.createReadStream(
  {
    "metadata.broker.list": "localhost:9092",
    "group.id": "stream-service-2",
  },
  {},
  { topics: ["topic1", "topic2", "topic3"] }
);

const producerStream = new Kafka.createWriteStream(
  {
    "metadata.broker.list": "localhost:9092",
    "compression.codec": "snappy"
  },
  {},
  { topic: "topic4" }
);

const fileStream = createWriteStream("./topic3_bak.txt");

consumerStream.on('data', data => {
  fileStream.write(data.value)
  if (data.topic === 'topic3' && /(1$)|(7$)|(9$)/.test(data.value.toString())) {
    producerStream.write(data.value)
  } else {
    process.stdout.write(data.value)
  }
})

consumerStream.on("error", console.log);
producerStream.on("error", console.log);
fileStream.on("error", console.log);
