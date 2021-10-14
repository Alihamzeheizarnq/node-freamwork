const res = require("express/lib/response");
const { LoginRequest } = require("../../request/LoginRequest");
const { RegisterRequest } = require("../../request/RegisterRequest");

module.exports = new class homeController {

    /**
     * @method GET
     * @view auth/login
     */
    login(request, respons) {
        respons.render('auth/login', { title: ' صفحه ورود', layout: 'auth/main' });

    }
    /**
      * @method POST
      * @LoginRequest validation request.data || request.body
     */
    login_store(request, respons) {
        LoginRequest(request, respons).then(() => {
            respons.redirect('/admin');
        })

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
     * @RegisterRequest validation request.data || request.body
     */
    register_store(request, respons) {
        (request, respons).then(() => {
            respons.redirect('/admin');
        }).catch((err) => { });

    }
}