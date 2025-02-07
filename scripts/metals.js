import { setMetalChoice } from "./transientState.js"

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()
    document.addEventListener("change", handleMetalChange)
    
    let metalHTML = ''
    const divStringArray = metals.map(
        (metal) => {
            return `<div>
        <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
        </div>`
        }
    )
    return metalHTML += divStringArray.join("")
    
}
const handleMetalChange = (changeEvent) => {
    if (changeEvent.target.name === 'metal') {
        setMetalChoice(parseInt(changeEvent.target.value))
    }
}
