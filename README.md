# LxBox
- 基于LSE的ll空岛插件核心
## 计划功能
- [x] 实现子插件自动加载
- [x] 子插件可选依赖
- [x] 提供组队api
- [ ] 提供保护api
- [ ] 移植papi
## 子插件计划
- [ ] 空岛插件(搭配组队及保护)


## 组队API
- [x] 创建队伍
- [x] 删除队伍(队长)
- [x] 转让队伍
- [x] 添加队伍成员
- [x] 删除队伍成员
- [x] 查找玩家队伍ID
- [x] 查找玩家是否存在队伍
- [ ] 队伍内聊天
> 拦截onChat发送消息事件，获取发送的消息转发给在线的队伍成员<br>提供队伍聊天前缀：<br>支持自定义前缀，对接papi(移植下来)<br>触发时机： 提供api通过玩家tag的形式


