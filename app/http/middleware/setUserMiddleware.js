const User = require(`${config.models}/user`)
module.exports.setUsermiddleware = async (req, res, next) => {

        if (req.session.userId) {
            const user = await User.findOne({ _id: req.session.userId });
            
            req.user = user;
            res.locals.user = user;
        }
        next();
  


}