const { MessageEmbed } = require(`discord.js`);
const link = 'https://sites.google.com/view/commander-r-bots-website/bots/bot-exe'

module.exports = {
  name: "420_69",
  description: "Sends an invite to the fateslist server!",
  execute(message){
    if(!message.author.id === "271285474516140033") return;
    const embed = new MessageEmbed()
    .setTitle(`Fates List server!`)
    .setColor(`RANDOM`)
    .setURL(`https://discord.gg/89sBkfH2cM`)
    .addField(`Fateslist:`, `Join fateslist **[here](https://discord.com/invite/89sBkfH2cM)**!\nIf you upload your bot on the **[website](https://fateslist.xyz/)**\nFateslist an active and fun server where you can test all bots on the site before adding it to your own server!`)
    .addField(`links`, `
click [here](https://fateslist.xyz) to go to fateslist the bot list!
click [here](https://discord.com/oauth2/authorize?client_id=784871149695533076&permissions=8&scope=bot) to add me to your server! 
click [here](https://discord.gg/duRePxp5v2) to join the support server!  
click [here](${link}) to go to our site`)
    .setFooter(`Bot coded by: Commander R#9371`)
    message.channel.send(embed)
  }
}