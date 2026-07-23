const express = require('express');
const router = express.Router();

router.get('/discord', async (req, res) => {
    const guildId = process.env.DISCORD_GUILD_ID || null
    const guild = guildId ? await fetch(`https://discord.com/api/guilds/${guildId}/widget.json`, {timeout: 5000}) : null
    res.render('discord.html', {guild: await guild.json()})
})

module.exports = router
