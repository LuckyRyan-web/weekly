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
        const res = await this.userModel.find({}).exec()

        return {
            uid: options.uid,
            users: res.map(v => {
                return {
                    name: v.name,
                    jobs: v.jobs,
                }
            }),
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
