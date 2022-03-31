module.exports = {
    config: {
        name: "say",
        aliases: ["s", "bol"],
        description: "Says the Message",
        usage: "say <msg>",
    },

	let text = args.join(' ')
	message.delete();
	message.channel.send(text);
}
