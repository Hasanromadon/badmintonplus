import { sidebarNavigate } from './components/utils'
import { loadNews, loadPlayers } from './models/model'
import newsDetailView from './views/newsDetailView'
import newsView from './views/newsView'
import playerDetailView from './views/playerDetailView'
import playerView from './views/playerView'

const loadNewsHome = async () => {
    newsView.renderLoader()
    const newsData = await loadNews()
    newsView.render(newsData)
}

const loadAllNews = async () => {
    newsDetailView.renderLoader()
    const newsData = await loadNews()
    newsDetailView.render(newsData)
}

const loadPlayerHome = async () => {
    playerView.renderLoader()
    const playersData = await loadPlayers()
    playerView.render(playersData)
}

const loadAllPlayers = async () => {
    playerDetailView.renderLoader()
    const playerData = await loadPlayers()
    playerDetailView.render(playerData)
}

const init = () => {
    sidebarNavigate()
    const path = window.location.href
    if (path === '/index.html' || path === '/') {
        loadNewsHome()
        loadPlayerHome()
    } else if (path === '/berita.html') {
        loadAllNews()
    } else if (path === '/players.html') {
        loadAllPlayers()
    } else {
        // run on production
        loadNewsHome()
        loadPlayerHome()
        loadAllNews()
        loadAllPlayers()
    }
}

init()
