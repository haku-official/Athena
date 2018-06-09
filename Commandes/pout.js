const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;



module.exports.run = async (bot, message, args) => {


    var gifs = ["https://media1.tenor.com/images/3457a6c12bf62786b765b92dda50c5e5/tenor.gif?itemid=4635711", "https://media1.tenor.com/images/ee06ab519470659d9c397ef8c59d9d40/tenor.gif?itemid=7786934", "https://media1.tenor.com/images/92832fef95eb162e73fe15756ee1bf90/tenor.gif?itemid=6181675", "https://media1.tenor.com/images/0c350d4e4a44a20c0b93aa2d9a6d0346/tenor.gif?itemid=8692729","https://media1.tenor.com/images/c9c9ff2eed3dff5c3b9f7c0c033704da/tenor.gif?itemid=8657468"];

    let embed = new Discord.RichEmbed()
        .setColor("#002b80")
        .setImage(gifs[Math.floor(Math.random() * gifs.length)])
        .setFooter("Athena Developed by Ikko | V1.0")

    message.channel.send(embed);

};

exports.help = {
    name: "pout",
    description: "Make some poke",
    usage: "poke"
}; 