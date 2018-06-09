var Discord = require('discord.js');
var bot = new Discord.Client({ disableEveryone: false }, { autoReconnect: true });
var fs = require('fs');
var botconfig = require("./botconfig.json");
var tokenfile = require("./token.json");
bot.commands = new Discord.Collection();
let purple = botconfig.purple;
let coins;
var commandsList = fs.readFileSync('storage/Bvn.txt', 'utf8')


//  m o n e y


//------------------- C O M M A N D E S  --------------------------------------------------------------

fs.readdir("./Commandes/", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("`Error: This command does not exist");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./Commandes/${f}`);
        console.log(`${f} chargé!`);
        bot.commands.set(props.help.name, props);
    });
});



  

  //--------- CONNEXION DU BOT AVEC STATUS ------------------------
bot.on("ready", async () => {
    console.log(`Athena s'est connecté avec succès!`);
      bot.user.setActivity(` a/help | with Ikko `, {type: "PLAYING"});
    
    });
  
    bot.on('ready', function() {
      bot.user.setUsername("Athena");
      
  });
  //------------------------------------------------------------
  
//bot.on('message', censure => {
 
bot.on("message" , async message => {
    
    
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
   if (message.content.startsWith(prefix)) {
        let commandfile = bot.commands.get(cmd.slice(prefix.length));
        if(commandfile) 
        
      
    {
      
        
      
        commandfile.run(bot,message,args);
    } else {
            message.reply("```❌ | this command does not exist.```");  
        }
    }
  });


bot.on("guildMemberAdd", (member) => {
    if (member.guild.channels.has("450997633775960065")) {
        var chBienvenue = member.guild.channels.find('id', '450997633775960065');
        var embed = new Discord.RichEmbed()
            .setColor("#002b80")
            .setThumbnail(member.user.avatarURL)
            .setAuthor("The user has entered the server 👋🏻", 'https://media.discordapp.net/attachments/404897408548470796/414675570237112330/364443168470597633.png')
            .addField("🙋 | Number of people currently:", member.guild.memberCount, true)
            .setTitle("Welcome : " + member.user.username)
            .setFooter("Athena Développé par Ikko | V1.0");

        chBienvenue.send(embed);
        console.log(member.user.username + "est entré dans le serveur");

        var bembed = new Discord.RichEmbed()
            .setColor("#002b80")
            .setTitle("Welcome " + member.user.username)
            .setImage('https://k44du2.deviantart.com/art/Athena-Overwatch-No-Scanlines-Wallpaper-632515406')

        member.user.send(bembed);

        member.user.send(commandsList);

       

        

    }
});

bot.on("guildMemberRemove", (member) => {
    if (member.guild.channels.has("450997633775960065")) {
        var chBienvenue = member.guild.channels.find('id', '450997633775960065');
        var embed = new Discord.RichEmbed()
            .setColor("#002b80")
            .setThumbnail(member.user.avatarURL)
            .setAuthor("The user has left the server 👋🏻", 'https://media.discordapp.net/attachments/404897408548470796/414675570237112330/364443168470597633.png')
            .addField("🙋 | Number of people currently:", member.guild.memberCount, true)
            .setTitle("Goodbye " + member.user.username)
            .setFooter("Athena Développé par Ikko | V1.0");

        chBienvenue.send(embed);
        console.log(member.user.username + "a quitté le serveur");




    }
})


bot.login(tokenfile.token);


