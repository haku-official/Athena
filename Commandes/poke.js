const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;



module.exports.run = async (bot, message, args) => {

    if (args[0] == "help") {
        message.reply("Usage: !poke <user>");
        return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rUser) return message.channel.send("I can not find the user.");

    var gifs = ["https://media1.tenor.com/images/8fe23ec8e2c5e44964e5c11983ff6f41/tenor.gif?itemid=5600215", "https://media1.tenor.com/images/945c3a6ac11a684cccfa4d4b49043a6b/tenor.gif?itemid=9195329", "https://media1.tenor.com/images/3dfb004901c7e258f4a8e661b3e8eeb0/tenor.gif?itemid=5807079", "https://media1.tenor.com/images/4a0bcb6c4a71d68cbeb7c14f791d5d1a/tenor.gif?itemid=5545952","https://media1.tenor.com/images/3b2bfd09965bd77f2a8cb9ba59cedbe4/tenor.gif?itemid=5607667"];

    let embed = new Discord.RichEmbed()
        .setColor("#002b80")
        .setAuthor("ACTION", "https://cdn.discordapp.com/attachments/404897408548470796/414675570237112330/364443168470597633.png")
        .addField("👈", message.author.toString() + " poke " + rUser.user.toString())
        .setImage(gifs[Math.floor(Math.random() * gifs.length)])
        .setFooter("Athena Developed by Ikko | V1.0")

    message.channel.send(embed);

};

exports.help = {
    name: "poke",
    description: "Make some poke",
    usage: "poke"
};
