'use strict';

var minimist = require('minimist');

function isProduction(processEnv, processArgv) {
    var env = processEnv || process.env;
    var argv = processArgv || process.argv;

    var args = minimist(argv.slice(2));
    if (env.npm_config_development) {
        // allow override with --development, for example `npm run dist --development`
        return false;
    } else {
        // otherwise, check for presence of NODE_ENV=production or --production
        return env.NODE_ENV === 'production' || args.production;
    }
}

module.exports = isProduction;
