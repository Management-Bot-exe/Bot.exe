const { prefix } = require(`../config.json`)
const activities = [
	{ name: `Commander R's Stream`, type: 'STREAMING', url: "https://twitch.th/rprofile" },
    { name: `${prefix}help`, type: 'LISTENING' },
	{ name: 'your commands', type: 'LISTENING' },
  ];

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setPresence({ status: 'online', activity: activities[0] });

		let activity = 1;

		setInterval(() => {
			activities[3] = { name: `${client.guilds.cache.size} servers`, type: 'WATCHING' };
			activities[4] = { name: `${client.users.cache.size} users`, type: 'WATCHING' };
			if (activity > 5) activity = 0;
			client.user.setActivity(activities[activity]);
			activity++;
		  }, 30000);

	},
};