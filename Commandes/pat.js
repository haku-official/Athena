const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;



module.exports.run = async (bot, message, args) => {

    if (args[0] == "help") {
        message.reply("Usage: !pat <user>");
        return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rUser) return message.channel.send("I can not find the user.");

    var gifs = ["https://media1.tenor.com/images/005e8df693c0f59e442b0bf95c22d0f5/tenor.gif?itemid=10947495", "https://media1.tenor.com/images/f79a9ec48bde0e592e55447b17ecfbad/tenor.gif?itemid=8053566", "https://media1.tenor.com/images/266e5f9bcb3f3aa87ba39526ee202476/tenor.gif?itemid=5518317", "https://media1.tenor.com/images/70960e87fb9454df6a1d15c96c9ad955/tenor.gif?itemid=10092582","https://media1.tenor.com/images/858aa0c52b7c09c8331815866e07fa94/tenor.gif?itemid=5582959"];

    let embed = new Discord.RichEmbed()
        .setColor("#002b80")
        .setAuthor("ACTION", "https://cdn.discordapp.com/attachments/404897408548470796/414675570237112330/364443168470597633.png")
        .addField("😍", message.author.toString() + " caress the head of " + rUser.user.toString())
        .setImage(gifs[Math.floor(Math.random() * gifs.length)])
        .setFooter("Athena Developed by Ikko | V1.0")

    message.channel.send(embed);

};

exports.help = {
    name: "pat",
    description: "Make some pat",
    usage: "pat"
};
