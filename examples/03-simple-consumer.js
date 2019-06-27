const kafka = require("kafka-node");
const config = require("../config");
const client = new kafka.KafkaClient(config.kafkaClient);

const producer = new kafka.Consumer(client, {
  // Configuration for when to consider a message as acknowledged, default 1
  requireAcks: 1,
  // The amount of time in milliseconds to wait for all acks before considered, default 100ms
  ackTimeoutMs: 100,
  // Partitioner type (default = 0, random = 1, cyclic = 2, keyed = 3, custom = 4), default 0
  partitionerType: 3
});

const transactions = [
  {
    accountId: "account14",
    transection: {
      in: 0,
      out: 3900
    }
  },
  {
    accountId: "account6",
    transection: {
      in: 1700,
      out: 0
    }
  },
  {
    accountId: "account20",
    transection: {
      in: 0,
      out: 100
    }
  },
  {
    accountId: "account11",
    transection: {
      in: 2700,
      out: 0
    }
  },
  {
    accountId: "account13",
    transection: {
      in: 0,
      out: 2600
    }
  },
  {
    accountId: "account20",
    transection: {
      in: 1500,
      out: 0
    }
  },
  {
    accountId: "account17",
    transection: {
      in: 0,
      out: 4100
    }
  },
  {
    accountId: "account3",
    transection: {
      in: 2900,
      out: 0
    }
  },
  {
    accountId: "account10",
    transection: {
      in: 0,
      out: 4100
    }
  },
  {
    accountId: "account9",
    transection: {
      in: 2700,
      out: 0
    }
  },
  {
    accountId: "account12",
    transection: {
      in: 0,
      out: 2500
    }
  },
  {
    accountId: "account8",
    transection: {
      in: 3100,
      out: 0
    }
  },
  {
    accountId: "account11",
    transection: {
      in: 0,
      out: 1800
    }
  },
  {
    accountId: "account8",
    transection: {
      in: 4500,
      out: 0
    }
  },
  {
    accountId: "account20",
    transection: {
      in: 0,
      out: 2000
    }
  },
  {
    accountId: "account2",
    transection: {
      in: 1900,
      out: 0
    }
  },
  {
    accountId: "account13",
    transection: {
      in: 0,
      out: 2700
    }
  },
  {
    accountId: "account13",
    transection: {
      in: 2300,
      out: 0
    }
  },
  {
    accountId: "account12",
    transection: {
      in: 0,
      out: 3700
    }
  },
  {
    accountId: "account1",
    transection: {
      in: 300,
      out: 0
    }
  },
  {
    accountId: "account2",
    transection: {
      in: 0,
      out: 5000
    }
  },
  {
    accountId: "account3",
    transection: {
      in: 3500,
      out: 0
    }
  },
  {
    accountId: "account11",
    transection: {
      in: 0,
      out: 3800
    }
  },
  {
    accountId: "account2",
    transection: {
      in: 500,
      out: 0
    }
  },
  {
    accountId: "account11",
    transection: {
      in: 0,
      out: 5000
    }
  },
  {
    accountId: "account10",
    transection: {
      in: 600,
      out: 0
    }
  },
  {
    accountId: "account5",
    transection: {
      in: 0,
      out: 1500
    }
  },
  {
    accountId: "account2",
    transection: {
      in: 4000,
      out: 0
    }
  },
  {
    accountId: "account2",
    transection: {
      in: 0,
      out: 1000
    }
  },
  {
    accountId: "account3",
    transection: {
      in: 4700,
      out: 0
    }
  },
  {
    accountId: "account8",
    transection: {
      in: 0,
      out: 3000
    }
  },
  {
    accountId: "account3",
    transection: {
      in: 4400,
      out: 0
    }
  },
  {
    accountId: "account3",
    transection: {
      in: 0,
      out: 1300
    }
  },
  {
    accountId: "account14",
    transection: {
      in: 2600,
      out: 0
    }
  },
  {
    accountId: "account9",
    transection: {
      in: 0,
      out: 500
    }
  },
  {
    accountId: "account6",
    transection: {
      in: 4700,
      out: 0
    }
  },
  {
    accountId: "account15",
    transection: {
      in: 0,
      out: 300
    }
  },
  {
    accountId: "account1",
    transection: {
      in: 4200,
      out: 0
    }
  },
  {
    accountId: "account17",
    transection: {
      in: 0,
      out: 3800
    }
  },
  {
    accountId: "account19",
    transection: {
      in: 600,
      out: 0
    }
  },
  {
    accountId: "account12",
    transection: {
      in: 0,
      out: 1000
    }
  },
  {
    accountId: "account19",
    transection: {
      in: 4000,
      out: 0
    }
  },
  {
    accountId: "account1",
    transection: {
      in: 0,
      out: 3700
    }
  },
  {
    accountId: "account6",
    transection: {
      in: 4400,
      out: 0
    }
  },
  {
    accountId: "account20",
    transection: {
      in: 0,
      out: 400
    }
  },
  {
    accountId: "account10",
    transection: {
      in: 1800,
      out: 0
    }
  },
  {
    accountId: "account7",
    transection: {
      in: 0,
      out: 800
    }
  },
  {
    accountId: "account10",
    transection: {
      in: 500,
      out: 0
    }
  },
  {
    accountId: "account1",
    transection: {
      in: 0,
      out: 600
    }
  },
  {
    accountId: "account12",
    transection: {
      in: 3700,
      out: 0
    }
  },
  {
    accountId: "account8",
    transection: {
      in: 0,
      out: 1900
    }
  },
  {
    accountId: "account6",
    transection: {
      in: 4300,
      out: 0
    }
  },
  {
    accountId: "account19",
    transection: {
      in: 0,
      out: 1700
    }
  },
  {
    accountId: "account11",
    transection: {
      in: 3500,
      out: 0
    }
  },
  {
    accountId: "account8",
    transection: {
      in: 0,
      out: 1200
    }
  },
  {
    accountId: "account2",
    transection: {
      in: 2300,
      out: 0
    }
  },
  {
    accountId: "account7",
    transection: {
      in: 0,
      out: 3300
    }
  },
  {
    accountId: "account14",
    transection: {
      in: 4400,
      out: 0
    }
  },
  {
    accountId: "account20",
    transection: {
      in: 0,
      out: 4900
    }
  },
  {
    accountId: "account17",
    transection: {
      in: 2600,
      out: 0
    }
  },
  {
    accountId: "account13",
    transection: {
      in: 0,
      out: 1500
    }
  },
  {
    accountId: "account19",
    transection: {
      in: 2000,
      out: 0
    }
  },
  {
    accountId: "account19",
    transection: {
      in: 0,
      out: 1000
    }
  },
  {
    accountId: "account12",
    transection: {
      in: 4600,
      out: 0
    }
  },
  {
    accountId: "account5",
    transection: {
      in: 0,
      out: 2500
    }
  },
  {
    accountId: "account9",
    transection: {
      in: 600,
      out: 0
    }
  },
  {
    accountId: "account8",
    transection: {
      in: 0,
      out: 3000
    }
  },
  {
    accountId: "account12",
    transection: {
      in: 1200,
      out: 0
    }
  },
  {
    accountId: "account8",
    transection: {
      in: 0,
      out: 2000
    }
  },
  {
    accountId: "account3",
    transection: {
      in: 3800,
      out: 0
    }
  },
  {
    accountId: "account3",
    transection: {
      in: 0,
      out: 600
    }
  },
  {
    accountId: "account19",
    transection: {
      in: 3200,
      out: 0
    }
  },
  {
    accountId: "account8",
    transection: {
      in: 0,
      out: 1700
    }
  },
  {
    accountId: "account1",
    transection: {
      in: 4900,
      out: 0
    }
  },
  {
    accountId: "account2",
    transection: {
      in: 0,
      out: 4700
    }
  },
  {
    accountId: "account8",
    transection: {
      in: 2000,
      out: 0
    }
  },
  {
    accountId: "account5",
    transection: {
      in: 0,
      out: 4900
    }
  },
  {
    accountId: "account10",
    transection: {
      in: 4000,
      out: 0
    }
  },
  {
    accountId: "account4",
    transection: {
      in: 0,
      out: 2900
    }
  },
  {
    accountId: "account13",
    transection: {
      in: 4200,
      out: 0
    }
  },
  {
    accountId: "account19",
    transection: {
      in: 0,
      out: 600
    }
  },
  {
    accountId: "account9",
    transection: {
      in: 3900,
      out: 0
    }
  },
  {
    accountId: "account9",
    transection: {
      in: 0,
      out: 4900
    }
  },
  {
    accountId: "account9",
    transection: {
      in: 2500,
      out: 0
    }
  },
  {
    accountId: "account18",
    transection: {
      in: 0,
      out: 5000
    }
  },
  {
    accountId: "account2",
    transection: {
      in: 1500,
      out: 0
    }
  },
  {
    accountId: "account17",
    transection: {
      in: 0,
      out: 4300
    }
  },
  {
    accountId: "account6",
    transection: {
      in: 300,
      out: 0
    }
  },
  {
    accountId: "account4",
    transection: {
      in: 0,
      out: 2300
    }
  },
  {
    accountId: "account16",
    transection: {
      in: 1700,
      out: 0
    }
  },
  {
    accountId: "account6",
    transection: {
      in: 0,
      out: 4000
    }
  },
  {
    accountId: "account15",
    transection: {
      in: 3700,
      out: 0
    }
  },
  {
    accountId: "account15",
    transection: {
      in: 0,
      out: 3000
    }
  },
  {
    accountId: "account16",
    transection: {
      in: 300,
      out: 0
    }
  },
  {
    accountId: "account2",
    transection: {
      in: 0,
      out: 900
    }
  },
  {
    accountId: "account12",
    transection: {
      in: 900,
      out: 0
    }
  },
  {
    accountId: "account17",
    transection: {
      in: 0,
      out: 4200
    }
  },
  {
    accountId: "account13",
    transection: {
      in: 2600,
      out: 0
    }
  },
  {
    accountId: "account10",
    transection: {
      in: 0,
      out: 3000
    }
  },
  {
    accountId: "account12",
    transection: {
      in: 800,
      out: 0
    }
  }
];

producer.on("ready", () => {
  console.log("producer.on('ready')");
  const payloads = transactions.map(transaction => ({
    topic: `topic2`,
    messages: JSON.stringify(transaction),
    key: transaction.accountId
  }));
  producer.send(payloads, (err, data) => {
    console.log(err, data);
  });
});

producer.on("error", console.error);

// SELECT *
// FROM topic2
// WHERE accountId="account1"
// LIMIT 200
