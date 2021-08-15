import { API_URL } from '../config'
import { AJAX } from '../helpers'
export const loadNews = async () => {
    try {
        const { data } = await AJAX(`${API_URL}news`)
        return data
    } catch (err) {
        alert('SERVER ERROR')
    }
}

export const loadPlayers = async () => {
    try {
        const { data } = await AJAX(`${API_URL}players`)
        return data
    } catch (err) {
        alert('SERVER ERROR')
    }
}
