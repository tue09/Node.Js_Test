const express = require('express')
const router = express.Router();
const {getHomePage, getBlog, getLogIn, getSignUp} = require('../controller/homeController')


router.get('/', getHomePage)
router.get('/HomePage', getHomePage)
router.get('/Blog', getBlog )
router.get('/Log_in', getLogIn)
router.get('/Sign_Up', getSignUp)

module.exports = router