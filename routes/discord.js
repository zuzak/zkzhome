const express = require('express');
const router = express.Router();

router.get('/discord', async (req, res) => {
    const guildId = process.env.DISCORD_GUILD_ID || null
    if (!guildId) return res.render('discord.html')
    const guild = await fetch(`https://discord.com/api/guilds/${guildId}/widget.json`, {timeout: 5000})
    res.render('discord.html', {guild: await guild.json()})
})

module.exports = router
