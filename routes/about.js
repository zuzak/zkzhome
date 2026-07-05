const express = require('express');
const router = express.Router();

const packagejson = require('../package.json')

router.get('/about', async (req, res) => {
    res.render('about.html', {
        dependencies: Object.keys(packagejson.dependencies)
    })
})

module.exports = router
