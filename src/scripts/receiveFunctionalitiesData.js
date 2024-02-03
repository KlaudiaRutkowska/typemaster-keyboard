import { collection, getDocs } from 'firebase/firestore'

import db from './firebase.js'

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
