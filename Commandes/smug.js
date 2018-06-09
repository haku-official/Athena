const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;



module.exports.run = async (bot, message, args) => {


    var gifs = ["https://media1.tenor.com/images/1fe93596a8a0f84078b936305b319c55/tenor.gif?itemid=6194051", "https://media1.tenor.com/images/f9b7309b23cb2071f5ed70e1e33c73b5/tenor.gif?itemid=10059356", "https://media1.tenor.com/images/d9b3127da3f9419cbb28f9f7c00860d8/tenor.gif?itemid=9588226", "https://media1.tenor.com/images/a003e558b8373a80eaa7622ea0a78858/tenor.gif?itemid=4990978","https://media1.tenor.com/images/06a06df0112127f4dadcd8497829a13d/tenor.gif?itemid=9385428"];

    let embed = new Discord.RichEmbed()
        .setColor("#002b80")
        .setImage(gifs[Math.floor(Math.random() * gifs.length)])
        .setFooter("#002b80")

    message.channel.send(embed);

};

exports.help = {
    name: "smug",
    description: "Make some poke",
    usage: "poke"
};
