const Discord = require("discord.js");
const ms = require("ms");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;

module.exports.run = async (bot, message, args) => {


    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No can do.");
    if (args[0] == "help") {
        message.reply("Usage: !tempmute <user> <1s/m/h/d>");
        return;
    }
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Couldn't find user.");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
    let reason = args.slice(2).join(" ");
    if (!reason) return message.reply("Please supply a reason.");

    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "muted",
                color: "#33cccc",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
    //end of create role
    let mutetime = args[1];
    if (!mutetime) return message.reply("You must specify the time");

    message.delete().catch(O_o => { });

    try {
        await tomute.send(`You were muted during ${mutetime}.`)
    } catch (e) {
        message.channel.send(`A user has been muted... but their DMs are locked. They will be muted for ${mutetime}`)
    }

    let muteembed = new Discord.RichEmbed()
        .setDescription(`Command executed by ${message.author}`)
        .setColor("#33cccc")
        .addField("Muted user", tomute)
        .addField("Mute rendering in", message.channel)
        .addField("The", message.createdAt)
        .addField("During", mutetime)
        .addField("Reason:", reason);

    let incidentschannel = message.guild.channels.find(`name`, "incident");
    if (!incidentschannel) return message.reply("Please create a incidents channel first!");
    incidentschannel.send(muteembed);

    await (tomute.addRole(muterole.id));

    setTimeout(function () {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> is no longer mute`);
    }, ms(mutetime));


    //end of module
}

module.exports.help = {
    name: "tempmute"
}