const Kafka = require("node-rdkafka");

const producerStream = new Kafka.createWriteStream(
  {
    "metadata.broker.list": "localhost:9092",
    "compression.codec": "snappy"
  },
  {},
  { topic: "topic3" }
);

let inc = 0;
setInterval(() => {
  const queueSuccess = producerStream.write(`Hello I'm ${++inc}`);
  if (!queueSuccess) console.log("Too many messages in queue");
}, 1);

producerStream.on('error', console.log);
