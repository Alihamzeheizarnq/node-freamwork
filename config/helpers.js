module.exports = {
    old: (old, key, def = null) => {
        if (old) {
            if (old[0][key]) {
                return old[0][key];
            } else if (def) {
                return def;
            }
        }
        return '';

    }
}