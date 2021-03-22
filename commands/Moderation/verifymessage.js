const { prefix } = require('../../config.json');
const Discord = require(`discord.js`)

module.exports = {
	name: 'verifymessage',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['svm'],
	usage: 'svm',
	cooldown: 5,
	execute(message, args) {
    
        const embed = new Discord.MessageEmbed()
        .setTitle(`How To Verify:`)
        .setColor(`#829eef`)
        .addField("How do I verify myself?", `You can verify yourself with doing \`${prefix}verify\` in a channel.`)
        .addField("Why do we need you to verify?", "Because we don't want scam/fake accounts in our server.")
        .addFooter(`Bot Coded By ***\`Commander R#9371\`***!`)
        message.channel.send(embed)

    }
};