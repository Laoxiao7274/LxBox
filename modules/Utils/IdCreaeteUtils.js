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
        var teamList = IdCreateUtils.teamListFile.get("teamList");
        //初始状态
        if (teamList.length == 0)
            return 0;
        for (var i = 0; i < 100000; i++) {
            var result = false;
            for (var _i = 0, teamList_1 = teamList; _i < teamList_1.length; _i++) {
                var team = teamList_1[_i];
                if (team.id == i) {
                    //存在此id
                    result = true;
                    break;
                }
            }
            //存在此ID继续循环
            if (result)
                continue;
            //不存在此ID
            else
                return i;
        }
        return -1;
    };
    /** 队伍列表文件 */
    IdCreateUtils.teamListFile = new JsonConfigFile("./plugins/LxBox/data/teamList.json");
    return IdCreateUtils;
}());
exports.IdCreateUtils = IdCreateUtils;
