"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorConstant = void 0;
var ErrorConstant = /** @class */ (function () {
    function ErrorConstant() {
    }
    ErrorConstant.HAVE_TEAM = "\u4F60\u5DF2\u7ECF\u62E5\u6709\u961F\u4F0D\u4E86";
    ErrorConstant.NOT_IN_THIS_TEAM = "\u8BE5\u73A9\u5BB6\u4E0D\u5728\u8FD9\u4E2A\u961F\u4F0D\u4E2D";
    ErrorConstant.DONT_HAVE_TEAM = "\u8BE5\u73A9\u5BB6\u4E0D\u5B58\u5728\u961F\u4F0D";
    ErrorConstant.CANT_TRANSFER_SELF = "\u65E0\u6CD5\u8F6C\u8BA9\u81EA\u5DF1";
    ErrorConstant.IS_OTHER_CAPTAIN = "\u8BE5\u73A9\u5BB6\u662F\u5176\u4ED6\u961F\u4F0D\u961F\u957F";
    ErrorConstant.TEAM_DONT_EXIST = "\u8BE5\u961F\u4F0D\u4E0D\u5B58\u5728";
    return ErrorConstant;
}());
exports.ErrorConstant = ErrorConstant;
