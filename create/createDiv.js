

// création de div avec 4 parametres
export function createDiv(divType, divParent, divClassList, divTextContent) {

    const newDiv = document.createElement(divType)
    
    divParent.appendChild(newDiv)

    if (divClassList !== undefined) {
        if (divClassList !== null) {
            newDiv.classList.add(divClassList)
        }
    }

    if (divTextContent !== undefined) {
        if (divTextContent !== null) {
            newDiv.textContent = divTextContent
        }
    }

    return newDiv
}
//revoi la div au cas ou