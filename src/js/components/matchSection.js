import { sectionTitle } from './componentView'
class MatchSection extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }
    render() {
        this.innerHTML = `<section class="matches_section">
        <div class="container">
        ${sectionTitle('PERTANDINGAN', '#')}
            <div class="matches-container">
                <div class="result_area">
                    <match-card></match-card>
                    <match-card></match-card>
                </div>
                <div class="match-video-area">
                    <video-card></video-card>
                </div>
            </div>
        </div>
    </section>`
    }
}

customElements.define('match-comp', MatchSection)
