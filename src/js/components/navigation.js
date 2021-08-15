class Navbar extends HTMLElement {
    constructor() {
        super()
        this.links = [
            { name: 'Beranda', to: 'index' },
            { name: 'Berita', to: 'berita' },
            { name: 'Pemain', to: 'pemain' },
        ]
    }

    loadLink = () =>
        this.links
            .map(
                (link) =>
                    `<li class="nav__link__item">
            <a href="${link.to}.html">${link.name}</a>
           </li>`
            )
            .join('')

    connectedCallback() {
        this.render()
    }
    render() {
        this.parentElement.innerHTML = ` <div class="container">
          <nav class="nav">
            <a class="logo" href="index.html" >Badminton+</a>
            <ul class="nav__link menu__link">
            ${this.loadLink()}
            </ul>
          <svg class="icon-menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-left"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>
          </nav>
        </div>

        <div class="sidebar">
          <div class="sidebar__close"> <svg class="icon-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                <ul class="nav__link">
                ${this.loadLink()}
                </ul>
         </div>`
    }
}

customElements.define('navbar-comp', Navbar)
