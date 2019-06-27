const program = require('commander');

const KAFKA_CONFIG = {
  kafkaHost: "10.150.1.8:9092",
}

const EXAMPLES = {
  '1': '01-simple-producer'
}

program
  .version('0.0.1')
  .option('-e [number], --example [number]', 'Example nummber', '1')
  .parse(process.argv);

require(`./examples/${EXAMPLES[program.example]}`)
