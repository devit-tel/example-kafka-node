const kafka = require("kafka-node");

const client = new kafka.KafkaClient({
  kafkaHost: "10.150.1.8:9092"
});

const producer = new kafka.Producer(client);

producer.on("ready", function() {
  console.log("ready");
  for (let i = 0; i<100; i++) {
    const payloads = [{ topic: "my_topic", messages: [new kafka.KeyedMessage(`key:${i%8}`, `message:${i%8}`)], partition: i%8 }];
    producer.send(payloads, function(err, data) {
      console.log(err, data);
    });
  }
});

producer.on("error", function(err) {});
