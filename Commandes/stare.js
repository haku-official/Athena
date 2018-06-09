const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;



module.exports.run = async (bot, message, args) => {


    var gifs = ["https://media1.tenor.com/images/85c940d2ee0706be3c07805368877af8/tenor.gif?itemid=8503494", "https://media1.tenor.com/images/58adf5859001fe3f1586e87b5d86cebd/tenor.gif?itemid=7025500", "https://media1.tenor.com/images/7e3f3bd07f6e642c2e14ea3b4808539f/tenor.gif?itemid=4748113", "https://media1.tenor.com/images/afd4282d996325f5da7be3c2c963df41/tenor.gif?itemid=4686978","https://media1.tenor.com/images/ea5eb6169a5be7dd3fc66656a5035e86/tenor.gif?itemid=5418502"];

    let embed = new Discord.RichEmbed()
        .setColor("#002b80")
        .setImage(gifs[Math.floor(Math.random() * gifs.length)])
        .setFooter("#002b80")

    message.channel.send(embed);

};

exports.help = {
    name: "stare",
    description: "Make some poke",
    usage: "poke"
}; 