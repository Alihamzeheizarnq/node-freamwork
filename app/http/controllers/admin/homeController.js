
const res = require('express/lib/response');
const path = require('path');

module.exports = new class homeController {

    /**
     * @param {*} request
     * @param {*} respons
     */
    index(request, respons) {

        respons.render('admin/index' , {title : 'پنل مدیریت'});
    }
}