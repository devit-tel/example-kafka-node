const os = require('os')

module.exports = {
  hostname: os.hostname(),
  kafkaClient: {
    kafkaHost: "127.0.0.1:9092"
  }
};
