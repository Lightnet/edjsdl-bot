# edjs-bot

Creadted by: Lightnet

# Required:
 * Nodejs
 * Discordapp
 * Visual Studio Code ( Optional )

# Information:
 By using express and discord.js to build the bot system and management. Using the Webpack and gulp to run auto build tasks. The reason for gulp for this project is to run front and back end builds. For developement on local pc builds.

# Prototype Build:
 * https://glitch.com/edit/#!/edjsdl-bot

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

.env (current project dir file.)
```
PROJECT_DOMAIN=""
DISCORDAPIID=""
DISCORDAPISECERT=""
DISCORDAPICALLBACK="http://localhost:3000/callback"
DISCORDBOTTOKEN=""
```
This is a file for environment variables like your operate system path variables.

# Script builds:
 "gulp default" will build script and server start. It has been config for webpack build for easy clean.

 There are two front end and one backend build. You can check the gulpfile.js for config build for babel javascript. frontGuestWebpackConfig, frontWebpackConfig, and backWebpackConfig.


