const kafka = require("kafka-node");
const config = require("../config");
const client = new kafka.KafkaClient(config.kafkaClient);

const producer = new kafka.Producer(client, {
  // Configuration for when to consider a message as acknowledged, default 1
  requireAcks: 1,
  // The amount of time in milliseconds to wait for all acks before considered, default 100ms
  ackTimeoutMs: 100,
  // Partitioner type (default = 0, random = 1, cyclic = 2, keyed = 3, custom = 4), default 0
  partitionerType: 2
});

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
  const payloads = new Array(100)
    .fill()
    .map((value, key) => ({
      topic: `${config.hostname}_topic1`,
      messages: randomQuotes[key % randomQuotes.length]
    }));
  producer.send(payloads, (err, data) => {
    console.log(data);
  });
});

producer.on("error", console.error);
