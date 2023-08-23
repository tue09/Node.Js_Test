const getHomePage = (req, res) =>{
    return res.render('homePage.ejs')
}

const getTUe = (req, res) => {
    res.render('sample.ejs')
}

const getNew = (req, res) => {
    res.send('<h1>Hello hhahehe</h1>')
}

const getFour = (req, res) => {
    res.send("To be 4")
}

module.exports = {
    getHomePage, getTUe, getNew, getFour
}
