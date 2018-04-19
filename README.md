# edjs-bot

Creadted by: Lightnet

# Required:
 * Nodejs
 * Discordapp
 * Visual Studio Code ( Optional )

# Information:
 By using express and discord.js to manage the bot management.

# Prototype Build:
 * https://glitch.com/edit/#!/lemon-hallway

# Tips:
 * https://discordapp.com/developers/applications/me
 * config environment variables is important if sharing project.

# Setup:
```
main.js
...

callbackURL: 'http://localhost:3000/callback',
...
clientSecret: '',
https://discordapp.com/developers/applications/me/

REDIRECT URI(S)
 * http://localhost:3000/callback

```

.env
```
PROJECT_DOMAIN=""
DISCORDAPIID=""
DISCORDAPISECERT=""
DISCORDAPICALLBACK="http://localhost:3000/callback"
DISCORDBOTTOKEN=""

```
This is a file for environment variables like your operate system path variables.

# Links and References:
 * https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/other-guides/hosting-on-glitchcom.html
 * https://www.npmjs.com/package/passport-discord
 * http://www.lib4dev.com/info/Triforcey/discord-routes/128727103
 * https://www.npmjs.com/package/embed-creator
 * https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/examples/using-embeds-in-messages.html