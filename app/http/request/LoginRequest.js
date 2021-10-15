const e = require("connect-flash");
const yup = require("yup");
const { HandelRequest } = require(".");
const { handelErrors } = require(`${config.setting}/errors`);
yup.setLocale(handelErrors);

let schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
});


module.exports.LoginRequest = (req, res) => {
    return HandelRequest(req, res, schema);
}


