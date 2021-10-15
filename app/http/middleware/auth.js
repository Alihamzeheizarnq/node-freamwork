const User = require(`${config.models}/user`)
module.exports.auth = async (req, res, next) => {

    if (req.user) {
        const user = await User.find({ _id: req.user._id });
        if (!user) {
            res.redirect('/login');
        } else {
            next();
        }
    } else {
        res.redirect('/login');
    }


}