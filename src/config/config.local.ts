import { EggAppConfig, PowerPartial } from 'egg'
import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core'
import * as path from 'path'

export type DefaultConfig = PowerPartial<EggAppConfig>

/**
 * 这里加入这段是因为 egg 默认的安全策略，在 post 请求的时候如果不传递 token 会返回 403
 * 由于大部分新手用户不太了解这个机制，所以在本地和单测环境做了默认处理
 * 请注意，线上环境依旧会有该错误，需要手动开启
 * 如果想了解更多细节，请访问 https://eggjs.org/zh-cn/core/security.html#安全威胁-csrf-的防范
 */
export default (appInfo: MidwayAppInfo) => {
    return {
        security: {
            csrf: false,
        },
        mongoose: {
            dataSource: {
                default: {
                    uri: 'mongodb://localhost:27017/weekly',
                    options: {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                        user: '',
                        pass: '',
                    },
                    // 关联实体
                    entities: [path.join(appInfo.baseDir, 'entity/*{.ts,.js}')],
                },
            },
        },
    } as MidwayConfig & DefaultConfig
}
