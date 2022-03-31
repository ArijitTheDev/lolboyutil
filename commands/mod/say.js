const Discord = require('discord.js');
const whitelist =require('../../whitelist.json');
module.exports = {
config: {
name:'say'
},
run: async (client, message, args) => {

if (whitelist.id.includes(message.author.id)){
  
  let texto = args.join(' ')
      if(!texto){
        const embed = new Discord.MessageEmbed()
        .setTitle('Error')
        .setDescription(`<:_x_:880490001354346506> ${message.author} debes decir algo <:_x_:880490001354346506>`)
        .setColor("RANDOM")
       return message.channel.send(embed).then(msg => msg.delete({timeout: 5000}))
      }
  
    message.delete();
message.channel.send(texto)
}

}

}
