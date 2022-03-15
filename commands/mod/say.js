client.on('message', message => {

    if (message.content.startsWith(prefix + 'say')) {

        if (message.author.bot) return;

        message.delete()

        const SayMessage = message.content.slice(4).trim();

        message.channel.send(SayMessage)



