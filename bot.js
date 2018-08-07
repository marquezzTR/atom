const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = new Discord.RichEmbed();
var fs = require('fs');

// -->COMMANDS<--

bot.on('guildMemberAdd',member =>{
    member.send('**Selam Aşkım 🌹, \nSeni Takıldığım Sunucuya Davet Ediyorum  \nKayıt Yaptırmayı Unutma Lütfenn  ** https://discord.gg/4kSdf5B');

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);

});


bot.on('guildMemberRemove', member=>{
   
});



bot.on('ready',()=> {
console.log('NEGRONN');

});

bot.login(process.env.BOT_TOKEN);
