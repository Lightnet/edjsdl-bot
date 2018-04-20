/*


*/
var CommandSet = require('discord-routes').CommandSet;

export default class DSJSBot{

  constructor(client){
    this.client = client;
    this.setup(client);
  }

  setup(client){
    //console.log(client);
    client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
    });
    //client.on('message', msg => {
      //if (msg.content === 'ping') {
        //msg.reply('Pong!');
      //}
    //});
    var commands = this.commands = new CommandSet(client, '!bot');
    // responds to all unrecognized paths with a simple help message
    commands.set('', req => {
      req.reply('Try \'!bot ping\'!');
    });
    // responds to '!bot ping' with 'Pong!'
    commands.set('ping', req => {
      req.reply('Pong!');
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
}