const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, blockedUsers } = require('./config.json');
const config = require('./config.json');

const client = new Discord.Client();
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	if (blockedUsers.includes(message.author.id)) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
			return message.reply('You can not do this!');
		}
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

const { cooldowns } = client;

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.on(`guildCreate`, (guild) => {
	const emojis = require(`./utils/emojis.json`)
	const commandLogsChannel = client.guilds.cache.get(`792469092438507521`).client.channels.cache.get('792469093839798284');
    let defaultChannel = "";
    guild.channels.cache.forEach((channel) => {
      if(channel.type == "text" && defaultChannel == "") {
        if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
          defaultChannel = channel;
        }
      }
    })
    defaultChannel.send(`Run \`${config.prefix}setup\` for more info on how to set me up correctly! Thanks for inviting me my developer appriciate it!`);
    const embed = new Discord.MessageEmbed()
		.setTitle(`Someone invited me!`)
		.setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
		.setColor(`#00ff27`)
		.addField(`Guild i've been added to:`, `\`${guild}\`` + " || " + `\`${guild.name}\`` + ` ${emojis.success}!`)
		.addField(`Server Count:`, client.guilds.cache.size)
		.setFooter(`This message was coded by: Commander R#9371 || 271285474516140033`)
		commandLogsChannel.send(embed)
		commandLogsChannel.send(`<@271285474516140033>`);
});

client.on("guildDelete", guild => {
	console.log(`I've left ${guild.name}`);
	client.channels.cache.get("792469093839798284").send(new Discord.MessageEmbed().setColor('RED').setDescription(`${client.user} has left **${guild.name}**`)).then(client.channels.cache.get("792469093839798284").send(`<@271285474516140033>`)); 
	});


client.login(token);