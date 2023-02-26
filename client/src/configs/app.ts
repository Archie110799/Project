import * as dotenv from 'dotenv'
dotenv.config()

const AppConfigs = {
    apiURL : 'https//localhost:3000',
    publicPort : parseInt(process.env.PUBLIC_PORT as string, 10) || 3000,
    pivatePort : parseInt(process.env.PRIVATE_PORT as string, 10) || 3001
}

export default AppConfigs