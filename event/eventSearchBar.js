

import { clearInput } from '../clear/clearInput.js'
import { updateSearchData } from '../update/updateSearchData.js'

import { form, searchInput, searchRange } from '../config/config.js'


export function eventSearchBar() {

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const searchValue = searchInput.value
        //console.log(searchValue)
        
        clearInput(searchInput)
        updateSearchData(searchValue, searchRange)
    })
    

    searchInput.addEventListener('keypress', (event) => {
        if (event.keyCode === 13) {
            event.preventDefault()

            const searchValue = searchInput.value
            //console.log(searchValue)

            clearInput(searchInput)
            updateSearchData(searchValue, searchRange)
        }
    })
}