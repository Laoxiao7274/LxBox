## 权限保护API
> 以下是权限保护API的导出函数，根据提供的导出函数类型，自行编写导出函数并导出，来进行权限判断拦截

### 放置权限
~~~ts
ll.exports(function(player,block):boolean,"LB_API_PER","PLACE_CALLBACK")
~~~
- 导出函数类型：
~~~ts
function(player:Player,block:Block):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| block | Block | 放置的方块 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许放置 |
| false | boolean | 拒绝放置 |

### 破坏权限
~~~ts
ll.exports(function(player,block):boolean,"LB_API_PER","BREAK_CALLBACK")
~~~
- 导出函数类型：
~~~ts
function(player:Player,block:Block):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| block | Block | 破坏的方块 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 方块交互
~~~ts
ll.exports(function(player, item, block, side, pos):boolean,"LB_API_PER","INTERACTION_CALLBACK")
~~~
- 导出函数类型：
~~~ts
function(player:Player, item:Item, block:Block, side:number, pos:FloatPos):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| item | Item | 玩家持有物品 |
| block | Block | 交互的方块 |
| side | number | 方块交互的朝向 |
| pos | FloatPos | 方块交互的位置 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 铁砧交互
~~~ts
ll.exports(function(player,block):boolean,"LB_API_PER","ANVIL_CALLBACK")
~~~
- 导出函数类型：
~~~ts
function(player:Player,block:Block):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| block | Block | 铁砧方块 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |


### 按钮交互
~~~ts
ll.exports(function(player,block):boolean,"LB_API_PER","BUTTON_CALLBACK")
~~~
- 导出函数类型：
~~~ts
function(player:Player,block:Block):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| block | Block | 按钮方块 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 床交互
~~~ts
ll.exports(function(player,block):boolean,"LB_API_PER","BED_CALLBACK")
~~~
- 导出函数类型：
~~~ts
function(player:Player,block:Block):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| block | Block | 床方块 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 各种门交互
~~~ts
ll.exports(function(player,block):boolean,"LB_API_PER","DOOR_CALLBACK")
~~~
- 导出函数类型：
~~~ts
function(player:Player,block:Block):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| block | Block | 门方块 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 信标交互
~~~ts
ll.exports(function(player,block):boolean,"LB_API_PER","BEACON_CALLBACK")
~~~
- 导出函数类型：
~~~ts
function(player:Player,block:Block):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| block | Block | 信标方块 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 酿造台交互
~~~ts
ll.exports(function(player,block):boolean,"LB_API_PER","BREW_CALLBACK")
~~~
- 导出函数类型：
~~~ts
function(player:Player,block:Block):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| block | Block | 酿造台方块 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 木桶交互
~~~ts
ll.exports(function(player,block):boolean,"LB_API_PER","BARREL_CALLBACK")
~~~
- 导出函数类型：
~~~ts
function(player:Player,block:Block):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| block | Block | 桶方块 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 蜂箱交互
~~~ts
ll.exports(function(player,block):boolean,"LB_API_PER","BEEGIVE_CALLBACK")
~~~
- 导出函数类型：
~~~ts
function(player:Player,block:Block):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| block | Block | 蜂箱方块 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 蜂巢交互
~~~ts
ll.exports(function(player,block):boolean,"LB_API_PER","BEE_NEST_CALLBACK")
~~~
- 导出函数类型：
~~~ts
function(player:Player,block:Block):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| block | Block | 蜂巢方块 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 堆肥桶交互
~~~ts
ll.exports(function(player,block):boolean,"LB_API_PER","COMPOST_BUCKET_CALLBACK")
~~~
- 导出函数类型：
~~~ts
function(player:Player,block:Block):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| block | Block | 堆肥桶方块 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 熔炉，烟熏炉和高炉交互
~~~ts
ll.exports(function(player,block):boolean,"LB_API_PER","FURNACE_CALLBACK")
~~~
- 导出函数类型：
~~~ts
function(player:Player,block:Block):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| block | Block | 炉子方块 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 附魔台交互
~~~ts
ll.exports(function(player,block):boolean,"LB_API_PER","ENCHATMENT_TABLE_CALLBACK")
~~~
- 导出函数类型：
~~~ts
function(player:Player,block:Block):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| block | Block | 附魔台方块 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 唱片机和音符盒交互
~~~ts
ll.exports(function(player,block):boolean,"LB_API_PER","WORKBENCH_CALLBACK")
~~~
- 导出函数类型：
~~~ts
function(player:Player,block:Block):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| block | Block | 唱片机或音符盒方块 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 拉杆交互
~~~ts
ll.exports(function(player,block):boolean,"LB_API_PER","LEVER_CALLBACK")
~~~
- 导出函数类型：
~~~ts
function(player:Player,block:Block):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| block | Block | 拉杆方块 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 红石相关方块交互
~~~ts
ll.exports(function(player,block):boolean,"LB_API_PER","ABOUT_REDSTOBE_CALLBACK")
~~~
- 导出函数类型：
~~~ts
function(player:Player,block:Block):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| block | Block | 红石相关方块 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 龙蛋交互
~~~ts
ll.exports(function(player,block):boolean,"LB_API_PER","DRAGON_EGG_CALLBACK")
~~~
- 导出函数类型：
~~~ts
function(player:Player,block:Block):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| block | Block | 龙蛋方块 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 工作台交互
~~~ts
ll.exports(function(player,block):boolean,"LB_API_PER","RECORD_CALLBACK")
~~~
- 导出函数类型：
~~~ts
function(player:Player,block:Block):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| block | Block | 工作台方块 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 采摘浆果
~~~ts
ll.exports(function(player,block):boolean,"LB_API_PER","PICK_BARRIES_CALLBACK")
~~~
- 导出函数类型：
~~~ts
function(player:Player,block:Block):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| block | Block | 浆果方块 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 吃蛋糕
~~~ts
ll.exports(function(player,block):boolean,"LB_API_PER","EAT_CAKE")
~~~
- 导出函数类型：
~~~ts
function(player:Player,block:Block):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| block | Block | 蛋糕方块 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 使用桶
~~~ts
ll.exports(function(player,item):boolean,"LB_API_PER","USE_BUCKET_CALLBACK")
~~~
- 导出函数类型：
~~~ts
function(player:Player,item:Item):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| item | Item | 桶物品 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 使用染料
~~~ts
ll.exports(function(player,item):boolean,"LB_API_PER","USE_DYE_CALLBACK")
~~~
- 导出函数类型：
~~~ts
function(player:Player,item:Item):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| item | Item | 染料物品 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 使用生物蛋
~~~ts
ll.exports(function(player,item):boolean,"LB_API_PER","USE_EGG_CALLBACK")
~~~
- 导出函数类型：
~~~ts
function(player:Player,item:Item):boolean
~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| item | Item | 生物蛋物品 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 打开容器
> 这里坚挺的方块是所有拥有界面的方块，如箱子，工作台,熔炉等<br>想要更细的可以自行写逻辑
~~~ts
ll.exports(function(player,block):boolean,"LB_API_PER","CONTAINER_CALLBACK")
~~~
- 导出函数类型：
~~~~ts
function(player:Player,block:Block):boolean
~~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| block | Block | 容器方块 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 物品展示框
~~~ts
ll.exports(function(player,block):boolean,"LB_API_PER","FRAMEBLOCK_CALLBACK")
~~~
- 导出函数类型：
~~~~ts
function(player:Player,block:Block):boolean
~~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| block | Block | 物品展示框方块 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许交互 |
| false | boolean | 拒绝交互 |

