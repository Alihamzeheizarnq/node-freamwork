
module.exports = new class homeController {

    /**
     * @param {*} request
     * @param {*} respons
     */
    index(request, respons) {

        console.log(request.user);

        respons.render('admin/index', { title: 'پنل مدیریت' });

    }
}