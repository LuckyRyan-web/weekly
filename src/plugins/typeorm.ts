import { createConnection, ConnectionOptions } from 'typeorm'

export default async appConfig => {
    const config = appConfig.typeorm as ConnectionOptions & { host: string }

    if (config && config.host) {
        const connection = await createConnection(config)

        appConfig.typeorm = connection
    }

    return appConfig
}
