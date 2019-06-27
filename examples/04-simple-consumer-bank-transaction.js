const Kafka = require("node-rdkafka");

let accounts = {};

// https://kafka.apache.org/documentation/#consumerconfigs
const consumer = new Kafka.KafkaConsumer(
  {
    "metadata.broker.list": "localhost:9092",
    "group.id": "sample-service-2",
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
  },
  {}
);

consumer.connect();

const calcTransaction = (currentBalance = 0, transection) =>
  currentBalance + (transection.in || 0) - (transection.out || 0);

const poll = consumer => {
  consumer.consume(100, (error, messages) => {
    try {
      // console.log('consuming', error, messages)
      const values = messages.map(({ value }) => JSON.parse(value.toString()));
      for (const { accountId, transection } of values) {
        accounts = {
          ...accounts,
          [accountId]: calcTransaction(accounts[accountId], transection)
        };
      }
      if (messages.length) {
        consumer.commitSync();
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log(accounts);
      setImmediate(() => poll(consumer));
    }
  });
};

consumer.on("ready", () => {
  console.log("consumer.on('ready')");
  consumer.subscribe(["topic2"]);
  poll(consumer);
});

consumer.on("error", console.error);
