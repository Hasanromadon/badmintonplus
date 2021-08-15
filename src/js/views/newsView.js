import View from './view'
import { sectionTitle, newsCard } from '../components/componentView'

class NewsView extends View {
    _parentElement = document.querySelector('.news_section')

    renderCard = () => {
        const data = this._data.data.slice(0, 5)
        return data
            .map((news) => {
                if (news.id === 1) {
                    return newsCard(news, 'big')
                } else {
                    return newsCard(news)
                }
            })
            .join(' ')
    }

    _generateMarkUp() {
        return `<div class="container">
                    ${sectionTitle('BERITA', 'berita.html')}
                    <div class="news__container">
                        ${this.renderCard()}
                    </div>
                </div>`
    }
}

export default new NewsView()
