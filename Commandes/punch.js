const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;



module.exports.run = async (bot, message, args) => {

    if (args[0] == "help") {
        message.reply("Usage: !punch <user>");
        return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rUser) return message.channel.send("Je ne trouve pas l'utilisateur.");

    var gifs = ["https://media1.tenor.com/images/9cd7bb4452634718acc8159a452c5f77/tenor.gif?itemid=5176493", "https://media1.tenor.com/images/3c95ca85f89068660becde7a31f0f04d/tenor.gif?itemid=4973550", "https://media1.tenor.com/images/aaeeb72c5e21145866d49893791b3f9e/tenor.gif?itemid=5657348", "https://media1.tenor.com/images/79fcb521349b44b7ce51325fd6a25a36/tenor.gif?itemid=10061331","https://media1.tenor.com/images/400facc5d967924bcec752a0a7028ec8/tenor.gif?itemid=4448408"];

    let embed = new Discord.RichEmbed()
        .setColor("#002b80")
        .setAuthor("ACTION", "https://cdn.discordapp.com/attachments/404897408548470796/414675570237112330/364443168470597633.png")
        .addField("👊", message.author.toString() + " give a punch to " + rUser.user.toString())
        .setImage(gifs[Math.floor(Math.random() * gifs.length)])
        .setFooter("Athena Developed by Ikko | V1.0")

    message.channel.send(embed);

};

exports.help = {
    name: "punch",
    description: "Make some punch",
    usage: "punch"
};
