client.on('message', message => {

    if (message.content.startsWith(prefix + 'say')) {

        if (message.author.bot) return;

        message.delete()

        const SayMessage = message.content.slice(2).trim();

        message.channel.send(SayMessage)



