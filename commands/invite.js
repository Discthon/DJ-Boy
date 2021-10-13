const { LOCALE } = require("../util/AdUtil");
const i18n = require("i18n");
const { MessageEmbed } = require("discord.js");

i18n.setLocale(LOCALE);

module.exports = {
  name: "invite",
  description: i18n.__('invite.description'),
  execute(message, args) {
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 70282305;

    let invite = new MessageEmbed()
      .setTitle(`**Interested by the functions of our bot**`)
      .setDescription(
        `**Then what are you waiting for? Invite me today!** \n\n [Invite Link](https://discord.com/oauth2/authorize?client_id=887338938002472971&permissions=412353895745&scope=bot)`
      )
      .setURL(
        `https://discord.com/oauth2/authorize?client_id=887338938002472971&permissions=412353895745&scope=bot`
      )
      .setColor("RANDOM");
    return message.channel.send(invite);
  }
};
