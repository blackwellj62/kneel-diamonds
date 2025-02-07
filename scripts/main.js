import { MetalOptions } from './metals.js'
import { StyleOptions } from './styleOptions.js'
import { SizeOptions } from './sizeOptions.js'
import { orderButton } from './placeOrder.js'
import { Orders } from './customOrders.js'

const container = document.querySelector("#container")


const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const styleOptionsHTML = await StyleOptions()
    const sizeOptionHTML = await SizeOptions()
    const button = orderButton()
    const customOrders = await Orders()
    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
            ${button}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
        ${customOrders}
        </article>
    `

    container.innerHTML = composedHTML
}
document.addEventListener("orderPlaced", render)

render()