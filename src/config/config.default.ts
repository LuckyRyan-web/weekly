import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core'
// import * as path from 'path'

export default (appInfo: MidwayAppInfo) => {
    return {
        // use for cookie sign key, should change to your own and keep security
        keys: appInfo.name + '_1682479609013_6339',
        egg: {
            port: 7001,
        },
        webhook: process.env.APP_WEBHOOK,
        swagger: {
            tags: [
                {
                    name: 'api',
                    description: 'API 首页',
                },
            ],
        },

        // security: {
        //   csrf: false,
        // },
    } as MidwayConfig
}
