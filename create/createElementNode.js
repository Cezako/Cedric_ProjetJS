

export function createElementNode(element){
  
    const node = document.createElement(element.tag)
    
    node.textContent = element.text
    
    element.attributes.forEach((attribut) => {
        node.setAttribute(attribut.name, attribut.value)
    })
    
    element.childrens.forEach(children => {
        node.appendChild(createElementNode(children))
    })
    
    return node
}