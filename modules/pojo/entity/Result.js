"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
var Result = /** @class */ (function () {
    function Result(result, msg, data) {
        this.result = result;
        this.msg = msg;
        this.data = data;
    }
    Result.success = function (T) {
        if (T === void 0) { T = null; }
        return new Result(true, "", T);
    };
    Result.error = function (msg) {
        return new Result(false, msg, null);
    };
    return Result;
}());
exports.Result = Result;
