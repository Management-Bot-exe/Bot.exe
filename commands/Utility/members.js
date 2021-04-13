const { MessageEmbed } = require('discord.js');
const { stripIndent } = require('common-tags');

module.exports = {
      name: 'members',
      aliases: ['memberstatus'],
      usage: 'members',
      description: 'Displays how many server members are online, busy, AFK, and offline.',    
  execute(message) {
    const members = message.guild.members.cache.array();
    const online = members.filter((m) => m.presence.status === 'online').length;
    const offline =  members.filter((m) => m.presence.status === 'offline').length;
    const dnd =  members.filter((m) => m.presence.status === 'dnd').length;
    const afk =  members.filter((m) => m.presence.status === 'idle').length;
    const embed = new MessageEmbed()
      .setTitle(`Member Status [${message.guild.members.cache.size}]`)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setDescription(stripIndent`
        **Online:** \`${online}\` members
        **Busy:** \`${dnd}\` members
        **AFK:** \`${afk}\` members
        **Offline:** \`${offline}\` members
      `)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};