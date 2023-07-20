function receivesAFunction (callback) {
    callback();
} 
function returnsANamedFunction () {
    return function result() {
    }
}
function returnsAnAnonymousFunction () {
    return function () {
    }
}

