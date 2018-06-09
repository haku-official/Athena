const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;



module.exports.run = async (bot, message, args) => {

    if (args[0] == "help") {
        message.reply("Usage: !slap <user>");
        return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rUser) return message.channel.send("Je ne trouve pas l'utilisateur.");

    var gifs = ["http://media.topito.com/wp-content/uploads/2016/03/5978405_orig.gif", "http://3.bp.blogspot.com/-CHYXl4bcgA0/UYGNzdDooBI/AAAAAAAADSY/MgmWVYn5ZR0/s320/2828+-+animated_gif+slap+umineko_no_naku_koro_ni+ushiromiya_maria+ushiromiya_rosa.gif", "https://78.media.tumblr.com/tumblr_ls57ox8e0K1qagrb6o1_500.gif", "https://reallifeanime.files.wordpress.com/2014/06/akari-slap.gif","http://img1.wikia.nocookie.net/__cb20130131011837/adventuretimewithfinnandjake/images/c/cd/Slap.gif.gif"];

    let embed = new Discord.RichEmbed()
        .setColor("#002b80")
        .setAuthor("ACTION", "https://cdn.discordapp.com/attachments/404897408548470796/414675570237112330/364443168470597633.png")
        .addField("✋", message.author.toString() + " give a slap to " + rUser.user.toString())
        .setImage(gifs[Math.floor(Math.random() * gifs.length)])
        .setFooter("Athena Developed by Ikko | V1.0")

    message.channel.send(embed);

};

exports.help = {
    name: "slap",
    description: "Make some punch",
    usage: "punch"
};
