module.exports = {
    config: {
        name: "say",
        aliases: ["s", "bol"],
        description: "Says the Message",
        usage: "say <msg>",
    },

	let txt1 = args.join(' ')
	message.delete();
	message.channel.send(txt1);
}
