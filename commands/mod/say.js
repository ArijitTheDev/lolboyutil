const { MessageEmbed } = require("discord.js");

const config = require("../../config.json");

const ee = require("../../embed.json");

const {ownerID} = require ("../../owner.json");

module.exports = {

    name: "say",

    category: "Administration",

    aliases: ["s"],

    cooldown: 2,

    usage: "say <TEXT>",

    description: "Resends your Text",

    run: async (client, message, args, user, text, prefix) => {

    try{

        if(!message.channel.permissionsFor(message.member).has("MANAGE_MESSAGES") && !ownerID.includes(message.author.id)) return;

      if(!args[0])

        return message.channel.send(new MessageEmbed()

            .setColor(ee.wrongcolor)

            .setFooter(client.user.username + " | made with 🤍 by Arijit#1000", client.user.displayAvatarURL())

            .setTitle(`❌ ERROR | You didn't provided a Text`)

            .setDescription(`Usage: \`${prefix}say <Your Text>\``)

        );

      message.channel.send(text);

    } catch (e) {

        console.log(String(e.stack).bgRed)

        return message.channel.send(new MessageEmbed()

            .setColor(ee.wrongcolor)

            .setFooter(client.user.username + " | made with 🤍 by Arijit#1000", client.user.displayAvatarURL())

            .setTitle(`❌ ERROR | An error occurred`)

            .setDescription(`\`\`\`${e.message}\`\`\``)

        );

    }

  }

}

/**

  * @INFO

  * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/Discord-Js-Handler-Template

  * @INFO

  * Work for Milrato Development | https://milrato.eu

  * @INFO

  * Please mention Him / Milrato Development, when using this Code!

  * @INFO

*/
