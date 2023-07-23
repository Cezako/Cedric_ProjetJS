

import { toggles } from '../config/config.js'


export function eventToggleList() {
    console.log(toggles)

    Array.from(toggles).forEach((toggle) => {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('toggleChecked')
        })
    })
}