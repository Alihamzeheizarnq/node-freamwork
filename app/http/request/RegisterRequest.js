const yup = require("yup");
const { HandelRequest } = require(".");
const User = require(`${config.models}/user`);
const { handelErrors } = require(`${config.setting}/errors`);
yup.setLocale(handelErrors);

yup.addMethod(yup.string, `EmailExists`, function (message, args) {
    return this.test(`EmailExists`, message, async function (value) {
        const { originalValue, path, createError } = this;
        console.log(this)
        const user = await User.findOne({ email: originalValue });
        if (user) {
            return createError({
                message: `این ایمیل قبلا در سامانه ثبت شده است `,
                path
            });
        }
        return true;
    });
});
let schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email().EmailExists(),
    password: yup.string().required().min(6),
    password_confirm: yup.string().oneOf([yup.ref('password'), null], 'مقدار فیلد با مقدار رمز عبور همخوانی ندارد'),

});


module.exports.RegisterRequest = (req, res) => {
    return HandelRequest(req, res, schema);
}


