# LxBox API
- 基于LSE-nodejs的ll空岛插件核心的API
## 计划功能
- [x] 实现子插件自动加载
- [x] 子插件可选依赖
- [x] 提供组队api
- [x] 提供保护api
- [x] 提供经济api
- [x] 提供消息api
- [ ] 提供任务api
## 子插件计划
- [ ] 空岛插件(搭配组队及保护)


## [组队API](docs/TeamAPI.md)
- [x] 创建队伍
- [x] 删除队伍
- [x] 转让队伍
- [x] 添加队伍成员
- [x] 删除队伍成员
- [x] 查找玩家队伍ID
- [x] 查找玩家是否存在队伍
- [x] 队伍内聊天
- [x] 功能测试脚本

##  [保护API](docs/ProtectAPI.md)
- [x] 监听事件,权限细分
- [x] 权限列表 ：

| 权限描述 | 导出回调函数 | 
| ------- | ---------- |
| 放置权限 | PLACE_CALLBACK |
| 破坏权限 | BREAK_CALLBACK |
| 方块交互 | INTERACTION_CALLBACK |
| 容器 | CONTAINER_CALLBACK |
| 铁砧交互 | ANVIL_CALLBACK |
| 按钮交互 | BUTTON_CALLBACK |
| 床交互 | BED_CALLBACK |
| 门和陷阱门 | DOOR_CALLBACK |
| 信标 | BEACON_CALLBACK |
| 酿造台 | BREW_CALLBACK |
| 桶 | BARREL_CALLBACK |
| 蜂箱 | BEEGIVE_CALLBACK |
| 蜜蜂巢 | BEE_NEST_CALLBACK |
| 堆肥桶 | COMPOST_BUCKET_CALLBACK |
| 熔炉烟熏炉和篝火 | FURNACE_CALLBACK |
| 附魔台 | ENCHATMENT_TABLE_CALLBACK |
| 唱片机和音符盒 | RECORD_CALLBACK |
| 工作台 | WORKBENCH_CALLBACK |
| 拉杆 | LEVER_CALLBACK |
| 与红石相关的方块 | ABOUT_REDSTOBE_CALLBACK |
| 龙蛋 | DRAGON_EGG_CALLBACK |
| 物品框 | ITEMBOX_CALLBACK |
| 采摘浆果 | PICK_BARRIES_CALLBACK |
| 吃蛋糕 | EAT_CAKE |
| 动物繁殖 | REPRODUCE_CALLBACK |
| 使用桶 | USE_BUCKET_CALLBACK |
| 使用染料 | USE_DYE_CALLBACK |
| 使用蛋 | USE_EGG_CALLBACK |
| 交通工具，包括船，矿车和可骑乘的动物，如马等。 | TRANSPORTATION_CALLBACK |
| ~~村民交易~~ | ~~VILLAGER_TRADE_CALLBACK~~ |
| 拾取物品 | PICK_CALLBACK |
| 丢弃物品 | DROP_ITEM |
| 火蔓延 | FIRE_CALLBACK |
| 伤害或打击怪物或动物 | ATTACK_CALLBACK |
|TNT 或其他爆炸保护|TNT_CALLBACK|

##  [经济API](docs/EconomyAPI.md)
- [x] 获取经济
- [x] 设置经济
- [x] 添加经济
- [x] 扣除经济

##  [消息API](docs/MessageAPI.md)
- [x] 在线消息发送
- [x] 离线消息转存
- [x] 离线消息发送