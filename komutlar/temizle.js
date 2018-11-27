const Discord = require('discord.js');

exports.run = function(client, message, args) {
  let sayi = parseInt(args.join(' '));

  if(sayi.length < 1) {
    return message.reply("Silmem için bir miktar belirt.")
  } else {
        message.channel.bulkDelete(sayi + 1);
    message.channel.send("**" + sayi + "** adet mesaj silindi!!").then(msg =>{
    });
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'temizle',
  description: 'Belirtilen miktarda mesaj siler | Yetkili kişilere özeldir.',
  usage: 'temizle <miktar>'
};
