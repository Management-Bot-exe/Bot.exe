const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const link = 'https://sites.google.com/view/commander-r-bots-website/bots/bot-exe'


module.exports = {
    name: "botinfo",
    aliases: ["bi", "info"],
    description: "Info about Bot.exe.",
async execute(message, client) {
    const d = moment.duration(message.client.uptime);
    const days = (d.days() == 1) ? `${d.days()} day` : `${d.days()} days`;
    const hours = (d.hours() == 1) ? `${d.hours()} hour` : `${d.hours()} hours`;
    const minutes = (d.minutes() == 1) ? `${d.minutes()} minute` : `${d.minutes()} minutes`;
    const seconds = (d.seconds() == 1) ? `${d.seconds()} second` : `${d.seconds()} seconds`;
    const date = moment().subtract(d, 'ms').format('dddd, MMMM Do YYYY');
    const embed = new MessageEmbed()
      .setTitle('Info')
      .setThumbnail('')
      .setColor(`RANDOM`)
      .addField(`Bot info`, `ID: 784871149695533076\nPublic commands: 28`)
      .addField(`Bot owner info`, `ID: 271285474516140033\nDeveloper: Commander R#9371`)
      .addField(`Uptime`, `\`\`\`prolog\n${days}, ${hours}, ${minutes}, and ${seconds}\`\`\``)
      .addField('Date Launched:', date) 
      .addField(`Date First Launch:`, ` December 5th 2020`)
      .addField(`links`, `
click [here](https://fateslist.xyz) to go to fateslist the bot list!
click [here](https://discord.com/oauth2/authorize?client_id=784871149695533076&permissions=8&scope=bot) to add me to your server! 
click [here](https://discord.gg/duRePxp5v2) to join the support server!  
click [here](${link}) to go to our site`)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
    message.channel.send(embed);
  }
};