/*
	Created by: Lightnet

	Information: Prototype build.
	
	
*/
import RPGData from '../common/RPGData';
import RPGCharacter from '../common/RPGCharacter';

//console.log("RPGData");
//console.log(RPGData);

var CommandSet = require('discord-routes').CommandSet;

export default class DBotFramework{

	constructor(options){
		this.client = options.client || null;
		this.io = options.io || null;
		this.gun = options.gun || null;
		this.setup();

	}

	setup(){
		//console.log(client);
		let client = this.client;
		client.on('ready', () => {
			console.log(`Logged in as ${client.user.tag}!`);
		});
		//client.on('message', msg => {
			//if (msg.content === 'ping') {
				//msg.reply('Pong!');
			//}
		//});
		var commands = this.commands = new CommandSet(client, '!c');
		// responds to all unrecognized paths with a simple help message
		commands.set('', req => {
			req.reply('Try \'!bot ping\'!');
		});
		// responds to '!bot ping' with 'Pong!'
		commands.set('ping', req => {
			req.reply('Pong!');
		});

		commands.set('status', req => {
			req.reply('checking..!');
			this.status(req);
		});

		// hello world
		// '!bot hello world arg1 arg2' should reply with 'arg1 arg2'
		commands.set('hello world', (req, args) => {
			console.log(args);
			req.reply('Hello world! You gave me these arguments: ' + args.join(' '));
		});
		
		// binds to message event listener
		commands.listen();
		console.log("bot commands setup...");
	}

	status(req){
		//!c status
		console.log('status!');
		console.log(req.author.username);
		let gun = this.gun;

		gun.get(req.author.id).once((data)=>{
			//console.log(data);
			if(data != null){
				console.log("used!");
				console.log("data >>> ");
				console.log(data);
			}else{
				console.log("create");
				
				gun.get(req.author.id).put({
					id:req.author.id,
					username:req.author.username,
					hp:100,
					maxhp:100,
					mp:100,
					maxmp:100,
					attack:2,
					defense:1,
					magicattack:1,
					magicdefense:1,
					exp:0,
					nextexp:5,
					level:0,

				});
				
			}
		});
	}

}