//turns on bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

//simple responses
client.on('message', message => {
    if (message.content.includes('ping')) {
    	message.channel.send('pong');
  	};
});

 //user bans via commands  
 /*if (message.content === 'King Crimson, erase '){
    if(message.member.roles.hasPermission("banMembers") ){
        crimsonban(message.mentions.members.first(),'decided by moderator');
    };
};*/
          
client.login(process.env.BOT_TOKEN);
