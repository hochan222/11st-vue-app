import axios from 'axios'

import { BASE_URL } from './urls'

export default {
    install(app) {
        app.config.globalProperties.$fetch = async ({ requestName }) => {
            const { data } = await axios({
                url: `${BASE_URL}/main?apiKey=1216&requestName=${requestName}`,
                method: 'GET'
            }) 

            return data
        }
    }
}
