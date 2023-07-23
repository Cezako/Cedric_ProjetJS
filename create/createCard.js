

import { createDiv } from '../create/createDiv.js'
import { updateContainerCard } from '../update/updateContainerCard.js'
import { updateContainerTop } from '../update/updateContainerTop.js'


let savedDataSearch
let savedDataTop


export function createCard(data, container, updateType) {


    if (updateType === 'search' || updateType === 'top') {

        if (updateType === 'search') {
            savedDataSearch = data
        }
        if (updateType === 'top') {
            savedDataTop = data
        }

        let count = 0
        while (count < data.data.length) {

            const mangaData = data.data[count]
            //console.log(mangaData)
            count++

            const card = createDiv('div', container, 'recapCard')

            const titleElement = createDiv('h3', card, null, mangaData.title)

            const imgDiv = createDiv('div', card, 'imgDiv')
            const imgElement = createDiv('img', imgDiv)
            const url = mangaData.images.webp.image_url
            imgElement.src= url


            if (updateType === 'search') {

                card.addEventListener("click", function() {

                    updateContainerCard(mangaData, 'extendSearch')
                })
            }


            if (updateType === 'top') {

                card.addEventListener("click", function() {

                    updateContainerTop(mangaData, 'extendTop')
                })
            }
        }
    }




    if (updateType === 'extendSearch' || updateType === 'extendTop') {

        const mangaData = data
        //console.log(mangaData)

        const card = createDiv('div', container, 'card')

        const cardHead = createDiv('div', card, 'cardHead')

        const cardHeadText = createDiv('div', cardHead, 'cardHeadText')

        


        const titleElement = createDiv('h3', cardHeadText, null, mangaData.title)


        const genreNames = []
        mangaData.genres.forEach(genre =>{
            genreNames.push(genre.name)
        })
        const genresValue = genreNames.join(', ')
        const genresElement = createDiv('p', cardHeadText, null, genresValue)


        const authorNames = ['Authors :']
        mangaData.authors.forEach(author =>{
            authorNames.push(author.name)
        })
        const authorsValue = authorNames.join('\n')
        const authorsElement = createDiv('p', cardHeadText, null, authorsValue)


        const imgDiv = createDiv('div', cardHead, 'imgDiv')
        const imgElement = createDiv('img', imgDiv)
        const url = mangaData.images.webp.image_url
        imgElement.src= url    
        

        const synopsisDiv = createDiv('p', card, null, `Synopsis : ${mangaData.synopsis}`)


        const returnButton = createDiv('div', cardHead, 'returnButton')
        returnButton.innerHTML = '<i class="fa-solid fa-arrow-right fa-rotate-180"></i>'


        if (mangaData.score === null) {
            const scoreElement = createDiv('p', cardHeadText, null, 'Score : none')
        } else {
            const scoreElement = createDiv('p', cardHeadText, null, `Score : ${mangaData.score}/10`)
        }


        if (updateType === 'extendSearch') {

            //const volumesElement = createDiv('p', cardHeadText, null, `Volumes : ${mangaData.volumes}`)

            returnButton.addEventListener("click", function() {

                updateContainerCard(savedDataSearch, 'search')
            })
        }


        if (updateType === 'extendTop') {

            returnButton.addEventListener("click", function() {

                updateContainerTop(savedDataTop, 'top')
            })
        }
    }
}
