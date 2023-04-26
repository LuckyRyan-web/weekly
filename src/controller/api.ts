import { Inject, Controller, Post, Query, Get } from '@midwayjs/core'
import { Context } from 'egg'
import { IGetUserResponse } from '../interface'
import { UserService } from '@/service/user'

@Controller('/api')
export class APIController {
    @Inject()
    ctx: Context

    @Inject()
    userService: UserService

    @Get('/')
    async home() {
        const data: APIHome.HomeServerInputOptions = {
            uid: '1',
        }
        return {
            msg: 'hello eggjs',
            data,
        }
    }

    @Post('/get_user')
    async getUser(@Query('uid') uid: string): Promise<IGetUserResponse> {
        const user = await this.userService.getUser({ uid })
        return { success: true, message: 'OK', data: user }
    }
}
