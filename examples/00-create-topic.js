const Kafka = require("node-rdkafka");

// doc https://github.com/edenhill/librdkafka/blob/0.11.1.x/CONFIGURATION.md
const client = Kafka.AdminClient.create({
  'client.id': 'example-kafka',
  'metadata.broker.list': 'localhost:9092',
});


const createTopic = (topic, num_partitions) => new Promise((resolve, reject) => {
  client.createTopic({
    topic,
    num_partitions,
    replication_factor: 1
  }, function(err) {
    return err ? reject(err): resolve()
  });
})


createTopic('topic1', 3).then(() => console.log('created topic1'))
createTopic('topic2', 3).then(() => console.log('created topic2'))
