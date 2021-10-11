
const res = require('express/lib/response');
const path = require('path');

module.exports = new class homeController {

    /**
     * @param {*} request
     * @param {*} respons
     */
    index(request, respons) {

        if(request.session.view){
            console.log('hello')
            request.session.view++;
        }else{
            request.session.view = 1;
        }

        respons.render('admin/index' , {title : 'پنل مدیریت' , count : request.session.view});

    }
}