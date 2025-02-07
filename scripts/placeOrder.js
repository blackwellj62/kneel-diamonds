import { placeOrder } from "./transientState.js"


const handleOrderButton = (clickEvent) => {
    if (clickEvent.target.id === "placeOrder") {
        placeOrder()
    }
}


export const orderButton = () => {
    document.addEventListener("click", handleOrderButton)
    return "<button id='placeOrder'>Place Order</button>"
}