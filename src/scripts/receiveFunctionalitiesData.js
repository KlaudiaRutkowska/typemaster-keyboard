import { collection, getDocs } from 'firebase/firestore'
import db from './firebase.js'


//hero
const heroQuery = await getDocs(collection(db, 'hero'))
const h1 = document.querySelector('#hero > div.container > .text-wrapper > h1')
const p = document.querySelector('#hero > div.container > .text-wrapper > p')

heroQuery.forEach((doc) => {
    h1.classList.remove('skeleton', 'skeleton-title')
    h1.innerHTML = doc.data().title

    p.classList.remove('skeleton', 'skeleton-text')
    p.innerHTML = doc.data().description
})

//about
const aboutQuery = await getDocs(collection(db, 'about'))
const h2 = document.querySelector('#about > div.container > .text-wrapper > h2')
const paragraph = document.querySelector('#about > div.container > .text-wrapper > p')

aboutQuery.forEach((doc) => {
    h2.classList.remove('skeleton', 'skeleton-title')
    h2.innerHTML = doc.data().title

    paragraph.classList.remove('skeleton', 'skeleton-text')
    paragraph.innerHTML = doc.data().description
})

//functionalities
const query = await getDocs(collection(db, 'functionalities'))

const elementsContainer = document.querySelector(
    '#functionalities > div.container'
)

elementsContainer.innerHTML = ''

query.forEach((doc) => {
    const element = document.createElement('div')
    element.classList.add('element')

    const placeholder = document.createElement('div')
    placeholder.innerHTML = doc.data().icon

    const h3 = document.createElement('h3')
    h3.innerHTML = doc.data().title

    const p = document.createElement('p')
    p.innerHTML = doc.data().description

    element.appendChild(placeholder.firstChild)
    element.appendChild(h3)
    element.appendChild(p)

    elementsContainer.appendChild(element)
})