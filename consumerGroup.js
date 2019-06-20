const kafka = require("kafka-node");

var consumerGroup = new kafka.ConsumerGroup(
  {
    kafkaHost: "10.150.1.8:9092", // connect directly to kafka broker (instantiates a KafkaClient)
    batch: undefined, // put client batch settings if you need them
    ssl: true, // optional (defaults to false) or tls options hash
    groupId: "ExampleTestGroup",
    sessionTimeout: 15000,
    // An array of partition assignment protocols ordered by preference.
    // 'roundrobin' or 'range' string for built ins (see below to pass in custom assignment protocol)
    protocol: ["roundrobin"],
    encoding: "utf8", // default is utf8, use 'buffer' for binary data

    // Offsets to use for new groups other options could be 'earliest' or 'none' (none will emit an error if no offsets were saved)
    // equivalent to Java client's auto.offset.reset
    fromOffset: "latest", // default
    commitOffsetsOnFirstJoin: true, // on the very first time this consumer group subscribes to a topic, record the offset returned in fromOffset (latest/earliest)
    // how to recover from OutOfRangeOffset error (where save offset is past server retention) accepts same value as fromOffset
    outOfRangeOffset: "earliest", // default
    // Callback to allow consumers with autoCommit false a chance to commit before a rebalance finishes
    // isAlreadyMember will be false on the first connection, and true on rebalances triggered after that
    onRebalance: (isAlreadyMember, callback) => {
      console.log(isAlreadyMember);
      callback();
    }, // or null
    autoCommit: true
  },
  ["my_topic"]
);

consumerGroup.on("message", ({ value, key, partition }) => {
  console.log(value, key, partition);
});
