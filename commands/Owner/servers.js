const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'servers',
	description: 'Displays a list of Bot.exe\'s joined servers.',
	args: false,
  execute(message, args) {
    if(message.member.roles.cache.has('812673380527505408')){

    const servers = message.client.guilds.cache.array().map(guild => {
      return `\`${guild.id}\` - **${guild.name}** - \`${guild.members.cache.size}\` members`;
    });

    const embed = new MessageEmbed()
      .setTitle('Server List')
      .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);

    if (servers.length <= 10) {
      const range = (servers.length == 1) ? '[1]' : `[1 - ${servers.length}]`;
      message.channel.send(embed.setTitle(`Server List ${range}`).setDescription(servers.join('\n')));
    }
}
  }
};