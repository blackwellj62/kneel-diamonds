import { setStyleChoice } from "./transientState.js"

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()
    document.addEventListener("change", handleStyleChange)
    let styleHTML = ''
    const styleDivArray = styles.map(
        (style) => {
            return `<div>
        <input type="radio" name="style" value="${style.id}" />
        ${style.style}
        </div>`
        }
    )
    return styleHTML += styleDivArray.join("")
}

const handleStyleChange = (changeEvent) => {
    if (changeEvent.target.name === "style"){
       setStyleChoice(parseInt(changeEvent.target.value))
    }
}