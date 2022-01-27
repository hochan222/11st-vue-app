import axios from 'axios'

import { BASE_URL, MAIN, SEARCH } from './urls'

export default {
    install(app) {
        app.config.globalProperties.$fetch = async ({ requestName, type }) => {
            const { data } = await axios({
                url: `${BASE_URL}${MAIN}?apiKey=1216&requestName=${requestName}`,
                method: 'GET'
            }) 

            return data
        },
        app.config.globalProperties.$search = async ({ searchText }) => {
            const { data } = await axios({
                url: `${BASE_URL}${SEARCH}?apiKey=1216&searchText=${searchText}`,
                method: 'GET'
            }) 

            return data
        }
    }
}
