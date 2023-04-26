/**
 * Webhook 用户发送到飞书
 * @author liuyuan
 * @date 2023-04-26 16:45
 * @since 1.0.0
 */
import { Provide, Inject, Config } from '@midwayjs/decorator'
import { makeHttpRequest, MidwayConfigService } from '@midwayjs/core'
import { Context, Application } from 'egg'

@Provide()
export class WebhookService {
    @Inject()
    ctx: Context

    @Config('webhook')
    webhookUrl: string

    /** 通知 */
    async feishu(data: APIWebhook.WebhookData) {
        try {
            const res = await makeHttpRequest<APIWebhook.FeishuWebhookMessage>(
                this.webhookUrl,
                {
                    method: 'POST',
                    dataType: 'json',
                    timeout: 3000,
                    data,
                }
            )

            return res
        } catch (err) {
            console.log(err)
        }
    }
}
