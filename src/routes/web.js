const express = require('express')
const router = express.Router();
const {getHomePage, getTUe, getNew} = require('../controller/homeController')


router.get('/', getHomePage)
router.get('/tue', getTUe )
router.get('/hehe', getNew)

module.exports = router