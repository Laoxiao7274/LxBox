"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdCreateUtils = void 0;
var IdCreateUtils = /** @class */ (function () {
    function IdCreateUtils() {
    }
    /**
     * 获取新的TeamId
     * @returns 最新的TeamId
     */
    IdCreateUtils.TeamId = function () {
        var teamList = this.teamListFile.get("teamList");
        for (var i = 0; i < 100000; i++) {
            if (teamList[i].id == i)
                continue;
            return i;
        }
        return -1;
    };
    /** 队伍列表文件 */
    IdCreateUtils.teamListFile = new JsonConfigFile("./plugins/LxBox/data/teamList.json");
    return IdCreateUtils;
}());
exports.IdCreateUtils = IdCreateUtils;
