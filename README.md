This project a node.js mini framework.


instagram => @alihamzehei
telegram => @alihamzehei2021
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the production mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `database : mongoDB`

install [https://docs.mongodb.com](https://docs.mongodb.com/manual/installation/).

### `routes`

/login 
/register
/admin


### `vaidation errors message`

/config/errors.js

### `database config`

/config/database.js

### `helpers function`

/config/helpers.js

exmple :
```bash
module.exports = {
    old: (old, key, def = null) => {
        if (old) {
            if (old[0][key]) {
                return old[0][key];
            } else if (def) {
                return def;
            }
        }
        return ''
    },
    
    example : () => {
      your codes
    }
}
In this file, the definition of global flexibility can be used as follows

app.example();
```




open terminal and create .env file:

```bash
cp .env.example .env
nano .env
```
$ tree -d

$ ./tree-md .
# Project tree

.
 * [app](./app)
   * [http](./app/http)
    * [controller](./app/http/controller)
    * [middleware](./app/http/middleware)
    * [request](./app/http/request)  
   * [models](./app/models)
 * [config](./config)
   * [database.js](./config/database.js)
   * [errors.js](./config/errors.js)
   * [helpers.js](./config/helpers.js)
   * [path.js](./config/path.js)
 * [file_in_root.ext](./file_in_root.ext)
 * [README.md](./README.md)
 * [dir3](./dir3)
