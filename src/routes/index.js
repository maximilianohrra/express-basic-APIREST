const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {
    const data = {
        name: 'Hello',
        website: 'World.org'
    };
    res.json(data);
});  

module.exports = router;
