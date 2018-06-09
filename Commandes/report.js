const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;

module.exports.run = async (bot, message, args) => {

    if (args[0] == "help") {
        message.reply("Usage: !report <user> <reason>");
        return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rUser) return message.channel.send("I can not find the user.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
        .setDescription("Report")
        .setColor("#002b80")
        .addField("User report", `${rUser}`)
        .addField("Report by", `${message.author}`)
        .addField("Channel", message.channel)
        .addField("The", message.createdAt)
        .addField("Reason:", rreason);

    let reportschannel = message.guild.channels.find(`name`, "report");
    if (!reportschannel) return message.channel.send("Couldn't find reports channel.");


    message.delete().catch(O_o => { });
    reportschannel.send(reportEmbed);

}

module.exports.help = {
    name: "report"
}