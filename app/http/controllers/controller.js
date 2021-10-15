const User = require(`${config.models}/user`);
module.exports = class Controller {
    constructor() {
        this.model = {
            User
        }
    }
}