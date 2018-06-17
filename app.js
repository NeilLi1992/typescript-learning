function makeArray(naem) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray("Yong", 1, 2, 6));
//# sourceMappingURL=app.js.map