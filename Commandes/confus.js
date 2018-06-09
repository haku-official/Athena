const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;



module.exports.run = async (bot, message, args) => {


    var gifs = ["https://media1.tenor.com/images/e2f34aa9af8c2034373e652125d2a947/tenor.gif?itemid=6091841", "https://media1.tenor.com/images/169d0c53ab1a6a73299cdc288efbe1c9/tenor.gif?itemid=9703590", "https://media1.tenor.com/images/593fff0d8dff90a5f55d7c35f0c603e8/tenor.gif?itemid=4955442", "https://media1.tenor.com/images/74125333c5491a32546ee9e9c3f6231f/tenor.gif?itemid=5155458","https://media1.tenor.com/images/ebce8bdc3a7631790060ca843f8bf251/tenor.gif?itemid=7635986"];

    let embed = new Discord.RichEmbed()
        .setColor("#002b80")
        .setImage(gifs[Math.floor(Math.random() * gifs.length)])
        .setFooter("Athena Developed by Ikko | V1.0")

    message.channel.send(embed);

};

exports.help = {
    name: "confused",
    description: "Make some poke",
    usage: "poke"
};
