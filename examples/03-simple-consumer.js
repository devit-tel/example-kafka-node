const Kafka = require("node-rdkafka");

// doc https://github.com/edenhill/librdkafka/blob/0.11.1.x/CONFIGURATION.md
const producer = new Kafka.Producer({
  'client.id': 'example-kafka',
  'metadata.broker.list': 'localhost:9092',
  'compression.codec': 'snappy',
  'retry.backoff.ms': 100,
  'message.send.max.retries': 10,
  'socket.keepalive.enable': true,
  'queue.buffering.max.messages': 100000,
  'queue.buffering.max.ms': 1000,
  'batch.num.messages': 1000000,
  'dr_cb': true
});

producer.connect();

producer.on("ready", () => {
  console.log("producer.on('ready')");
  transactions.map(transaction => {
    try {
      producer.produce(
        'topic2',
        null,
        Buffer.from(JSON.stringify(transaction)),
        transaction.accountId,
        Date.now(),
      );
      console.log(`sent ${JSON.stringify(transaction)}`)
    } catch (err) {
      console.error('A problem occurred when sending our message');
      console.error(err);
    }
  })
});

producer.on("error", console.error);

// SELECT *
// FROM topic2
// WHERE accountId="account1"
// LIMIT 200
