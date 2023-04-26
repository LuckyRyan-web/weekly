declare module APIWebhook {
    type MsgType = 'text' | 'post' | 'image' | 'share_chat' | 'interactive'

    /** 飞书请求规定参数 */
    interface WebhookData {
        content: string
        msg_type: MsgType
    }

    /** 飞书返回消息 */
    interface FeishuWebhookMessage {
        status: number
        data: {
            data: {
                [key: string]: any
            }
            msg: string
            StatusMessage: string
            StatusCode: string
        }
    }
}
