# LxBox
- 基于LSE的ll空岛插件核心
## 计划功能
- [x] 实现子插件自动加载
- [x] 子插件可选依赖
- [x] 提供组队api
- [ ] 提供保护api
- [ ] 提供任务api
## 子插件计划
- [ ] 空岛插件(搭配组队及保护)


## [组队API](docs/TeamAPI.md)
- [x] 创建队伍
- [x] 删除队伍(队长)
- [x] 转让队伍
- [x] 添加队伍成员
- [x] 删除队伍成员
- [x] 查找玩家队伍ID
- [x] 查找玩家是否存在队伍
- [x] 队伍内聊天
- [x] 功能测试脚本
> 拦截onChat发送消息事件，获取发送的消息转发给在线的队伍成员<br>提供队伍聊天前缀：<br>支持自定义前缀<br>触发时机： 提供api通过玩家tag的形式

##  [保护API](docs/ProtectAPI.md)
- [ ] 监听事件,权限细分
> 1.监听所需的所有事件<br>2.事件中进行权限细分(如:place放置事件分为存储容器，工作台等)<br>3.事件拦截：通过ll.imports导入函数来导入是否拦截<br>示例：ll.exports(function():boolean,"LB_API","PLACE_CALLBACK")//用来导出函数返回一个bool值，来进行放置的拦截<br>4.LBAPI需要做到的是：ll.imports导入后，判断该函数是否存在，存在则进行拦截判断，不存在则不判断
- [ ] 权限列表 ：

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

- [ ] 范围内保护
> 仿照上面的样子写，自行导出默认函数，创建新的导入函数<br>将上面每一种都创建范围检测