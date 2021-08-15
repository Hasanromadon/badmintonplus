class VideoCard extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }
    render() {
        this.innerHTML = `<div class="video-card">
                            <iframe
                                width="100%"
                                src="https://www.youtube.com/embed/7dP_PmfeHQY"
                                title="YouTube video player"
                                frameborder="0"
                            ></iframe>
                            <div class="video-card__title">
                                <h4>FINAL GANDA PUTRI : INDONESIA VS CHINA - olimpiade 2020</h4>
                            </div>
                        </div> `
    }
}

window.customElements.define('video-card', VideoCard)
