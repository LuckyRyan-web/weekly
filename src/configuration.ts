import { App, Configuration, ILifeCycle } from '@midwayjs/core'
import { Application } from 'egg'
import { join } from 'path'
import * as egg from '@midwayjs/web'
import { ReportMiddleware } from './middleware/report.middleware'
import 'tsconfig-paths/register'
// import * as orm from '@midwayjs/typeorm'
import * as typegoose from '@midwayjs/typegoose'
import * as dotenv from 'dotenv'
import * as swagger from '@midwayjs/swagger'

dotenv.config()

@Configuration({
    imports: [
        egg,
        typegoose,
        // prd 环境不可调用
        {
            component: swagger,
            enabledEnvironment: ['local'],
        },
    ],
    importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle implements ILifeCycle {
    @App()
    app: Application

    async onReady() {
        this.app.useMiddleware([ReportMiddleware])
    }
}
