
module.exports = new class homeController {

    /**
     * @param {*} request
     * @param {*} respons
     */
    login(request, respons) {
        respons.render('auth/login', { title: ' صفحه ورود', layout: 'auth/main' });

    }

    login_store(request, respons) {
        respons.render('admin/index', { title: 'پنل مدیریت' });

    }

    register(request, respons) {
        respons.render('auth/register', { title: ' صفحه ثبت نام', layout: 'auth/main' });

    }

    register_store(request, respons) {
        respons.render('admin/index', { title: 'پنل مدیریت' });

    }
}