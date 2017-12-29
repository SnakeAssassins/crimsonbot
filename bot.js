//turns on bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

/*function crimsonban (banUser, banReason){
    banUser.ban(banReason)
    message.channel.send('BEGONE THOT');*/
};
//simple responses
client.on('message', message => {
    if (message.content.includes('ping')) {
    	message.channel.send('pong');
  	};
});

client.on('message', message => {
//user bans via commands  
 if(message.member.roles.hasPermission("banMembers") ){
     if (message.content === 'King Crimson, erase '){
        crimsonban(message.mentions.members.first(),'decided by moderator');
        };
    };
};);
          
client.login(process.env.BOT_TOKEN);
