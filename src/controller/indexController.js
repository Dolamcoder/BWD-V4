const getHome = (req, res) => {
    res.render('index.ejs', { user: req.session.user});
}
const getAdvise = (req, res) => {
    console.log("User trong session:", req.session.user);
    res.render('advise.ejs',  { user: req.session.user});
}
const getLogin = (req, res) => {
    res.render('login.ejs');
}

const getProfile = (req, res) => {
    res.render('profile.ejs', { user: req.session.user});
}
const getListGV = (req, res) =>{
    res.render('GVList.ejs', { user: req.session.user});
}
module.exports = {
    getHome,
    getAdvise,
    getLogin,
    getProfile,
    getListGV
}