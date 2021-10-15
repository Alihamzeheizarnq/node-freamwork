const Mongoose = require("mongoose");

module.exports = new class MongoConnect {
    async connect() {
        try {
            const connect = await Mongoose.connect('mongodb://localhost/post_blog');
            console.log(`CONNCTED DATABASE in ${connect.connection.host}`);
        } catch (error) {
            console.log(`[DATABASE ERROR] => ${error}`);
            process.exit(1);
        }
    }
}