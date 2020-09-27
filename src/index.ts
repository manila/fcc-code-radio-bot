import { Client, Message } from "discord.js";

const stream_url = "https://coderadio-admin.freecodecamp.org/radio/8010/low.mp3";
const token = process.env.TOKEN;
const client = new Client();

client.on("ready", () => {
	let dispatcher: any = null;
	let connection: any = null;

	client.on("message", async (message: Message) => {
		if (
			message.content === "!play" &&
			message.member!.voice.channel
		) {
			connection = await message.member!.voice.channel.join();
			dispatcher = connection.play(stream_url);
		} else if (message.content === "!stop" && dispatcher) {
			dispatcher.destroy()	
			connection.disconnect()
		}
	});
});

client.login(token);
