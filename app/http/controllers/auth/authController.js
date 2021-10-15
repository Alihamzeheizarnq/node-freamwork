const bcrypt = require('bcrypt');
const Controller = require(`${config.controller}/controller`);
const { LoginRequest } = require(`${config.request}/LoginRequest`);
const { RegisterRequest } = require(`${config.request}/RegisterRequest`);

module.exports = new class authController extends Controller {

    /**
     * @method GET
     * @view auth/login
     */
    login(request, respons) {
        respons.render('auth/login', { title: ' صفحه ورود', layout: 'auth/main' });

    }
    /**
      * @method POST
      * @validation LoginRequest request.data || request.body
     */
    async login_store(request, respons) {

        try {
            const data = await LoginRequest(request, respons);

            const user = await this.model.User.findOne({ email: data.email });

            if (user) {
                bcrypt.compare(data.password, user.password, function (err, isMatch) {
                    if (err) {
                        return new Error(err);
                    }
                    if (isMatch) {

                        request.session.userId = user._id;
                        respons.redirect('/');
                    } else {

                        request.flash('errors', { message: 'اطلاعات وارد شده اشتباه میباشد' });
                        request.flash('old', request.body);
                        respons.redirect('/login');
                    }

                });

            } else {
                request.flash('errors', { message: 'اطلاعات وارد شده اشتباه میباشد' });
                request.flash('old', request.body);
                respons.redirect('/login');

            }


        } catch (error) {

        }


    }
    /**
     * @method GET
     * @view auth/register
     */
    register(request, respons) {
        respons.render('auth/register', { title: ' صفحه ثبت نام', layout: 'auth/main' });
    }
    /**
     * @method POST
     * @validation RegisterRequest request.data || request.body
     */
    async register_store(request, respons) {
        try {
            await RegisterRequest(request, respons);

            const user = new this.model.User({
                name: request.body.name,
                email: request.body.email,
                password: request.body.password,
            }).save();

            const users = await user;
            request.session.userId = users._id;
            respons.redirect('/');

        } catch (error) {
            console.log(error);
        }


    }
}