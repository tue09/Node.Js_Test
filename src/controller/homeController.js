const getHomePage = (req, res) =>{
    return res.render('homePage.ejs')
}

const getTUe = (req, res) => {
    res.render('sample.ejs')
}

const getNew = (req, res) => {
    res.send('<h1>Hello tue qua dang cap di hhahehe</h1>')
}

module.exports = {
    getHomePage, getTUe, getNew
}
