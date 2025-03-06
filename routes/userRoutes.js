const express = require('express');
const UserService = require("../services/userService");
const router = express.Router();

const service = new UserService()

/**
 * Login function
 */
router.post('/login', async (req, res) => {
    try {
        const user = await service.login(req);
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

router.post('/', async (req, res) => {
    try {
        const user = await service.insert(req)
        res.json(user)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

module.exports = router;
