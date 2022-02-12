const express = require('express');
const { Client, MessageEmbed } = require('discord.js-selfbot');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.-log(Date.now() + " WillyMortan");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı!`);
});
    let sent = [];
client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    

    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let wastyy = await data.get(msg.author.id)
        
        if (wastyy === 1) {
        } else {
          
          if(sent.includes(msg.author.id)) return;
          sent.push(msg.author.id)
                    msg.channel.startTyping();
          await msg.channel.send("")
          await msg.channel.stopTyping();
          await sleep(7000)
 
          
          
          
      }
      }
    }
  }
})


client.on("guildCreate", wasty => {

  });


client.on("ready", () => {
      setInterval(() => {
       let wasty = client.channels.cache.get("940932670500778004") // spam yapacağı kanalın id si


       wasty.send("!!bahiş 150000")


      }, 3000);
})

client.on("ready", () => {
      setInterval(() => {
       let wasty = client.channels.cache.get("940932670500778004") // spam yapacağı kanalın id si


       wasty.send("!!bahiş 150000")


      }, 3000);
})

client.on("ready", () => {
      setInterval(() => {
       let wasty = client.channels.cache.get("940932670500778004") // spam yapacağı kanalın id si


       wasty.send("!!bahiş 150000")


      }, 3000);
})






client.login(process.env.token) // tokeni .env e taşıdım
