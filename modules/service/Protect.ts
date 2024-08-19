// LiteLoader-AIDS automatic generated
/// <reference path="d:\BDS_api/dts/helperlib/src/index.d.ts"/> 


export class Protect {

    /**
     * 权限监听
     */
    static perListen() {
        /**
         * 放置权限
         */
        mc.listen("onPlaceBlock", (player: Player, block: Block) => {
            if (ll.hasExported("LB_API_PER", "PLACE_CALLBACK")) {
                //判断函数导入
                const PLACE_CALLBACK = ll.imports("LB_API_PER", "PLACE_CALLBACK")
                if (!PLACE_CALLBACK(player, block)) return false
            }

        })

        /**
         * 破坏方块
         */
        mc.listen("onDestroyBlock", (player: Player, block: Block) => {
            if (ll.hasExported("LB_API_PER", "BREAK_CALLBACK")) {
                //判断函数导入
                const PLACE_CALLBACK = ll.imports("LB_API_PER", "BREAK_CALLBACK")
                if (!PLACE_CALLBACK(player, block)) return false
            }

        })

        /**
         * 方块交互
         */
        //防抖变量
        let a = false
        mc.listen("onUseItemOn", (player: Player, item: Item, block: Block, side: number, pos: FloatPos) => {
            //防抖操作
            if (a) return false
            a = true

            log(`item:${item.type}`)
            log(`block:${block.type}`)

            //代码部分
            /**
             * 所有方块
             */
            if (ll.hasExported("LB_API_PER", "INTERACTION_CALLBACK")) {
                //判断函数导入
                const PLACE_CALLBACK = ll.imports("LB_API_PER", "INTERACTION_CALLBACK")
                if (!PLACE_CALLBACK(player, item, block, side, pos)) return false
            }

            /**
             * 铁砧交互
             */
            if (block.type == "minecraft:anvil") {
                if (ll.hasExported("LB_API_PER", "ANVIL_CALLBACK")) {
                    //判断函数导入
                    const PLACE_CALLBACK = ll.imports("LB_API_PER", "ANVIL_CALLBACK")
                    if (!PLACE_CALLBACK(player, block)) return false
                }
            }


            /**
             * 按钮交互
             */
            if (block.type.includes("button")) {
                if (ll.hasExported("LB_API_PER", "BUTTON_CALLBACK")) {
                    //判断函数导入
                    const PLACE_CALLBACK = ll.imports("LB_API_PER", "BUTTON_CALLBACK")
                    if (!PLACE_CALLBACK(player, block)) return false
                }
            }


            /**
             * 床交互
             */
            if (block.type == "minecraft:bed") {
                if (ll.hasExported("LB_API_PER", "BED_CALLBACK")) {
                    //判断函数导入
                    const PLACE_CALLBACK = ll.imports("LB_API_PER", "BED_CALLBACK")
                    if (!PLACE_CALLBACK(player, block)) return false
                }
            }

            /**
             * 门和陷阱门
             */
            if (block.type.includes("door")) {
                if (ll.hasExported("LB_API_PER", "DOOR_CALLBACK")) {
                    //判断函数导入
                    const PLACE_CALLBACK = ll.imports("LB_API_PER", "DOOR_CALLBACK")
                    if (!PLACE_CALLBACK(player, block)) return false
                }

            }

            /**
             * 信标
             */
            if (block.type == "minecraft:beacon") {
                if (ll.hasExported("LB_API_PER", "BEACON_CALLBACK")) {
                    //判断函数导入
                    const PLACE_CALLBACK = ll.imports("LB_API_PER", "BEACON_CALLBACK")
                    if (!PLACE_CALLBACK(player, block)) return false
                }
            }


            /**
             * 酿造台
             */
            if (block.type == "minecraft:brewing_stand") {
                if (ll.hasExported("LB_API_PER", "BREW_CALLBACK")) {
                    //判断函数导入
                    const PLACE_CALLBACK = ll.imports("LB_API_PER", "BREW_CALLBACK")
                    if (!PLACE_CALLBACK(player, block)) return false
                }
            }


            /**
             * 桶
             */
            if (block.type == "minecraft:barrel") {
                if (ll.hasExported("LB_API_PER", "BARREL_CALLBACK")) {
                    //判断函数导入
                    const PLACE_CALLBACK = ll.imports("LB_API_PER", "BARREL_CALLBACK")
                    if (!PLACE_CALLBACK(player, block)) return false
                }
            }


            /**
             * 蜂箱
             */
            if (block.type == "minecraft:beehive") {
                if (ll.hasExported("LB_API_PER", "BEEGIVE_CALLBACK")) {
                    //判断函数导入
                    const PLACE_CALLBACK = ll.imports("LB_API_PER", "BEEGIVE_CALLBACK")
                    if (!PLACE_CALLBACK(player, block)) return false
                }
            }

            /**
             * 蜜蜂巢
             */
            if (block.type == "minecraft:bee_nest") {
                if (ll.hasExported("LB_API_PER", "BEE_NEST_CALLBACK")) {
                    //判断函数导入
                    const PLACE_CALLBACK = ll.imports("LB_API_PER", "BEE_NEST_CALLBACK")
                    if (!PLACE_CALLBACK(player, block)) return false
                }
            }

            /**
             * 堆肥桶
             */
            if (block.type == "minecraft:composter") {
                if (ll.hasExported("LB_API_PER", "COMPOST_BUCKET_CALLBACK")) {
                    //判断函数导入
                    const PLACE_CALLBACK = ll.imports("LB_API_PER", "COMPOST_BUCKET_CALLBACK")
                    if (!PLACE_CALLBACK(player, block)) return false
                }
            }

            /**
             * 熔炉,烟熏炉和篝火
             */
            if (block.type == "minecraft:furnace" || block.type == "minecraft:smoker" || block.type == "minecraft:blast_furnace") {
                if (ll.hasExported("LB_API_PER", "FURNACE_CALLBACK")) {
                    //判断函数导入
                    const PLACE_CALLBACK = ll.imports("LB_API_PER", "FURNACE_CALLBACK")
                    if (!PLACE_CALLBACK(player, block)) return false
                }
            }

            /**
             * 附魔台
             */
            if (block.type == "minecraft:enchanting_table") {
                if (ll.hasExported("LB_API_PER", "ENCHATMENT_TABLE_CALLBACK")) {
                    //判断函数导入
                    const PLACE_CALLBACK = ll.imports("LB_API_PER", "ENCHATMENT_TABLE_CALLBACK")
                    if (!PLACE_CALLBACK(player, block)) return false
                }
            }


            /**
             * 唱片机和音符盒
             */
            if (block.type == "minecraft:jukebox" || block.type == "minecraft:noteblock") {
                if (ll.hasExported("LB_API_PER", "WORKBENCH_CALLBACK")) {
                    //判断函数导入
                    const PLACE_CALLBACK = ll.imports("LB_API_PER", "WORKBENCH_CALLBACK")
                    if (!PLACE_CALLBACK(player, block)) return false
                }
            }

            /**
             * 拉杆
             */
            if (block.type == "minecraft:lever") {
                if (ll.hasExported("LB_API_PER", "LEVER_CALLBACK")) {
                    //判断函数导入
                    const PLACE_CALLBACK = ll.imports("LB_API_PER", "LEVER_CALLBACK")
                    if (!PLACE_CALLBACK(player, block)) return false
                }
            }


            /**
             * 红石相关方块
             */
            if (block.type == "minecraft:redstone_torch" || block.type == "minecraft:crafter" || block.type == "minecraft:dropper" || block.type == "minecraft:dispenser" || block.type == "minecraft:comparator" || block.type == "minecraft:repeater") {
                if (ll.hasExported("LB_API_PER", "ABOUT_REDSTOBE_CALLBACK")) {
                    //判断函数导入
                    const PLACE_CALLBACK = ll.imports("LB_API_PER", "ABOUT_REDSTOBE_CALLBACK")
                    //TODO:进行红石方块判断
                    if (!PLACE_CALLBACK(player, block)) return false
                }
            }

            /**
             * 龙蛋
             */
            if (block.type == "minecraft:dragon_egg") {
                if (ll.hasExported("LB_API_PER", "DRAGON_EGG_CALLBACK")) {
                    //判断函数导入
                    const PLACE_CALLBACK = ll.imports("LB_API_PER", "DRAGON_EGG_CALLBACK")
                    if (!PLACE_CALLBACK(player, block)) return false
                }
            }


            /**
             * 工作台
             */
            if (block.type == "minecraft:crafting_table") {
                if (ll.hasExported("LB_API_PER", "RECORD_CALLBACK")) {
                    //判断函数导入
                    const PLACE_CALLBACK = ll.imports("LB_API_PER", "RECORD_CALLBACK")
                    if (!PLACE_CALLBACK(player, block)) return false
                }
            }

            /**
             * 采摘浆果
             */
            if (block.type == "minecraft:sweet_berry_bush") {
                if (ll.hasExported("LB_API_PER", "PICK_BARRIES_CALLBACK")) {
                    //判断函数导入
                    const PLACE_CALLBACK = ll.imports("LB_API_PER", "PICK_BARRIES_CALLBACK")
                    if (!PLACE_CALLBACK(player, block)) return false
                }
            }

            /**
             * 吃蛋糕
             */
            if(block.type == "minecraft:cake"){
                if (ll.hasExported("LB_API_PER", "EAT_CAKE")) {
                    //判断函数导入
                    const PLACE_CALLBACK = ll.imports("LB_API_PER", "EAT_CAKE")
                    if (!PLACE_CALLBACK(player, block)) return false
                }
            }

            /**
             * 使用桶
             */
            if(item.type.includes("bucket")){
                if (ll.hasExported("LB_API_PER", "USE_BUCKET_CALLBACK")) {
                    //判断函数导入
                    const PLACE_CALLBACK = ll.imports("LB_API_PER", "USE_BUCKET_CALLBACK")
                    if (!PLACE_CALLBACK(player, block)) return false
                }
            }

            /**
             * 使用染料
             */
            if(item.type.includes("dye")){
                if (ll.hasExported("LB_API_PER", "USE_DYE_CALLBACK")) {
                    //判断函数导入
                    const PLACE_CALLBACK = ll.imports("LB_API_PER", "USE_DYE_CALLBACK")
                    if (!PLACE_CALLBACK(player, block)) return false
                }
            }

            /**
             * 使用生物蛋
             */
            if(item.type.includes("spawn_egg")){
                if (ll.hasExported("LB_API_PER", "USE_EGG_CALLBACK")) {
                    //判断函数导入
                    const PLACE_CALLBACK = ll.imports("LB_API_PER", "USE_EGG_CALLBACK")
                    if (!PLACE_CALLBACK(player, block)) return false
                }
            }

            //防抖操作
            setTimeout(() => { a = false }, 100)
        })

        /**
         * 所有容器
         */
        mc.listen("onOpenContainer", (player: Player, block: Block) => {

            if (ll.hasExported("LB_API_PER", "CONTAINER_CALLBACK")) {
                //判断函数导入
                const PLACE_CALLBACK = ll.imports("LB_API_PER", "CONTAINER_CALLBACK")
                if (!PLACE_CALLBACK(player, block)) return false
            }

        })

        /**
         * 物品展示框
         */
        mc.listen("onUseFrameBlock", (player: Player, block: Block) => {
            if (ll.hasExported("LB_API_PER", "CONTAINER_CALLBACK")) {
                //判断函数导入
                const PLACE_CALLBACK = ll.imports("LB_API_PER", "CONTAINER_CALLBACK")
                if (!PLACE_CALLBACK(player, block)) return false
            }
        })

        /**
         * 动物繁殖
         */
        mc.listen("onMobTrySpawn", (typeName: string, pos: FloatPos) => {
            if (ll.hasExported("LB_API_PER", "REPRODUCE_CALLBACK")) {
                //判断函数导入
                const PLACE_CALLBACK = ll.imports("LB_API_PER", "REPRODUCE_CALLBACK")
                if (!PLACE_CALLBACK(typeName, pos)) return false
            }
        })
        /**
        * 交通工具，包括船，矿车和可骑乘的动物，如马等。
        */
        mc.listen("onRide", (entity1: Entity, entity2: Entity) => {

            if (ll.hasExported("LB_API_PER", "TRANSPORTATION_CALLBACK")) {
                //判断函数导入
                const PLACE_CALLBACK = ll.imports("LB_API_PER", "TRANSPORTATION_CALLBACK")
                if (!PLACE_CALLBACK(entity1, entity2)) return false
            }
        })

        /**
         * 拾取物品
         */
        mc.listen("onTakeItem", (player: Player, entity: Entity, item: Item) => {
            if (ll.hasExported("LB_API_PER", "PICK_CALLBACK")) {
                //判断函数导入
                const PLACE_CALLBACK = ll.imports("LB_API_PER", "PICK_CALLBACK")
                if (!PLACE_CALLBACK(player, entity, item)) return false
            }
        })

        /**
         * 丢弃物品
         */
        mc.listen("onDropItem", (player: Player, item: Item) => {
            if (ll.hasExported("LB_API_PER", "DROP_ITEM")) {
                //判断函数导入
                const PLACE_CALLBACK = ll.imports("LB_API_PER", "DROP_ITEM")
                if (!PLACE_CALLBACK(player, item)) return false
            }
        })

        /**
         * 火蔓延
         */
        mc.listen("onFireSpread", (pos: IntPos) => {
            if (ll.hasExported("LB_API_PER", "FIRE_CALLBACK")) {
                //判断函数导入
                const PLACE_CALLBACK = ll.imports("LB_API_PER", "FIRE_CALLBACK")
                if (!PLACE_CALLBACK(pos)) return false
            }
        })

        /**
         * 攻击实体
         */
        mc.listen("onAttackEntity", (player: Player, entity: Entity) => {
            if (ll.hasExported("LB_API_PER", "ATTACK_CALLBACK")) {
                //判断函数导入
                const PLACE_CALLBACK = ll.imports("LB_API_PER", "ATTACK_CALLBACK")
                if (!PLACE_CALLBACK(player, entity)) return false
            }
        })

        /**
         * 爆炸
         */
        mc.listen("onBlockExplode", (source: Block, pos: FloatPos, radius: number, maxResistance: number, isDestroy: boolean, isFire: boolean) => {
            if (ll.hasExported("LB_API_PER", "TNT_CALLBACK")) {
                //判断函数导入
                const PLACE_CALLBACK = ll.imports("LB_API_PER", "TNT_CALLBACK")
                if (!PLACE_CALLBACK(source, pos, radius, maxResistance, isDestroy, isFire)) return false
            }
        })
    }


}