module.exports = {
    name: 'ping',
    aliases: [],
    description: 'Pong!',
    execute(message, args){


        message.channel.send('Pinging...').then(sent => {
            sent.edit(`🏓 Roundtrip latency: ${sent.createdTimestamp - message.createdTimestamp}ms`);
        });
    }
}