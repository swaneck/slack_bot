if(!process.env.token) {
	console.log('Error: Specify token in environment ');
	process.exit(1);
}

var Botkit = require('botkit');
var controller = Botkit.slackbot({
	debug: false
});

var bot = controller.spawn({
	token: process.env.token
}).startRTM();

controller.hears(['うおおお'], 'direct_message,direct_mention,mention', function(bot, message){
	bot.reply(message, ':ambulance:');
});
