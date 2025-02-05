export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    let sizeHTML = ""
    for (const size of sizes) {
        sizeHTML += `<div>
        <input type="radio" name="size" value="${size.id}" />
        ${size.carets}</div>
        `
    }


    return sizeHTML
}