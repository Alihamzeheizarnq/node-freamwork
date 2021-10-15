module.exports.HandelRequest = (req, res, schema) => {
    return new Promise(async (resolve, reject) => {
        try {
            await schema.validate(req.body, { abortEarly: false });
            resolve(req.body);
        } catch (err) {

            const errors = [];

            err.inner.forEach(e => {
                const path = e.path;
                const message = e.message;
                errors.push({ message, path, [path]: message })

            });

            const uniqueError = [];

            errors.filter((value) => {
                const has = uniqueError.find(item => item.path === value.path);
                if (!has) {
                    uniqueError.push(value);
                }
            })


            // if (req.headers['accept'] == 'Appliction/json') {
            //     res.status(422).json({ errors: uniqueError });
            //     res.redirect(req.path);
            //     return;
            // }
            reject(err.errors);
            req.flash('errors', uniqueError);
            req.flash('old', req.body);
            res.redirect(req.path);
        }

    })
}