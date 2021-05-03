const config = require(`../config.json`);
const Discord = require(`discord.js`)

module.exports = {
	name: 'message',
	execute(message) {
		console.log(`${message.author.tag} in #${message.channel.name} sent: ${message.content}`);

		if(!message.content.startsWith(config.prefix) || message.author.bot) return;
		console.log(`${message.author.username} sent: "${message.content}" In #${message.channel.name}`)
		const commandLogsChannel = message.client.guilds.cache.get(`792469092438507521`).client.channels.cache.get('838769763004973056');
		const embed = new Discord.MessageEmbed()
		.setTitle(`Someone used a command in ${message.guild}!`)
		.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
		.setColor(`#f44611`)
		.addField(`In the channel`, message.channel.name)
		.addField(`Command:`, message.content)
		.setFooter(`This message was coded by: Commander R#9371 || 271285474516140033`)
		commandLogsChannel.send(embed);
	},
};