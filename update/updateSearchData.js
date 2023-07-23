

import { baseUrl } from '../config/url.js'

import { updateContainerCard } from './updateContainerCard.js'
import { request } from '../request/requestGET.js'


export function updateSearchData(searchValue, searchRange) {

    //console.log(searchValue)

    if (searchValue.trim() !== '') {

        const searchUrl = (`${baseUrl}manga?q=${searchValue}&sfw=true&unapproved=true&limit=${searchRange}`)

        request(searchUrl)
            .then(data => {
                console.log(data)

                if (data.data.length === 0) {
                    updateContainerCard(null, MOD_SEARCH)
                } else {
                    updateContainerCard(data, 'search')
                }
            })
            .catch(error => {
                console.error('error:', error)

                updateContainerCard('error', 'search')
            })

    } else {
        
        updateContainerCard(null, 'search')
    }
}