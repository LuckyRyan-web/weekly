import { Inject, Controller, Post, Query, Get, Body } from '@midwayjs/core'
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
}
