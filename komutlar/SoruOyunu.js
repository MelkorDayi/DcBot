const Discord = require('discord.js');

const cevaplar = [
    "evet",
    "hayır",
    "belki",
    "olabilir",
    "daha sonra tekrar sor",
    "imkansız",
	"sanane",
	"banane",
	"nadiren",
	"ney dede mi ?",
	"tamam",
	"o iş bende",
	"yaparım , yaparım sen rahat ol"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir soru belirt. **Doğru Kullanım**: ?8ball <soru>')
    else message.channel.send(cevap)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sor',
  description: 'Sihirli bot sorularınızı cevaplar!',
  usage: 'sor <soru>'
};
