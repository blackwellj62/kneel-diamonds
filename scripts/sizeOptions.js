import { setSizeChoice } from "./transientState.js"

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()
    document.addEventListener("change", handleSizeChange)
    let sizeHTML = ""
    const sizeDivArray = sizes.map(
        (size) => {
            return `<div>
        <input type="radio" name="size" value="${size.id}" />
        ${size.carets}</div>`
        }
    )
    return sizeHTML += sizeDivArray.join("")
}

const handleSizeChange = (changeEvent) => {
    if (changeEvent.target.name === "size") {
        setSizeChoice(parseInt(changeEvent.target.value))
    }
}