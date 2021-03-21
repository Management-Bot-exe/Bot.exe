module.exports = {
    name: 'verify',
    description: 'verify',
    execute(message, args){
        
        const role = message.member.roles.cache.some(r = r.name === 'Verified' || 'verified');
        if(message.member.roles.cache.some(r => r.name === 'Verified' || 'verified')){
        message.reply(`You already are verified :partying_face:`);
        } else {
            message.reply(`I see you aren't verified yet :rolling_eyes:`);
            message.member.roles.add(role);
            message.reply(`Now you are verified! :partying_face:`).catch(console.error);
        }
    }
}