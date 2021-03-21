module.exports = {
    name: 'support',
    description: 'Sends a link to the support server.',
    execute(message, args){


        message.channel.send(`You can join the support server here:
https://discord.gg/CfRkadyGP6`)
    }
}