const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange; 



module.exports.run = async (bot, message, args) => {

    if (args[0] == "help") {
        message.reply("Usage: !hug <user>");
        return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rUser) return message.channel.send("I can not find this user");

    var gifs = ["https://images-ext-1.discordapp.net/external/yjlildKPGqdDr3IbRMzV8dGWetxBHPCNR1rdfsvQh34/http/pa1.narvii.com/6063/0d86d5777a7f94ae1c7ec7562af83c15b5b88ca9_hq.gif", "http://gifimage.net/wp-content/uploads/2017/01/Anime-hug-GIF-Image-Download-27.gif", "https://images-ext-2.discordapp.net/external/a-oo6RE39KEcubhn6TBCS-8Vg-7X1FIF_2pH3nZLUxo/https/media1.giphy.com/media/hi0VuTUqLrmuc/giphy.gif", "https://78.media.tumblr.com/tumblr_mc64jnciQb1rehmufo1_500.gif","https://i.imgur.com/HuxIwck.gif"];

    let embed = new Discord.RichEmbed()
        .setColor("#002b80")
        .setAuthor("ACTION", "https://cdn.discordapp.com/attachments/404897408548470796/414675570237112330/364443168470597633.png")
        .addField("😵", message.author.toString() + " give a hug to " + rUser.user.toString())
        .setImage(gifs[Math.floor(Math.random() * gifs.length)])
        .setFooter("Athena Developed by Ikko | V1.0")

    message.channel.send(embed);

};

exports.help = {
    name: "hug",
    description: "Make some hugs",
    usage: "hug"
};

