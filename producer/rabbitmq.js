const amqp = require('amqplib');

function sendMessage(message) {
    amqp.connect(process.env.RABBITMQ_URL).then(function (conn) {
        return conn.createChannel()
            .then(function (ch) {
                const q = 'task_queue';
                return ch.assertQueue(q, {durable: true})
                    .then(function () {
                        ch.sendToQueue(q, Buffer.from(message), {persistent: true});
                        console.log(" [x] Sent '%s'", message);
                        return ch.close();
                    });
            })
            .finally(function () {
                conn.close();
            });
    }).catch(console.warn);
}

module.exports = sendMessage;
