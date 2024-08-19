## 消息API

### 消息发送
> 在线直接发送，离线转存离线消息

- 使用方法
~~~ts
ll.imports("LB_MESSAGE","msgSendTo")
~~~
- 函数原型
~~~ts
msgSendTo(PlayerName: string, msg: string): Result
~~~
- 参数说明

| 参数名 | 类型 | 说明 |
| ------ | ---- | ---- |
| PlayerName | string | 玩家名称 |
| msg | string | 消息内容 |
- 返回值
~~~yml
{
    //0为失败1为成功
    result: 1
    //提示消息
    msg: ''
    //返回数据(空)
    data: {}
}
~~~
~~~yml
{
    //0为失败1为成功
    result: 0
    //提示消息(玩家不存在)
    msg: 'PLAYER_NOT_EXIST'
    //返回数据(空)
    data: {}
}
~~~

### 消息发送
> 将暂存的所有离线消息全部推送给玩家

- 使用方法
~~~ts
ll.imports("LB_MESSAGE","sendOffMessage")
~~~
- 函数原型
~~~ts
sendOffMessage(PlayerXuid: string): Result<number>
~~~
- 参数说明

| 参数名 | 类型 | 说明 |
| ------ | ---- | ---- |
| PlayerName | string | 玩家名称 |
| msg | string | 消息内容 |
- 返回值
~~~yml
{
    //0为失败1为成功
    result: 1
    //提示消息
    msg: ''
    //返回数据(推送条数:number)
    data: count
}
~~~
~~~yml
{
    //0为失败1为成功
    result: 0
    //提示消息(玩家不存在)
    msg: 'PLAYER_NOT_EXIST'
    //返回数据(空)
    data: {}
}
~~~