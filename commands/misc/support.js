module.exports = {
    name: 'support',
    description: 'Sends a link to the support server.',
    execute(message, args){


        message.channel.send({embed: {
            color: "RANDOM",
            author: {
                name: message.author.username,
                icon_url: message.author.avatarURL()
            },
            title: "Support",
            fields: [{
                name: "Support Server",
                value: `[join our support server here](https://discord.gg/duRePxp5v2)`
            },
            {
                name: "links",
                value: `
click [here](https://fateslist.xyz) to go to fateslist the bot list!
click [here](https://discord.com/oauth2/authorize?client_id=709333161057714187&permissions=8&scope=bot) to add me to your server! 
click [here](https://discord.gg/duRePxp5v2) to join the support server!  
click [here](https://sites.google.com/view/commander-r-bots-website/bots/bot-exe) to go to our site`
            }],
            timestamp: new Date(),
            footer: {
                icon_url: message.author.avatarURL(),
                text: `Support requisted by: ${message.author.tag}`
            }
        }})
    }
}