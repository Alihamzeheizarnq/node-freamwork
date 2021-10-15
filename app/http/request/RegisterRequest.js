const yup = require("yup");
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
    return new Promise(async (resolve, reject) => {
        try {
            await schema.validate(req.body, { abortEarly: false });
            resolve();
        } catch (err) {

            const errors = [];

            err.inner.forEach(e => {
                const path = e.path;
                const message = e.message;
                errors.push({ message, path, [path]: message })

            });

            const uniqueError = [];

            errors.filter((value) => {
                const has = uniqueError.find(item => item.path === value.path);
                if (!has) {
                    uniqueError.push(value);
                }
            })


            reject(err.errors);
            req.flash('errors', uniqueError);
            req.flash('old', req.body);
            res.redirect(req.path);
        }

    })
}


