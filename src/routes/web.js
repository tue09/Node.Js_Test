const express = require('express')

const router = express.Router();
const {getHomePage, getBlog, getLogIn, getSignUp} = require('../controller/homeController')
const {} = require('../controller/logInController')
const {getBasicInformation} = require('../controller/signUpController')
const {getGmailPassword} = require('../controller/signUpBasicInformation')

router.get('/', getHomePage)
router.get('/HomePage', getHomePage)
router.get('/Blog', getBlog )
router.get('/Log_in', getLogIn)
router.get('/Sign_Up', getSignUp)
router.get('/sign_Up/basicInformation', getBasicInformation)
router.get('/sign_up/basicInformation/gmailPassword', getGmailPassword)

module.exports = router