import View from './view'
import { sectionTitle, playerCard } from '../components/componentView'
class PlayersView extends View {
    _parentElement = document.querySelector('.players_sections')

    renderCard = () => {
        const data = this._data.data.slice(1, 5)
        return data.map((player) => playerCard(player)).join('')
    }

    _generateMarkUp() {
        return `<div class="container">
            ${sectionTitle('PEMAIN', 'pemain.html')}
                <div class="player_container">
                    ${this.renderCard()}
                </div>
            </div>`
    }
}

export default new PlayersView()
