if (command === 'say') {
	let text = args.join(' ');
	message.delete();
	message.channel.send(text);
}
