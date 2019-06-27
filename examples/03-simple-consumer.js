const Kafka = require("node-rdkafka");

// https://kafka.apache.org/documentation/#consumerconfigs
const consumer = new Kafka.KafkaConsumer({
  "metadata.broker.list": "localhost:9092",
  "group.id": "sample-service-1",
  "enable.auto.commit": false,
  offset_commit_cb: function(err, topicPartitions) {
    if (err) {
      // There was an error committing
      console.error(err);
    } else {
      // Commit went through. Let's log the topic partitions
      console.log(topicPartitions);
    }
  }
}, {});

consumer.connect();

const poll = consumer => {
  consumer.consume(100, (error, messages) => {
    try {
      console.log('consuming', error, messages)
      if (messages.length) {
        consumer.commitSync()
      }
    } catch (error) {
      // Do some recovery, or send to dead letter
      console.log(error)
    } finally {
      setImmediate(() => poll(consumer))
    }
  })
}

consumer
  .on("ready", () => {
    console.log("consumer.on('ready')");
    consumer.subscribe(["topic1"]);
    poll(consumer)
  })

consumer.on("error", console.error);
