import { Provide, Inject, Init } from '@midwayjs/core'
import { IUserOptions } from '../interface'
import { InjectEntityModel } from '@midwayjs/typegoose'
import { User } from '@/entity/user'
import { ReturnModelType } from '@typegoose/typegoose'
@Provide()
export class UserService {
    @InjectEntityModel(User)
    userModel: ReturnModelType<typeof User>

    async getUser(options: IUserOptions) {
        return {
            uid: options.uid,
            username: 'mockedName',
            phone: '12345678901',
            email: 'xxx.xxx@xxx.com',
        }
    }

    async createUser() {
        const { _id: id } = await this.userModel.create({
            name: 'JohnDoe',
            jobs: ['Cleaner'],
        } as User)

        const user = await this.userModel.findById(id).exec()
        console.log(user)
        return user
    }
}
