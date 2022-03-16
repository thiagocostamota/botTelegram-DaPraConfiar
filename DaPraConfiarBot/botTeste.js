const env = require('./.env')
const Telegraf = require('telegraf')

// Iniciando bot

const bot = new Telegraf(env.token)

bot.start(content =>{
    const from = content.update.message.from

    console.log(from)

    content.reply(`Muito bem-vindo, ${from.first_name}!`)
})

bot.on('text', (content, next)=>{
    content.reply('O bot ainda está sendo trabalhado, por favor entenda.')
    next()
})

bot.startPolling()