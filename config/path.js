const path = require('path');
module.exports = {
    controller: path.resolve('app', 'http', 'controllers'),
    models: path.resolve('app', 'models'),
    app: path.resolve('app'),
    adminController: path.resolve('app', 'http', 'controllers', 'admin'),
    frontController: path.resolve('app', 'http', 'controllers', 'front'),
    http: path.resolve('app', 'http'),
    setting: path.resolve('config')
}