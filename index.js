
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('✅ Bot is online!'));
app.listen(3000, () => console.log('🌐 Web server aktif di port 3000'));

const mineflayer = require('mineflayer');
const bot = mineflayer.createBot({
  host: 'monyxmc.net',
  port: 25565,
  username: 'StrawberryAlt',
  auth: 'offline'
});

bot.once('spawn', () => {
  console.log('✅ Bot berhasil login!');
  bot.chat('/login Selaa123');
  setTimeout(() => {
    bot.activateItem();
    console.log('🖱️ Klik kanan otomatis.');
  }, 4000);
});

bot.on('error', err => console.log('❌ Error:', err));
bot.on('end', () => {
  console.log('🔁 Bot terputus, reconnecting...');
  setTimeout(() => require('child_process')
    .spawn(process.argv[0], process.argv.slice(1), {
      stdio: 'inherit'
    }), 5000);
});
