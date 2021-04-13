const { MessageEmbed } = require(`discord.js`);
const Title = [
  `So you wanted to vote for me? Nice of you!`,
  'U wanted To ⏫ our bot eh?'
  ];
const link = 'https://sites.google.com/view/commander-r-bots-website/bots/bot-exe'

module.exports = {
  name: "vote",
  description: "Get a list of where you can vote for Bot.exe",
  execute(message, args){
    const embed = new MessageEmbed()
    .setColor(``)
    .setTitle(`${Title[Math.floor(Math.random() * Title.length)]}`)
    .setAuthor(message.author.username)
    .setURL(`https://sites.google.com/view/commander-r-bots-website/vote`)
    .addFields(
      {name: `[Fateslist](https://fateslist.xyz)`, value: `[https://fateslist.xyz/bot.exe/vote](https://fateslist.xyz/bot.exe/vote)`},
      {name: `[Discord Bot List](https://discordbotlist.com)`, value: `[https://discordbotlist.com/bots/botexe/upvote](https://discordbotlist.com/bots/botexe/upvote)`}
    )
  
  .addField(`links`, `
click [here](https://fateslist.xyz) to go to fateslist the bot list!
click [here](https://discord.com/oauth2/authorize?client_id=784871149695533076&permissions=8&scope=bot) to add me to your server! 
click [here](https://discord.gg/duRePxp5v2) to join the support server!  
click [here](${link}) to go to our site`)
    .setFooter(`Bot coded by: Commander R#9371`)
  
     message.channel.send(embed)
  }
}