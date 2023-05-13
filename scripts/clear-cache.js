const rimraf = require('rimraf');
const path = require('path');

const cacheFolder = path.resolve(__dirname, '..', 'node_modules', '.cache');
rimraf.sync(cacheFolder);
