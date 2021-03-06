const {guildId, channelIdLeave} = require('../config.json');

module.exports = {
    name: 'guildMemberRemove',
    description: 'Untuk mendeteksi jika ada member yang keluar dari server',
	execute(member) {
	    if(member.guild.id === guildId){
            const channelLeave = member.guild.channels.cache.get(channelIdLeave);
            const messageLeave= `**<@${member.id}>\`\`\`\nš Selamat Tinggal ${member.user.tag} š\nš Jangan Lupa Kembali š\nš Terima Kasih Sudah Berkunjung š\`\`\`**`;
            channelLeave.send(messageLeave);
            console.log(`${member.user.username} Telah masuk ke server`);
        };
	},
};