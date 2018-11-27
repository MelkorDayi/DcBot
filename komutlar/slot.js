const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const slots = ['ðŸ‡', 'ðŸŠ', 'ðŸ', 'ðŸ’', 'ðŸ‹'];

exports.run = function(client, message) {

	var slot1 = slots[Math.floor(Math.random() * slots.length)];
	var slot2 = slots[Math.floor(Math.random() * slots.length)];
	var slot3 = slots[Math.floor(Math.random() * slots.length)];

	if (slot1 === slot2 && slot1 === slot3) {
		message.channel.send(stripIndents`
		${slot1} : ${slot2} : ${slot3}
		Tebrikler, kazandÄ±nÄ±z!
		`);
	} else {
		message.channel.send(stripIndents`
		${slot1} : ${slot2} : ${slot3}
		Eyvah, kaybettin!
		`);
	}

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'slot',
  description: 'Slot oyunu oynatýr',
  usage: 'slot'
};
