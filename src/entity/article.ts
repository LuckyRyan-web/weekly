/**
 * Article
 * @author liuyuan
 * @date 2023-04-26 17:04
 * @since 1.0.0
 */
import { prop } from '@typegoose/typegoose'
import { EntityModel } from '@midwayjs/typegoose'

@EntityModel()
export class Article {
    @prop()
    public title?: string

    @prop({ type: () => [String] })
    public jobs?: string[]
}
