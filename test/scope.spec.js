'use strict';

const path = require('path');
const Scope = require(path.resolve('src/scope'));

describe('Scope', () => {
    it('can be constructed and used as an object', () => {
        let scope = new Scope();
        scope.someProperty = 1;
        expect(scope.someProperty).toBe(1);
    });

    it('calls the watch function with the scope as the argument', () => {
        let scope = new Scope();

        let watchFn = jasmine.createSpy();

        let watchFn2 = jasmine.createSpy();

        scope.$watch(watchFn, () => {});
        scope.$watch(watchFn2, () => {});

        scope.$digest();

        expect(watchFn).toHaveBeenCalledWith(scope);
        expect(watchFn2).toHaveBeenCalledWith(scope);
    });

    it('calls the listener function only when the watched value changes', () => {
        let scope = new Scope();
        scope.watchedValue = 'a';

        let listenerFn = jasmine.createSpy();

        scope.$watch(
            _scope =>  _scope.watchedValue,
            listenerFn
        );

        scope.$digest();
        scope.$digest();

        scope.watchedValue = 'b';

        scope.$digest();
        scope.$digest();
        scope.$digest();

        scope.watchedValue = 'c';

        scope.$digest();

        expect(listenerFn.calls.count()).toEqual(3);
    });
});