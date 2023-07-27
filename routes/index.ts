import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import { generateImage, useChat } from '../bot/chat';

const gm = 'CQACAgIAAxkBAAMwZMKtfUkDlcv5-5ONyyxAsel--Q4AAgw5AAIoAxhKNXycPZQ9vN8vBA'

const bot = new Telegraf(useRuntimeConfig().BOT_KEY);
bot.command('start', async (ctx) => {
  ctx.sendAudio(gm)
})
bot.on(message('text'), async (ctx) => {
  const msg = ctx.message.text
  ctx.sendChatAction('typing')
  if (msg.startsWith('/img ')) {
    const imgPrompt = msg.split('/img ')[1]
    const res = await generateImage(imgPrompt)
    res.forEach(item => {
      ctx.replyWithPhoto(item.url)
    })
    return
  }
  const res = await useChat(msg)
  res.forEach(item => {
    ctx.reply(item.content)
  })
})

bot.launch()
console.log('Bot is running')