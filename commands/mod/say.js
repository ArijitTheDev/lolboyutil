const Discord = require('discord.js');
module.exports = {
name:'say',
alias:[],
execute: (client, message, args) => {
  
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
