const yup = require("yup");
const { handelErrors } = require(`${config.setting}/errors`);
yup.setLocale(handelErrors);

let schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    password_confirm: yup.string().oneOf([yup.ref('password') , null] , 'مقدار فیلد با مقدار رمز عبور همخوانی ندارد'),

});


module.exports.RegisterRequest = (req, res) => {
    return new Promise((resolve, reject) => {
        schema.validate(req.body, { abortEarly: false }).then(function () {
            resolve();
        }).catch(function (err) {
            reject(err.errors);
            req.flash('errors', err.errors);
            req.flash('old', req.body);
            res.redirect(req.path);
        });
    })
}