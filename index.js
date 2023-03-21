'use strict';

const config = require('./config');
const helper = require('./helper');

if (config.VARS_VALIDATED) {
    const checkVars = require('./graph.checkVars');
    (async () => {
        const cv = await checkVars();

        if (cv) {
            const server = require('./server');
            server.listen(config.LDAP_PORT, "0.0.0.0", function () {
                var packagejson = require('./package.json');
                console.log("server.js", ' ---->', packagejson.name, '@', packagejson.version);
                console.log("server.js", ' ---->', 'LDAP server up', '@', server.url);
            });
        }
    })();
} else {
    helper.error('index.js', 'start', "This config is invalid. Please fix the errors:");
    helper.error('index.js', 'start', config.VARS_ERRORS);
}