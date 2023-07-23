

import { containerTop } from '../config/config.js'

import { clearContainer } from '../clear/clearContainer.js'
import { createCard } from '../create/createCard.js'
import { createDiv } from '../create/createDiv.js'


export function updateContainerTop(data, updateType) {

    if (data === 'error') {

        clearContainer(containerTop)
        createDiv('p', containerTop, 'error', '... error')

    } else {

        clearContainer(containerTop)
        createCard(data, containerTop, updateType)
    }

}