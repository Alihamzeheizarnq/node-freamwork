const User = require(`${config.models}/user`)
module.exports.notAllowLoginUser = async (req, res, next) => {

    if (process.env.NODE_ENV == 'development') {
        if (!req.session.userId) {
            next(); return;
        }
        const user = await User.findOne({ _id: req.session.userId });

        if (!user) {
            next();
        } else {
            res.redirect('/');
        }

    } else {
        const user = await User.findOne({ _id: '6169a2ae37a25e31254ce2a5' });

        if (!user) {
            next();
        } else {
            res.redirect('/');
        }
    }



}