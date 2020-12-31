const amqp = require('amqplib');
const User = require('./models/user');

module.exports.start = async () => {

    const connection = await amqp.connect(process.env.RABBITMQ_URL);
    const channel = await connection.createChannel();
    await channel.assertQueue('task_queue', {durable: true});
    await channel.prefetch(1);

    channel.consume('task_queue', async (message) => {
        const content = JSON.parse(message.content.toString());
        console.log("RECEIVE USER", content);
        const user = new User({
            firstname: content.firstname,
            lastname: content.lastname,
            email: content.email,
            phone: content.phone
        });
        user.save()
            .then(() => channel.ack(message))
            .then(() => console.log("User saved in DB"))
            .catch(err => console.log(err))
    }, {
        noAck: false
    });
};
