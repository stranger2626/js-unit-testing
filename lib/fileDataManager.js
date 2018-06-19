'use strict';

const path = require('path');

class fileDataManager {

    byExtension (fileName) {
        const loadFile = {
            '.json': this.loadJsonFile,
            '.csv': this.loadCsvFile,
            '.yml': this.loadYmlFile,
            '.xlsx': this.loadXlsxFile,
            '.properties': this.loadPropertiesFile
        };
        let ext = path.extname(fileName);
        return loadFile[ext](fileName);
    };

    loadPropertiesFile (fileName) {
        //TODO: implement me
        // probably you want to use https://www.npmjs.com/package/properties
        return 'data from properties file';
    }

    loadCsvFile (fileName) {
        //TODO: implement me
        // probably you want to use https://www.npmjs.com/package/node-csv
        return 'data from csv file';
    }

    loadJsonFile (fileName) {
        return require(path.resolve(fileName));
    }

    loadYmlFile (fileName) {
        //TODO: implement me
        // probably you want to use https://www.npmjs.com/package/js-yaml
        return 'data from yml file';
    }

    loadXlsxFile (fileName) {
        //TODO: implement me
        // probably you want to use  https://www.npmjs.com/package/xlsx
        return 'data from xlsx file';
    }
}

module.exports = new fileDataManager();