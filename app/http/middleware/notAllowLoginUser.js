const User = require(`${config.models}/user`)
module.exports.notAllowLoginUser = async (req, res, next) => {

        if (!req.session.userId) {
            next(); return;
        }
        const user = await User.findOne({ _id: req.session.userId });

        if (!user) {
            next();
        } else {
            res.redirect('/');
        }





}