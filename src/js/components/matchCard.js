import indonesiaFlag from '../../img/matches/flags/flag_id.svg'
import chinaFlag from '../../img/matches/flags/flag_cn.svg'
class MatchCard extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }
    render() {
        this.innerHTML = `<div class="result_card__group">
    <div class="result_team result_team--left">
      <div class="team">
        <img class="team__icon" src="${indonesiaFlag}">
        <span class="team__name">INDONESIA</span>
      </div>
      <div class="result_point" ><p>21</p><p>21</p></div>
    </div>
    <div class="result_team result_team--right">
      <div class="result_point" ><p>19</p><p>15</p></div>
      <div class="team">
        <span class="team__name">CHINA</span>
        <img class="team__icon" src="${chinaFlag}">
      </div>
    </div>
    <div class="match_info">
      <p>Final Ganda Putri Olimpiade 2020</p>
      <p>Senin, 2 Agustus 2021</p>
    </div>
  </div>`
    }
}

window.customElements.define('match-card', MatchCard)
