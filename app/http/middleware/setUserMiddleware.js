const User = require(`${config.models}/user`)
module.exports.setUsermiddleware = async (req, res, next) => {

    if (process.env.NODE_ENV == 'development') {
        if (req.session.userId) {
            const user = await User.findOne({ _id: req.session.userId });

            req.user = user;
            res.locals.user = user;
        }
        next();
    } else {
        const user = await User.findOne({ _id: '6169a2ae37a25e31254ce2a5' });

        req.user = user;
        res.locals.user = user;


        next();
    }


}