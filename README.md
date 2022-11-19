

## 🎧 DJ Boy Source (simple music player🎵)
  <a href="https://discord.com/api/oauth2/authorize?client_id=912607202064367647&permissions=412320394305&scope=bot%20applications.commands">
    <img align="right" src = https://cdn.discordapp.com/avatars/912607202064367647/b0d19617e80687efd54966ec5b9ebd3a.png?size=1024" width=30% >
  </a>

Hi there👋🏻
this source bot writes with love and much works❤️‍🔥
with inviting **"[DJ Boy](https://discord.com/api/oauth2/authorize?client_id=912607202064367647&permissions=412320394305&scope=bot%20applications.commands)"** you can help us to make so many bots in future🫂.
please give **"star ⭐️"** to this project❤️   


some example images about the bot👇🏻

---

**👌🏻Perfect Help Menu For Members:**

  <a href="http://sobhan.epizy.com/">
    <img align="center" src="https://media.discordapp.net/attachments/906230974319300638/1041798984676683876/Discord___cmd___Persian_Czar_Test_Server_-_Google_Chrome_23_08_1401_11_05_20_..png?width=411&height=559" width = 30% />
  </a>

---

**⚒️Worked With Advanced Button Systems:**

  <a href="http://sobhan.epizy.com/">
    <img align="center" src="https://media.discordapp.net/attachments/906230974319300638/1041799572005064704/Discord___cmd___Persian_Czar_Test_Server_-_Google_Chrome_23_08_1401_11_07_57_..png" width = 30% />
    <img align="center" src="https://media.discordapp.net/attachments/906230974319300638/1041799783402184797/Captures_23_08_1401_11_09_40_..png" width = 30% />
  </a>

---

**💻Easy To Setup:**

  <a href="http://sobhan.epizy.com">
    <img align="center" src ="https://media.discordapp.net/attachments/906230974319300638/1041799572797796422/Discord___cmd___Persian_Czar_Test_Server_-_Google_Chrome_23_08_1401_11_07_38_..png?width=589&height=559" width = 30% />
  </a>

---

## 🍴 How Install

for setup your bot, you need put bot secret "Token" in `.env` file and replaced it with `BOT_TOKEN` after that for add bot prefix you need go again in and put your bot `prefix` in `.env` file then replaced it with `BOT_PREFIX` then for working your bot well you have to put bot client id in last file and replaced it with `BOT_CLIENT_ID` 
```js
TOKEN=BOT_TOKEN
PREFIX=BOT_PREFIX
CLIENT_ID=BOT_CLIENT_ID
```

if you need so much configuration about the bot you can go in to the `config.js` file and edit some parameters for customizing your bot, that file addresses is here `/storage/config.js`
```js
//some example code from "config.js"

require('dotenv').config()
module.exports={
  YOUTUBE_API_KEY: "place_youtube_api_key",
  SOUNDCLOUD_CLIENT_ID: "place_soundcloud_client_id",
  PREFIX: process.env.PREFIX,//please don't changes this, you can change it from ".env" file
  TOKEN: process.env.TOKEN, //please don't changes this, you can change it from ".env" file
  SUPPORT_SERVER_LINK: "https://discord.gg/at5Q72HNAx",
  INVITE_LINK: `https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&permissions=412320394305&scope=bot%20applications.commands`,
  SATUS_CHANNEL_ID: '988020102186303608',//place channel id for send some status of bot for tell what servers join and left
  REPORT_CHANNEL_ID: '988020418612961322',//place channel id for send users report messages
  PRUNING: false,//this is for auto loop music queue, please don't touch 
  LOCALE: "en",//for change bot language, bot default language is English
  STAY_TIME: 1600,//plaese don't touch
  DEFAULT_VOLUME: 100,//don't touch 
  MAX_PLAYLIST_SIZE: 10,//for set default maximum playlist length
  owner: ['831934465609302056']
}

```

- if you didn't install source packages you need for install all packages open that👉🏻 `install.bat`

