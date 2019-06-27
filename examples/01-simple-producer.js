const Kafka = require("node-rdkafka");

// doc https://github.com/edenhill/librdkafka/blob/0.11.1.x/CONFIGURATION.md
const producer = new Kafka.Producer({
  "client.id": "example-kafka",
  "metadata.broker.list": "localhost:9092",
  "compression.codec": "snappy",
  "retry.backoff.ms": 100,
  "message.send.max.retries": 10,
  "socket.keepalive.enable": true,
  "queue.buffering.max.messages": 100000,
  "queue.buffering.max.ms": 1000,
  "batch.num.messages": 1000000,
  dr_cb: true
});

producer.connect();

const randomQuotes = [
  `"Don't eat me. I have a wife and kids. Eat them."`,
  `"Love your enemies. It makes them so damned mad." - P.D. East`,
  `"Doesn’t expecting the unexpected make the unexpected expected?`,
  `"Smile…It confuses people..!!"`,
  `"An apple a day keeps the doctor away, But if the doctor is cute forget the fruit."`,
  `"DON’T HIT KIDS!!! No, seriously, they have guns now."`,
  `"I ran into my ex today…put it in reverse and did it again!!!"`,
  `"All guys hate the words DON’T and STOP unless they’re put together."`,
  `"Life is Short – Talk Fast!"`,
  `"Don’t think of yourself as an ugly person, think of yourself as a beautiful monkey."`,
  `"Whenever I find the key to success, someone changes the lock."`,
  `"I’m an excellent housekeeper..Every time I get divorce I keep the house ;- )"`,
  `"If common sense is so common why is there so many people with out it??"`,
  `"Save water and shower together"`,
  `"When nothing goes right, Go left."`,
  `"I don’t have an attitude problem, you have a perception problem."`,
  `"It is easier to ask for forgiveness than it is to ask for permission."`,
  `"Good girls ar bad girls that aren’t caught."`,
  `"I couldn’t repair your brakes, so I made your horn louder." – Steven Wright`
];

producer.on("ready", () => {
  console.log("producer.on('ready')");
  for (let i = 0; i < 100; i++) {
    try {
      producer.produce(
        "topic1",
        null,
        Buffer.from(randomQuotes[i % randomQuotes.length]),
        undefined,
        Date.now()
      );
      console.log(`sent ${i}`);
    } catch (err) {
      console.error("A problem occurred when sending our message");
      console.error(err);
    }
  }
  producer.flush(10000, error => {
    if (error) {
      console.log(error);
    }
    process.exit(0);
  });
});

producer.on("error", console.error);
