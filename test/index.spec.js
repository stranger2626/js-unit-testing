'use strict';

let someClass = require('../index');

describe('someClass', () => {
    let instance;

    beforeAll(() => {
        instance = new someClass();
    });

    it('should allow to call doSomething() for instance of class', () => {
        expect(instance.doSomething).toBeDefined();
        expect(typeof instance.doSomething).toBe('function');
        expect(instance.doSomething()).toBe('I did something !');
    });

    it('should allow to call oneMoreThingToDo() for instance of class', () => {
        expect(instance.oneMoreThingToDo).toBeDefined();
        expect(typeof instance.oneMoreThingToDo).toBe('function');
        expect(instance.oneMoreThingToDo()).toBe('I did something else !');
    });
});