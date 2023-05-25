const { Telegraf } = require("telegraf");

const bot = new Telegraf("5929926257:AAGqHOefwolW-8H_Je3skoj-hG_ZUa0Ycss");

bot.start((ctx) => ctx.reply("Welcome to my new telegram bot!"));
bot.help((ctx) => ctx.reply("Send me your Query"));

bot.on("sticker", (ctx) => ctx.reply("💖"));

bot.on("hi", (ctx) => ctx.reply("Hey there"));

bot.launch();
