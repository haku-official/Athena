var Discord = require('discord.js');

exports.run = (bot, msg, args) => {

        var embed = new Discord.RichEmbed()
            .setColor("#002b80")
        .setThumbnail("https://cdn.discordapp.com/attachments/404897408548470796/416735269291819018/316264057659326464.png")
            .setAuthor(`Your connection speed`, 'https://cdn.discordapp.com/attachments/404897408548470796/414675570237112330/364443168470597633.png')
        .addField("🔧 | API", `**l'atence de** ${Math.round(bot.ping)}**ms**`, true)
        .addField("👩 | pseudo", msg.author.username , true)
            .setFooter("Athena Developed by Ikko | V1.0")
        .setTimestamp()
      
    
    
    msg.delete();
    msg.channel.send("loading..").then(m => m.edit(embed) );
    
  };
  
  
  
  exports.help = {
    name: 'ping',
    description: 'It... like... pings. Then Pongs. And it\'s not Ping Pong.',
    usage: 'ping'
  };