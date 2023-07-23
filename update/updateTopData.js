

import { baseUrl } from '../config/url.js'

import { updateContainerTop } from './updateContainerTop.js'
import { request } from '../request/requestGET.js'


export function updateTopData() {

    const topUrl = (`${baseUrl}top/manga?limit=10`)

    request(topUrl)
        .then(data => {
            console.log(data)

            updateContainerTop(data, 'top')
            
        })
        .catch(error => {
            console.error('error:', error)

            updateContainerTop('error', 'top')
        })
}