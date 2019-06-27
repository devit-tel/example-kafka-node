const config = require("../config");

console.log(`Open web browser and go to http://${config.kafkaClient.kafkaHost.replace('9092', '3030')}`)
console.log('Login with')
console.log('username: admin')
console.log('password: admin')

console.log('create topics below')
console.log(`topic_name: "topic1", partition: 3, replication: 1, key: String, value: String`)
console.log(`topic_name: "topic2", partition: 3, replication: 1, key: String, value: JSON`)
