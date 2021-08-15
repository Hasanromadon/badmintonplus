import axios from 'axios'

export const AJAX = async (url, uploadData = undefined) => {
    try {
        const fetchApi = axios.get(url)
        const data = fetchApi

        return data
    } catch (err) {
        alert('SERVER ERROR, PLEASE RELOAD')
    }
}
