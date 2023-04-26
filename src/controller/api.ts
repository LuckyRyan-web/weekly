import { Inject, Controller, Post, Query, Get, Body } from '@midwayjs/core'
import { Context } from 'egg'
import { IGetUserResponse } from '../interface'
import { UserService } from '@/service/user'
import { WebhookService } from '@/service/webhook'

@Controller('/api')
export class APIController {
    @Inject()
    ctx: Context

    @Inject()
    userService: UserService

    @Inject()
    webhookService: WebhookService

    @Get('/')
    async home() {
        return {
            msg: 'hello eggjs',
        }
    }

    @Post('/get_user')
    async getUser(@Body('uid') uid: string): Promise<IGetUserResponse> {
        console.log('uid', uid)
        const user = await this.userService.getUser({ uid })
        return { success: true, message: 'OK', data: user }
    }

    @Post('/create_user')
    async createUser() {
        const res = await this.userService.createUser()

        return {
            data: res,
        }
    }

    @Post('/send')
    async sendWebhook(@Body() data: APIWebhook.WebhookData) {
        const res = await this.webhookService.feishu(data)

        return res
    }
}
