import '../styles/style.scss'

const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    const scrolled = document.documentElement.scrollTop
    const headerHeight = parseInt(getComputedStyle(header).getPropertyValue('--header-height'), 10)

    scrolled > headerHeight ? header.classList.add('scrolled') : header.classList.remove('scrolled')
})