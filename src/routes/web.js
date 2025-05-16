const express = require('express');
const router = express.Router();
const { getHome, getAdvise, getLogin, getProfile, getListGV} = require('../controller/indexController.js');
const accountController = require('../controller/AccountController.js');
router.get('/', getHome);
router.get('/advise', getAdvise);
router.get('/login', getLogin);
router.get('/profile', getProfile);
router.get('/Giangvien', getListGV);
router.post('/register', accountController.createAccount);
router.post('/login', accountController.loginAccount);
router.post('/logout', accountController.xoaSessionUser);
router.get('/check-login', (req, res) => {
    if (req.session && req.session.user) {
        res.json({ loggedIn: true, name: req.session.user.name });
    } else {
        res.json({ loggedIn: false });
    }
});
module.exports = router;