const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = async (client, message) => {
    const mention = new RegExp(`^<@!?${ client.user.id }>( |)$`);
    
    const buttons = new MessageActionRow()
	.addComponents(

      new MessageButton()
  		.setStyle("LINK")
		.setLabel('Support server')
		.setURL(`${client.config.supportServer}`),
                      );
	
	if (message.content.match(mention)) {
		const mentionEmbed = new MessageEmbed()
			.setColor(client.config.embedColor)
			.setDescription(
				`My prefix on this server is \`/\` (Slash Command).\nTo get started you can type \`/help\` to see all my commands.`,
			);
		
		message.channel.send({
			embeds: [mentionEmbed],
			components: [buttons],
		});
	}
};