Packages  |  Version  |  Install
------------- | ------------- | -------------
[quick.db](https://www.npmjs.com/package/quick.db)  | Latest ^7.1.3  | `npm install quick.db`
[@discordjs/opus](https://www.npmjs.com/package/@discordjs/opus) | Latest ^0.3.3  | `npm install @discordjs/opus`
[array-move](https://www.npmjs.com/package/array-move) | Lastest ^3.0.1 | `npm install array-move`
[cli-color](https://www.npmjs.com/package/cli-color) | Lastest ^2.0.2 | `npm install cli-color`
[cpu-stat](https://www.npmjs.com/package/cpu-stat) | Lastest ^2.0.1 | `npm install cpu-stat`
[discord.js](https://www.npmjs.com/package/discord.js) | Lastest ^12.5.1 | `npm install discord.js`
[dotenv](https://www.npmjs.com/package/dotenv) | Lastest ^16.0.1 | `npm install dotenv`
[discord-buttons](https://www.npmjs.com/package/discord-buttons) | Lastest ^4.0.0-deprecated | `npm install discord-buttons`
[express](https://www.npmjs.com/package/express) | Lastest ^4.18.1 | `npm install express`
[i18n](https://www.npmjs.com/package/i18n) | Lastest ^0.13.4 | `npm install i18n`
[fs](https://www.npmjs.com/package/fs) | Lastest ^0.0.1-security | `npm install fs`
[lyrics-finder](https://www.npmjs.com/package/lyrics-finder) | Lastest ^21.4.0 | `npm install lyrics-finder`
[moment](https://www.npmjs.com/package/moment) | Lastest ^2.29.3 | `npm install moment`
[simple-youtube-api](https://www.npmjs.com/package/simple-youtube-api) | Lastest ^5.2.1 | `npm install simple-youtube-api`
[soundcloud-downloader](https://www.npmjs.com/package/soundcloud-downloader) | Lastest ^0.2.1 | `npm install soundcloud-downloader`
[string-progressbar](https://www.npmjs.com/package/string-progressbar) | Lastest ^1.0.1 | `npm install string-progressbar`
[ytdl-core](https://www.npmjs.com/package/ytdl-core) | Lastest ^4.11.0 | `npm install ytdl-core`
[ytdl-core-discord](https://www.npmjs.com/package/ytdl-core-discord) | Lastest ^1.3.1 | `npm install ytdl-core-discord`


- if the source packages needs updates you can open that file for update there👉🏻 `update.bat`

- if you install packages and want run your source you need for run your bot open that👉🏻 `start.bat`

- EZPZ your Music bot are installed and running around 🕺

- How run bot in replit or heroco?
that was so easy, after you click that buttons👇🏻 you will create some project like this source with importing this source🎓 and after that with installing bot packages, and place bot some important objects run your bot.

<p align="center">

  <a href="https://heroku.com/deploy?template=https://github.com/Sobhan-SRZA/DJ-Boy/">
    <img align="center" alt="Deploy on Herokucd" src ="https://www.herokucdn.com/deploy/button.svg" >
  </a>

  <a href="https://glitch.com/edit/#!/import/github/Sobhan-SRZA/DJ-Boy/">
    <img align="center" alt="Remix on Glitch" src ="https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg" >
  </a>

  <a href="https://repl.it/github/Sobhan-SRZA/DJ-Boy/">
    <img align="center" alt="Use on Replit" src ="https://repl.it/badge/github/Sobhan-SRZA/DJ-Boy/" >
  </a>
</p>

# **📫 Contact me in :** &nbsp;

<p align="center">
  <a href="https://zil.ink/sobhan.srza">
    <img align="left" src ="https://raw.githubusercontent.com/Sobhan-SRZA/Sobhan-SRZA/main/source/social-media.png" width = 50% >
  </a>
  <a href="https://discord.gg/WMhke7BW7J">
    <img alt="Discord" src="https://img.shields.io/static/v1?message=Discord&logo=discord&label=&color=7289d9&logoColor=white&labelColor=&style=flat" height="30" />
  </a>
  <a href="https://t.me/SobhanSRZA">
    <img alt="Telegram" src="https://img.shields.io/static/v1?message=Telegram&logo=telegram&label=&color=229ED9&logoColor=white&labelColor=&style=flat" height="30" />
  </a>
  <a href="https://www.instagram.com/srza._.gamer/">
    <img alt="Instagram" src="https://img.shields.io/static/v1?message=Instagram&logo=instagram&label=&color=C13584&logoColor=white&labelColor=&style=flat" height="30" />
  </a>
  </a>
  <a href="https://www.twitch.tv/sobhan_srza">
    <img alt="Twitch" src="https://img.shields.io/static/v1?message=Twitch&logo=twitch&label=&color=6441A4&logoColor=white&labelColor=&style=flat" height="30" />
  </a>
  <a href="https://b2n.ir/srza-.-gamer">
    <img alt="YouTube" src="https://img.shields.io/static/v1?message=YouTube&logo=youtube&label=&color=FF0000&logoColor=white&labelColor=&style=flat" height="30" />
  </a>
  <a href="https://github.com/Sobhan-SRZA">
    <img alt="Github" src="https://img.shields.io/static/v1?message=Github&logo=github&label=&color=000000&logoColor=white&labelColor=&style=flat" height="30" />
  </a>
</p>
<p align="right">
  <a href="https://discord.gg/WMhke7BW7J" target="_blank"> 
    <img src="https://discord.com/api/guilds/912596015075455016/widget.png?style=banner2" alt="sizar-team.png">
  </a>
</p>
<p align="center">
  <a href="http://sobhan.epizy.com">
    <img alt="My Discord Account" src="https://discord.c99.nl/widget/theme-1/831934465609302056.png"  />
  </a>
</p>
