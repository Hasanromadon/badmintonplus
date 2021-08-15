export const sidebarNavigate = () => {
    const sidebar = document.querySelector('.sidebar')

    document.querySelector('.icon-menu').addEventListener('click', (e) => {
        sidebar.classList.add('show_sidebar')
        sidebar.classList.remove('hide_sidebar')
    })

    document.querySelector('.sidebar__close').addEventListener('click', () => {
        sidebar.classList.add('hide_sidebar')
        sidebar.classList.remove('show_sidebar')
    })
}
