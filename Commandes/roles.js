const Discord = require('discord.js');

exports.run = (client, message, args) => {

    var osu = message.guild.roles.find(`name`, "Member");//ajouter
    var rip = message.guild.roles.find(`name`, "Visitor");//retirer
    //____________________________________________
    try {
        message.member.removeRole(rip);
        console.log("Le role " + rip.name + " a bien été retiré !");
    }
    catch (err) {
        console.log("Le role " + rip.name + " a voulu être retiré mais le joueur " + message.author.username + " n'appartenait pas à ce rôle");
    }
    //___________________________________________________________________________

    try {
        message.member.addRole(osu);
        console.log("Le role " + osu.name + " a bien ajouté à " + message.author.username + " !");
    }
    catch (err) {
        console.log("Le role " + osu.name + " n'a pas pu être ajouté à " + message.author.username + " !");
    }
    message.delete().catch(O_o => { });
    message.channel.send("```Enter the HQ ...```")

    let enterembed = new Discord.RichEmbed()
        .setDescription(`${message.author} is entered the HQ, Welcome ;)`)
        .setColor("#002b80")
        

    let incidentschannel = message.guild.channels.find(`name`, "général");
    if (!incidentschannel) return message.reply("Please create a incidents channel first!");
    incidentschannel.send(enterembed);
    
};

module.exports.help = {
    name: 'enter'
};
