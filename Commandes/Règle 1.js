var Discord = require('discord.js');
var bot = new Discord.Client({ disableEveryone: false }, { autoReconnect: true });
var fs = require('fs');

bot.commands = new Discord.Collection();
var commandsList = fs.readFileSync('storage/lois1.txt', 'utf8')

exports.run = (bot, msg, args) => {

    msg.channel.send(commandsList);

};



exports.help = {
    name: 'lois2'
};