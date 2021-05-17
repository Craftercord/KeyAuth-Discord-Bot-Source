const Discord = require('discord.js');
const db = require('quick.db');
const { default_prefix } = require('./../config.json')

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message) {

        let prefix = await db.get(`prefix_${message.guild.id}`);
        if(prefix === null) prefix = default_prefix;

        const embed = new Discord.MessageEmbed()
        .setTitle('Help\n\n')
        .setThumbnail(client.user.displayAvatarURL())
	.addField('`setseller`', `Sets Seller Key. Run again to change applications \nArgs: **${prefix}setseller**`)
        .addField('`setprefix`', `Change the bot prefix. \nArgs: **${prefix}setprefix**`)
        .addField("Current Bot Prefix Is:", `\`${prefix}\``)
        .setColor("#00FFFF")
        .addField('`add`', `Add key(s). \nArgs: **${prefix}add**`)
        .addField('`del`', `Delete key. \nArgs: **${prefix}del**`)
        .addField('`info`', `Key Information. \nArgs: **${prefix}info**`)
	.addField('`stats`', `Application Statistics. \nArgs: **${prefix}stats**`)
        .addField('`reset`', `Reset key. \nArgs: **${prefix}reset**`)
	.addField('`resethash`', `Reset App Hash. \nArgs: **${prefix}resethash**`)
        .setFooter('KeyAuth Discord Bot', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(embed)
        
    }
}

