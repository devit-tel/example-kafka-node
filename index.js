const program = require('commander');

const KAFKA_CONFIG = {
  kafkaHost: "10.150.1.8:9092",
}

const EXAMPLES = {
  '0': '00-create-topic',
  '1': '01-simple-producer',
  '2': '02-simple-producer-with-message-key',
  '3': '03-simple-consumer',
  '4': '04-simple-consumer-bank-transaction',
  '5': '05-stream-producer',
  '6': '06-stream-consumer'
}

program
  .version('0.0.1')
  .option('-e, --example <number>', 'Example nummber', '0')
  .parse(process.argv);

require(`./examples/${EXAMPLES[program.example]}`)
