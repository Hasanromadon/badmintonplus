import View from './view'
import { getParams } from '../helpers'
import {
    playerCard,
    playerDetail,
    sectionTitle,
} from '../components/componentView'
class playerDetailView extends View {
    _parentElement = document.querySelector('.players-profile-page')

    renderAllPlayer = () => {
        const data = this._data.data
        const id = getParams('pId')
        console.log(id)
        const singleData = data.find((player) => player.id === +id)
        const markup = ` <section class="section_all_players">
                            <div class="container">
                                ${sectionTitle('SEMUA PEMAIN', '')}
                                <div class="player_container">
                                ${data
                                    .map((player) => playerCard(player))
                                    .join('')}
                                </div>
                            </div>
                        </section>`

        if (id !== 0 && singleData) {
            return `
            ${playerDetail(singleData)}
            ${markup}
           `
        } else {
            return `
            ${markup}`
        }
    }

    _generateMarkUp() {
        return this.renderAllPlayer()
    }
}

export default new playerDetailView()
