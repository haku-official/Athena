const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if (args[0] == "help") {
        message.reply("Usage: !kick <user> <reason>");
        return;
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!kUser) return message.channel.send("I can not find this user");
    let kReason = args.join(" ").slice(22);
    if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("This person can not be kick");

    let kickEmbed = new Discord.RichEmbed()
        .setDescription("~Kick~")
        .setColor("#002b80")
        .addField("User kick:", `${kUser} with ID ${kUser.id}`)
        .addField("Kick by", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Kick in the channel", message.channel)
        .addField("The", message.createdAt)
        .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "incident");
    if (!kickChannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
    name: "kick"
}