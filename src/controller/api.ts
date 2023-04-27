import { Inject, Controller, Post, Query, Get, Body } from '@midwayjs/core'
import { Context } from 'egg'
import { IGetUserResponse } from '../interface'
import { UserService } from '@/service/user'
import { WebhookService } from '@/service/webhook'
import { ApiProperty, ApiBody, ApiResponse, ApiTags } from '@midwayjs/swagger'
import {
    CreateCatDto,
    WebHookClass,
    FeishuWebhookMessageClass,
} from '@/types/apiClass'

@ApiTags(['api'])
@Controller('/api')
export class APIController {
    @Inject()
    ctx: Context

    @Inject()
    userService: UserService

    @Inject()
    webhookService: WebhookService

    @Get('/', {
        description: 'index 首页',
    })
    async home(@Query() data: CreateCatDto): Promise<{
        msg: string
    }> {
        return {
            msg: 'hello eggjs',
        }
    }

    @Post('/get_user', {
        description: '获取所有的用户',
    })
    async getUser(@Body('uid') uid: string): Promise<IGetUserResponse> {
        console.log('uid', uid)
        const user = await this.userService.getUser({ uid })
        return { success: true, message: 'OK', data: user }
    }

    @Post('/create_user', {
        description: '创建用户',
    })
    async createUser() {
        const res = await this.userService.createUser()

        return {
            data: res,
        }
    }

    @Post('/send', {
        description: '飞书 webhook',
    })
    @ApiResponse({
        status: 200,
        type: FeishuWebhookMessageClass,
    })
    async sendWebhook(@Body() data: WebHookClass) {
        const res = await this.webhookService.feishu(data)
        return res
    }
}
