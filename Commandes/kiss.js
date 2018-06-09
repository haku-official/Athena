const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;



module.exports.run = async (bot, message, args) => {

    if (args[0] == "help") {
        message.reply("Usage: !kiss <user>");
        return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rUser) return message.channel.send("I can not find the user.");

    var gifs = ["https://78.media.tumblr.com/40e8d551473cab28d04dc5fdfc0a98ec/tumblr_n473d8T0WX1t0q458o1_500.gif", "https://media1.tenor.com/images/8d702471e66ada086d4b86d64d7d2199/tenor.gif?itemid=5604562", "https://68.media.tumblr.com/c521d91fbe1f038c27617495a2df9a27/tumblr_nvcqiepLGJ1uv28x7o1_500.gif", "http://data.whicdn.com/images/43518843/large.gif","https://78.media.tumblr.com/bdea7d52f950d52e870c26d48a507481/tumblr_nq5xmrWkb21smg2oso1_500.gif"];

    let embed = new Discord.RichEmbed()
        .setColor("#002b80")
        .setAuthor("ACTION", "https://cdn.discordapp.com/attachments/404897408548470796/414675570237112330/364443168470597633.png")
        .addField("😵", message.author.toString() + " give a kiss to " + rUser.user.toString())
        .setImage(gifs[Math.floor(Math.random() * gifs.length)])
        .setFooter("Athena Developed by Ikko | V1.0")

    message.channel.send(embed);

};

exports.help = {
    name: "kiss",
    description: "Make some kiss",
    usage: "kiss"
};

