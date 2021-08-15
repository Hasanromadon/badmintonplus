class Footer extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.render()
    }
    render() {
        this._shadowRoot.innerHTML = `
        <style>             
            footer {
                padding: 1rem 0;
                background-color: black;
                color: white;
                text-align: center;
            }
            footer a {
                text-decoration: none;
                color: #c70101;
            }
        </style>
        <footer>
            <p>Made with love by  <a target="_blank" href="https://www.dicoding.com/users/hasan_dev">Hasan</a> </p>
        </footer>`
    }
}

window.customElements.define('footer-comp', Footer)
