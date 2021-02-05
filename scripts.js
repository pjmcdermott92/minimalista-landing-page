const pageHeaderElement = document.querySelector('[data-page-header]')
const toggleButton = document.querySelector('[data-toggle-btn]')
const toTopButton = document.querySelector('[data-top-btn]')

toggleButton.addEventListener('click', () => {
    pageHeaderElement.classList.toggle('is-expanded')
})

toTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})

window.onscroll = () => {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopButton.style.visibility = 'visible'
    } else {
        toTopButton.style.visibility = ''
    }
}