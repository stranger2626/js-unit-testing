'use strict';

function Scope() {
    this.$$watchers = [];
}

Scope.prototype.$watch = function (watchFn, listenerFn) {
    let watcher = {
        watchFn: watchFn,
        listenerFn: listenerFn,
        state: void(0)
    };
    this.$$watchers.push(watcher);
};

Scope.prototype.$digest = function () {
    let oldState;
    let newState;
    this.$$watchers.forEach(watcher => {
        newState = watcher.watchFn(this);
        oldState = watcher.state;
        if (newState !== oldState) {
            watcher.state = newState;
            watcher.listenerFn(newState, oldState, this);
        }
    });

};

module.exports = Scope;