const os = require('os')

module.exports = {
  hostname: os.hostname(),
  kafkaClient: {
    kafkaHost: "10.150.1.14:9092"
  }
};
