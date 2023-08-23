const express = require('express')
const router = express.Router();
const {getHomePage, getTUe, getNew, getFour} = require('../controller/homeController')


router.get('/', getHomePage)
router.get('/first', getTUe )
router.get('/second', getNew)
router.get('/third', getFour)

module.exports = router