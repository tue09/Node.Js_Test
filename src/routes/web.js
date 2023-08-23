const express = require('express')
const router = express.Router();
const {getHomePage, getBlog, getContacts, getLogIn, getSignUp} = require('../controller/homeController')


router.get('/', getHomePage)
router.get('/Blog', getBlog )
router.get('/Contacts', getContacts)
router.get('/Log_in', getLogIn)
router.get('/Sign_Up', getSignUp)

module.exports = router