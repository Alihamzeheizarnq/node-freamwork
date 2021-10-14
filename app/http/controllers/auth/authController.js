const res = require("express/lib/response");
const { LoginRequest } = require("../../request/LoginRequest");
const { RegisterRequest } = require("../../request/RegisterRequest");

module.exports = new class homeController {

    /**
     * @method GET
     */
    login(request, respons) {
        respons.render('auth/login', { title: ' صفحه ورود', layout: 'auth/main' });

    }
    /**
      * @method POST
     */
    login_store(request, respons) {
        LoginRequest(request, respons).then(() => {
            respons.redirect('/admin');
        })

    }
    /**
     * @method GET
     */
    register(request, respons) {


        respons.render('auth/register', { title: ' صفحه ثبت نام', layout: 'auth/main' });

    }
    /**
     * @method POST
     */
    register_store(request, respons) {
        RegisterRequest(request, respons).then(() => {
            respons.redirect('/admin');
        }).catch((err) => { });

    }
}