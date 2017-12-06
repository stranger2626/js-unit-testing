'use strict';

const path = require('path');
// instead of relative path with '../../'
// it is better to use path.resolve
//const readData = require('../lib/readData');
const readData = require(path.resolve('lib/readData'));

describe('readData', () => {

    it('should read data from from properties file', () => {
        let data = readData('somefile.properties');
        expect(data).toBe('data from properties file');
    });

    it('should read data from from csv file', () => {
        let data = readData('somefile.csv');
        expect(data).toBe('data from csv file');
    });

    it('should read data from from json file', () => {
        let data = readData('test/test-data/test.json');
        expect(data.data).toBe('data from json file');
    });

    it('should read data from from yml file', () => {
        let data = readData('somefile.yml');
        expect(data).toBe('data from yml file');
    });

    it('should read data from from xlsx file', () => {
        let data = readData('somefile.xlsx');
        expect(data).toBe('data from xlsx file');
    });
});