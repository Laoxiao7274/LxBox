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
        /**
         * 放置权限
         */
        mc.listen("onPlaceBlock", function (player, block) {
            if (ll.hasExported("LB_API_PER", "PLACE_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "PLACE_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
        });
        /**
         * 破坏方块
         */
        mc.listen("onDestroyBlock", function (player, block) {
            if (ll.hasExported("LB_API_PER", "BREAK_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "BREAK_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
        });
        /**
         * 方块交互
         */
        //防抖变量
        var a = false;
        mc.listen("onUseItemOn", function (player, item, block, side, pos) {
            //防抖操作
            if (a)
                return false;
            a = true;
            log("item:".concat(item.type));
            log("block:".concat(block.type));
            //代码部分
            /**
             * 所有方块
             */
            if (ll.hasExported("LB_API_PER", "INTERACTION_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "INTERACTION_CALLBACK");
                if (!PLACE_CALLBACK(player, item, block, side, pos))
                    return false;
            }
            /**
             * 铁砧交互
             */
            if (ll.hasExported("LB_API_PER", "ANVIL_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "ANVIL_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
            /**
             * 按钮交互
             */
            if (ll.hasExported("LB_API_PER", "BUTTON_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "BUTTON_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
            /**
             * 床交互
             */
            if (ll.hasExported("LB_API_PER", "BED_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "BED_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
            /**
             * 门和陷阱门
             */
            if (ll.hasExported("LB_API_PER", "DOOR_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "DOOR_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
            /**
             * 信标
             */
            if (ll.hasExported("LB_API_PER", "BEACON_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "BEACON_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
            /**
             * 酿造台
             */
            if (ll.hasExported("LB_API_PER", "BREW_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "BREW_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
            /**
             * 桶
             */
            if (ll.hasExported("LB_API_PER", "BARREL_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "BARREL_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
            /**
             * 蜂箱
             */
            if (ll.hasExported("LB_API_PER", "BEEGIVE_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "BEEGIVE_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
            /**
             * 蜜蜂巢
             */
            if (ll.hasExported("LB_API_PER", "BEE_NEST_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "BEE_NEST_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
            /**
             * 堆肥桶
             */
            if (ll.hasExported("LB_API_PER", "COMPOST_BUCKET_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "COMPOST_BUCKET_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
            /**
             * 熔炉,烟熏炉和篝火
             */
            if (ll.hasExported("LB_API_PER", "FURNACE_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "FURNACE_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
            /**
             * 附魔台
             */
            if (ll.hasExported("LB_API_PER", "ENCHATMENT_TABLE_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "ENCHATMENT_TABLE_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
            /**
             * 唱片机和音符盒
             */
            if (ll.hasExported("LB_API_PER", "WORKBENCH_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "WORKBENCH_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
            /**
             * 拉杆
             */
            if (ll.hasExported("LB_API_PER", "LEVER_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "LEVER_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
            /**
             * 红石相关方块
             */
            if (ll.hasExported("LB_API_PER", "ABOUT_REDSTOBE_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "ABOUT_REDSTOBE_CALLBACK");
                //TODO:进行红石方块判断
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
            /**
             * 龙蛋
             */
            if (ll.hasExported("LB_API_PER", "DRAGON_EGG_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "DRAGON_EGG_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
            /**
             * 工作台
             */
            if (ll.hasExported("LB_API_PER", "RECORD_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "RECORD_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
            /**
             * 采摘浆果
             */
            if (ll.hasExported("LB_API_PER", "PICK_BARRIES_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "PICK_BARRIES_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
            /**
             * 吃蛋糕
             */
            if (ll.hasExported("LB_API_PER", "EAT_CAKE")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "EAT_CAKE");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
            /**
             * 使用桶
             */
            if (ll.hasExported("LB_API_PER", "USE_BUCKET_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "USE_BUCKET_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
            /**
             * 使用染料
             */
            if (ll.hasExported("LB_API_PER", "USE_DYE_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "USE_DYE_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
            /**
             * 使用生物蛋
             */
            if (ll.hasExported("LB_API_PER", "USE_EGG_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "USE_EGG_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
            /**
             * 村民交易
             */
            /**
             *
             */
            //防抖操作
            setTimeout(function () { a = false; }, 100);
        });
        /**
         * 所有容器
         */
        mc.listen("onOpenContainer", function (player, block) {
            if (ll.hasExported("LB_API_PER", "CONTAINER_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "CONTAINER_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
        });
        /**
         * 物品展示框
         */
        mc.listen("onUseFrameBlock", function (player, block) {
            if (ll.hasExported("LB_API_PER", "CONTAINER_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "CONTAINER_CALLBACK");
                if (!PLACE_CALLBACK(player, block))
                    return false;
            }
        });
        /**
         * 动物繁殖
         */
        mc.listen("onMobTrySpawn", function (typeName, pos) {
            if (ll.hasExported("LB_API_PER", "REPRODUCE_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "REPRODUCE_CALLBACK");
                if (!PLACE_CALLBACK(typeName, pos))
                    return false;
            }
        });
        /**
        * 交通工具，包括船，矿车和可骑乘的动物，如马等。
        */
        mc.listen("onRide", function (entity1, entity2) {
            if (ll.hasExported("LB_API_PER", "TRANSPORTATION_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "TRANSPORTATION_CALLBACK");
                if (!PLACE_CALLBACK(entity1, entity2))
                    return false;
            }
        });
        /**
         * 拾取物品
         */
        mc.listen("onTakeItem", function (player, entity, item) {
            if (ll.hasExported("LB_API_PER", "PICK_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "PICK_CALLBACK");
                if (!PLACE_CALLBACK(player, entity, item))
                    return false;
            }
        });
        /**
         * 丢弃物品
         */
        mc.listen("onDropItem", function (player, item) {
            if (ll.hasExported("LB_API_PER", "DROP_ITEM")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "DROP_ITEM");
                if (!PLACE_CALLBACK(player, item))
                    return false;
            }
        });
        /**
         * 火蔓延
         */
        mc.listen("onFireSpread", function (pos) {
            if (ll.hasExported("LB_API_PER", "FIRE_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "FIRE_CALLBACK");
                if (!PLACE_CALLBACK(pos))
                    return false;
            }
        });
        /**
         * 攻击实体
         */
        mc.listen("onAttackEntity", function (player, entity) {
            if (ll.hasExported("LB_API_PER", "ATTACK_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "ATTACK_CALLBACK");
                if (!PLACE_CALLBACK(player, entity))
                    return false;
            }
        });
        /**
         * 爆炸
         */
        mc.listen("onBlockExplode", function (source, pos, radius, maxResistance, isDestroy, isFire) {
            if (ll.hasExported("LB_API_PER", "TNT_CALLBACK")) {
                //判断函数导入
                var PLACE_CALLBACK = ll.imports("LB_API_PER", "TNT_CALLBACK");
                if (!PLACE_CALLBACK(source, pos, radius, maxResistance, isDestroy, isFire))
                    return false;
            }
        });
    };
    return Protect;
}());
exports.Protect = Protect;
