export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    let styleHTML = ''
    for (const style of styles) {
        styleHTML += `<div>
        <input type="radio" name="styles" value="${style.id}" />
        ${style.style}
        </div>
        `
        
    }


    return styleHTML
}