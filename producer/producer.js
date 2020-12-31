const amqp = require('amqplib');

module.exports.send = async (task) =>  {

    const connection = await amqp.connect(process.env.RABBITMQ_URL);
    const channel = await connection.createChannel();
    await channel.assertQueue('task_queue', { durable: true });

    await channel.sendToQueue('task_queue', Buffer.from(JSON.stringify(task)), {
        contentType: 'application/json',
        persistent: true
    });

    console.log(" [x] Sent '%s'", JSON.stringify(task));

    setTimeout(() => {
        connection.close();
    }, 3000);

}
