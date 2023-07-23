

import { containerCard } from '../config/config.js'

import { clearContainer } from '../clear/clearContainer.js'
import { createCard } from '../create/createCard.js'
import { createDiv } from '../create/createDiv.js'


export function updateContainerCard(data, updateType) {

    if (data === 'error') {

        clearContainer(containerCard)
        createDiv('p', containerCard, 'error', '... error')

    } else if (data === null) {

        clearContainer(containerCard)
        createDiv('p', containerCard, 'error', '... nothing here :/')

    } else {

        clearContainer(containerCard)
        createCard(data, containerCard, updateType)
    }

}