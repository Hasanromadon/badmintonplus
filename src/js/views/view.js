import iconloader from '../../img/utils/loader.svg'
export default class View {
    _data

    render(data) {
        this._data = data
        const markup = this._generateMarkUp()
        this._clear()
        this._parentElement.insertAdjacentHTML('afterbegin', markup)
    }

    _clear() {
        this._parentElement.innerHTML = ''
    }

    renderLoader() {
        const markup = `  <div class="loader">
                                 <img class="load-icon" src="${iconloader}" />
                            </div>`
        this._clear()
        this._parentElement.insertAdjacentHTML('afterbegin', markup)
    }
}
