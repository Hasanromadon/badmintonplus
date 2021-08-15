class Hero extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }
    render() {
        this.innerHTML = `<div class="hero">
                            <p class="hero__text--red">#INDONESIA</p>
                            <p class="hero__text--white">KEMBALI MERAIH MENDALI!</p>
                         </div>`
    }
}

customElements.define('hero-comp', Hero)
