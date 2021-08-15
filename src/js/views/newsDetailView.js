import View from './view'
import { getParams } from '../components/utils'
import { newsCard, newsDetail, sectionTitle } from '../components/componentView'
class newsDetailViews extends View {
    _parentElement = document.querySelector('.news-details')

    renderAllNews = () => {
        const data = this._data.data
        const id = getParams('nId')
        const singleData = data.find((news) => news.id === +id)
        const markup = ` <section class="section-all-news">
                        <div class="container">
                            ${sectionTitle('SEMUA BERITA', '')}
                            <div class="news__container">
                            ${data.map((news) => newsCard(news)).join('')}
                            </div>
                        </div>
                    </section>`

        if (id !== 0 && singleData) {
            return `
            ${newsDetail(singleData)}
            ${markup}
           `
        } else {
            return `
            ${markup}`
        }
    }

    _generateMarkUp() {
        return this.renderAllNews()
    }
}

export default new newsDetailViews()
