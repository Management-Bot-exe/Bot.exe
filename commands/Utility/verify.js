module.exports = {
    name: 'verify',
    description: 'Verify yourself here',
    execute(message, args){
        
        let role = message.guild.roles.cache.find(r => r.name === "Verified");

        if(message.member.roles.cache.some(r => r.name === "Verified") ) {

            message.reply(`You already are verified :partying_face:`);

        } else {

            message.reply(`I see you aren't verified yet :rolling_eyes:`);
            message.member.roles.add(role).catch(console.error);
            message.reply(`Now you are verified! :partying_face:`).catch(console.error);
        }
    }
}