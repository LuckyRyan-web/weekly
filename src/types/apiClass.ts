import { ApiProperty, ApiBody, ApiResponse, ApiTags } from '@midwayjs/swagger'

export class CreateCatDto {
    @ApiProperty({ description: 'The name of the Catname' })
    name: string

    @ApiProperty({ description: 'The name of the Catage' })
    age: number

    @ApiProperty({ description: 'The name of the Catbreed' })
    breed: string
}

export class HomeServerClass implements APIArticle.HomeServerInputOptions {
    @ApiProperty({ description: '唯一的 id' })
    uid: string
}

export class WebHookClass implements APIWebhook.WebhookData {
    @ApiProperty({ description: '请求体内容' })
    content: string

    @ApiProperty({
        description: '请求信息类型',
        enum: ['text', 'post', 'image', 'share_chat', 'interactive'],
    })
    msg_type: APIWebhook.MsgType
}

export class FeishuWebhookMessageClass
    implements APIWebhook.FeishuWebhookMessage
{
    @ApiProperty({ description: '返回状态码', example: 200 })
    status: number

    @ApiProperty({
        description: '返回请求体',
        example: {
            data: {
                msg: '',
            },
            StatusMessage: 0,
            StatusCode: 0,
            msg: 'success!',
        },
    })
    data: {
        data: { [key: string]: any }
        msg: string
        StatusMessage: string
        StatusCode: string
    }
}
