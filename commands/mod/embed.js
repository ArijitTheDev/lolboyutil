const Discord = require('discord.js');
const whitelist =require('../../whitelist.json');
module.exports = {
config: {
name:'embed'
},
run: async (client, message, args) => {

if (whitelist.id.includes(message.author.id)){
  
  let texto = args.join(' ')
      if(!texto){
        const embed = new Discord.MessageEmbed()
        .setTitle('Error')
        .setDescription(`Hello ${message.author}, please enter a message to send`)
        .setColor("RANDOM")
       return message.channel.send(embed).then(msg => msg.delete({timeout: 5000}))
      }
  const emsg = new Discord.MessageEmbed()
  .setTitle('Aurous')
  .setDescription(texto)
  .setfooter('Made With 🤍 by Arijit#1000')
    message.delete();
message.channel.send(emsg)
}

}

}
