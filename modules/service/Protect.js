"use strict";
// LiteLoader-AIDS automatic generated
/// <reference path="d:\BDS_api/dts/helperlib/src/index.d.ts"/> 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Protect = void 0;
var Protect = /** @class */ (function () {
    function Protect() {
    }
    /**
     * 权限监听
     */
    Protect.perListen = function () {
        mc.listen("onPlaceBlock", function (player, block) {
            if (ll.hasExported("LB_API_PER", "PLACE_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "PLACE_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
        });
    };
    Protect.export = function () {
        function place_callback(player, block) {
            if (player.hasTag("test"))
                return true;
            log("没有test标签，拦截");
            return false;
        }
        ll.exports(place_callback, "LB_API_PER", "PLACE_CALLBACK");
    };
    return Protect;
}());
exports.Protect = Protect;
