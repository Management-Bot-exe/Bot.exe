const { MessageEmbed } = require(`discord.js`)
const Title = [
  `So you wanted to check out our site?`,
  'U wanted To ✅ our site eh?',
  'You might as well vote for me when your on the site.'
  ];


module.exports = {
    name: 'website',
    description: 'Sends all the executeble commands.',
    execute(message, args){

        const embed = new MessageEmbed()
        .setColor(`#00ffc7`)
        .setTitle(`${Title[Math.floor(Math.random() * Title.length)]}`)
        .setAuthor(message.author.username)
        .setURL(`https://sites.google.com/view/commander-r-bots-website/homepage`)
        .addFields(
            {
                name: "Our website", value: 'You can either click [here](https://sites.google.com/view/commander-r-bots-website/homepage) or on the title of this embed message to go to the website!'
            })
        .setFooter(`Bot Coded By: Commander R#9371!`)
        
        message.channel.send(embed).catch(console.error)
    }
}