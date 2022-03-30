const { ownerID } = require('../../owner.json') 
//const { messageEmbed } = require('discord.js')
const whitelist = require('../../whitelist.json')

module.exports = {

    config: {

      name: "dm",

      description: "DM a user in the guild",

      aliases: ['pm']

    },

    run: async (bot, message, args) => {

        

       /* if(message.author.id !== whitelist.id && message.author.id !== whitelist.id2)

return(message.reply("You're not Whitelisted to use this command")

  */    

if (whitelist.id.includes(message.author.id))

    {

let user =

        message.mentions.members.first() ||

        message.guild.members.cache.get(args[0]);

        

        

      if (!user)

        return message.channel.send(

          `You did not mention a user, or you gave an invalid id`

        );

      if (!args.slice(1).join(" "))

        return message.channel.send("You did not specify your message");

      user.user

        .send(args.slice(1).join(" "))

        .catch(() => message.channel.send("That user could not be DMed!"))

        .then(() => message.channel.send(`Sent a message to ${user.user.tag}`));

        }

      /*  else{

        //message.reply("You're Not Whitelisted")
       message.channel.send(new messageEmbed()
         .setTitle("No Access")
         .setDescription("You're Not Whitelisted To Use This Command")
         .setFooter("Made With 🤍 by Arijit#1000") )
       //message.channel.send(something)
          
}*/

    },

  };