### 动物繁殖
~~~ts
ll.exports(function(typeName,pos):boolean,"LB_API_PER","REPRODUCE_CALLBACK")
~~~
- 导出函数类型：
~~~~ts
function(typeName:string,pos:BlockPos):boolean
~~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| typeName | string | 动物的类型名称 |
| pos | BlockPos | 动物繁殖的位置 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许繁殖 |
| false | boolean | 拒绝繁殖 |

### 交通工具，包括船，矿车和可骑乘的动物，如马等。
~~~ts
ll.exports(function(entity1,entity2):boolean,"LB_API_PER","TRANSPORTATION_CALLBACK")
~~~
- 导出函数类型：
~~~~ts
function(entity1:Entity,entity2:Entity):boolean
~~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| entity1 | Entity | 骑在上面的实体 |
| entity2 | Entity | 被骑实体 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许骑乘 |
| false | boolean | 拒绝骑乘 |

### 拾取物品
~~~ts
ll.exports(function(player,entity,item):boolean,"LB_API_PER","PICK_CALLBACK")
~~~
- 导出函数类型：
~~~~ts
function(player:Player,entity:Entity,item:Item):boolean
~~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| entity | Entity | 拾取物品的实体 |
| item | Item | 拾取的物品 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许拾取 |
| false | boolean | 拒绝拾取 |

### 丢弃物品
~~~ts
ll.exports(function(player,item):boolean,"LB_API_PER","DROP_CALLBACK")
~~~
- 导出函数类型：

~~~~ts
function(player:Player,item:Item):boolean
~~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 玩家 |
| item | Item | 丢弃的物品 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许丢弃 |
| false | boolean | 拒绝丢弃 |

### 火焰蔓延
~~~ts
ll.exports(function(pos):boolean,"LB_API_PER","FIRE_CALLBACK")
~~~
- 导出函数类型：
~~~~ts
function(pos:IntPos):boolean
~~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| pos | IntPos | 火焰蔓延的位置 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许蔓延 |
| false | boolean | 拒绝蔓延 |

### 攻击实体
~~~ts
ll.exports(function(player,entity):boolean,"LB_API_PER","ATTACK_CALLBACK")
~~~
- 导出函数类型：
~~~~ts
function(player:Player,entity:Entity):boolean
~~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| player | Player | 攻击者 |
| entity | Entity | 被攻击的实体 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许攻击 |
| false | boolean | 拒绝攻击 |

### 爆炸
~~~ts
ll.exports(function(source, pos, radius, maxResistance, isDestroy, isFire):boolean,"LB_API_PER","TNT_CALLBACK")
~~~
- 导出函数类型：
~~~~ts
function(source:Block, pos:FloatPos, radius:number, maxResistance:number, isDestroy:boolean, isFire:boolean):boolean
~~~~
- 参数说明：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| source | Block | 爆炸源 |
| pos | FloatPos | 爆炸位置 |
| radius | number | 爆炸半径 |
| maxResistance | number | 最大 resistance |
| isDestroy | boolean | 是否破坏方块 |
| isFire | boolean | 是否生成火焰 |
- 返回值说明：

| 返回值 | 类型 | 说明 |
| --- | --- | --- |
| true | boolean | 允许爆炸 |
| false | boolean | 拒绝爆炸 |







