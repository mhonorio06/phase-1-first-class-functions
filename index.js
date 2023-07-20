function receivesAFunction (callback) {
    callback();
} 
function returnsANamedFunction () {
    return function result() {
        return "So excited";
    }
}
function returnsAnAnonymousFunction () {
    return function () {
    }
}

