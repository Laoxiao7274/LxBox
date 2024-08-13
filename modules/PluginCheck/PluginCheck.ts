// LiteLoader-AIDS automatic generated
/// <reference path="d:\BDS_api/dts/helperlib/src/index.d.ts"/> 

import { MessageConstant } from "../Constant/MessageConstant"

/**
 * 子插件检测类
 */
export class PluginCheck {
    /**
     * 子插件检测
     */
    static check() {
        logger.info(`${MessageConstant.PREFIX}子插件检测中...`)
        //空岛插件检测
        this.IsLandCheck()
    }

    /**
     * 空岛插件检测
     */
    static IsLandCheck() {
        if (File.exists("./plugins/LxBox/plugins/IsLand.js")) {
            const { IsLand } = require("../../plugins/IsLand.js")
            //调用空岛插件函数
            IsLand.main()
        }
    }
}