'use strict';

const gulp = require('gulp');
const reporters = require('jasmine-reporters');
const jasmine = require('gulp-jasmine');
const istanbul = require('gulp-istanbul');
const del = require('del');
const execSync = require('child_process').execSync;


const sources = [
    'index.js',
    'lib/**/*.js'
];

const testSources = [
    'test/**/*.spec.js'
];

const jasmineOpts = {
    reporter: [
        new reporters.TerminalReporter({
            verbosity: 3,
            color: true,
            showStack: true
        }),
        new reporters.JUnitXmlReporter({
            savePath: './report/junit/'
        }),
    ],
    includeStackTrace: true,
    verbose: true,
    timeout: 30000
};

gulp.task('clean', () => del('report/**'));


gulp.task('test:coverage:prepare', () => {
    return gulp.src(sources)
        .pipe(istanbul({
            includeUntested: true
        }))
        .pipe(istanbul.hookRequire());
});

gulp.task('test:coverage', ['clean', 'test:coverage:prepare'], () => {
    return gulp.src(testSources)
        .pipe(jasmine(jasmineOpts))
        .pipe(istanbul.writeReports({
            dir: './report',
            reporters: ['text-summary', 'html'],
            reportOpts: {dir: './report/coverage'}
        }))
        .pipe(istanbul.enforceThresholds({
            thresholds: {
                global: {
                    statements: 100,
                    functions: 100,
                    branches: 0,
                    lines: 0
                }
            }
        }));
});

gulp.task('lint', () => {
    execSync('npm run lint', {stdio: 'inherit'});
});

gulp.task('test', ['lint' ,'test:coverage'], () => {
    return gulp.src(testSources)
        .pipe(jasmine(jasmineOpts));
});