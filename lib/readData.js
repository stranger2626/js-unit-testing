'use strict';

const fileDataManager = require('./fileDataManager');

module.exports = function (file) {
    return fileDataManager.byExtension(file)
};