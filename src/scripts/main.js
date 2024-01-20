import '../styles/style.scss'

const header = document.querySelector('header')
let headerHeight = getHeaderHeight(header)
let paddingBlock = getPaddingBlock(header)
let halfPaddingBlock = paddingBlock / 3

window.addEventListener('resize', () => {
    console.log('resize')

    headerheight = getHeaderHeight(header)
    paddingBlock = getPaddingBlock(header)
    halfPaddingBlock = paddingBlock / 3

    changePadding()
})

window.addEventListener('scroll', () => {
    changePadding()
})

function changePadding() {
    // const html = document.querySelector('html').scrollTop;
    const scrolled = document.documentElement.scrollTop
    console.log('padding-block: ', halfPaddingBlock)
    console.log('half padding-block: ', paddingBlock)

    if (scrolled > headerHeight) {
        header.style.paddingBlock = halfPaddingBlock + 'px'
    } else {
        header.style.paddingBlock = paddingBlock + 'px'
    }
}

function getHeaderHeight(header) {
    return parseInt(
        getComputedStyle(header).getPropertyValue('--header-height'),
        10
    )
}

function getPaddingBlock(header) {
    return parseInt(
        getComputedStyle(header).getPropertyValue('--padding-block'),
        10
    )
}