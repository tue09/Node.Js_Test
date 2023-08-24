const getHomePage = (req, res) =>{
    return res.render('homePage.ejs')
}

const getBlog = (req, res) => {
    res.render('blog.ejs')
}

const getLogIn = (req, res) => {
    res.render('logIn.ejs')
}

const getSignUp = (req, res) => {
    res.render('signUp.ejs')
}

module.exports = {
    getHomePage, getBlog, getLogIn, getSignUp
}
