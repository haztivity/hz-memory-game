(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./HzMemoryGameResource"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HzMemoryGameResource_1 = require("./HzMemoryGameResource");
    exports.HzMemoryGameResource = HzMemoryGameResource_1.HzMemoryGameResource;
});
//# sourceMappingURL=HzMemoryGame.js.map