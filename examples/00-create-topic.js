const Kafka = require("node-rdkafka");

// doc https://github.com/edenhill/librdkafka/blob/0.11.1.x/CONFIGURATION.md
const client = Kafka.AdminClient.create({
  "client.id": "example-kafka",
  "metadata.broker.list": "localhost:9092"
});

const createTopic = (topic, num_partitions) =>
  new Promise((resolve, reject) => {
    client.createTopic(
      {
        topic,
        num_partitions,
        replication_factor: 1
      },
      function(err) {
        return err ? reject(err) : resolve();
      }
    );
  });

Promise.all(
  [...new Array(5)].map((value, key) => createTopic(`topic${key + 1}`, 3))
);
