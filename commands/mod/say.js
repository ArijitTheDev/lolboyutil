module.exports = {
      config: {
           name: "say",
           description: "Send a Message",
           aliases: ['s', 'bol']
      },
run: async (client, message, args, user, text, prefix) = {
if (whitelist.id.includes(message.author.id)){
message.channel.send(text)
}
}
