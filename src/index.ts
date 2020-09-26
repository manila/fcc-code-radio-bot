import Discord from "discord.js";

const token = process.env!.TOKEN;
const client = new Discord.Client();

client.on("ready", () => {
client.on('message', async message => {
		if (message!.member!.voice!.channel) {
					const connection = await message!.member!.voice!.channel!.join();
					connection.play("https://coderadio-admin.freecodecamp.org/radio/8010/low.mp3")
		}
	});
})

client.login(token)
