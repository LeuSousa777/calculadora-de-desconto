function formatCurrency(value) {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}

function calculateDiscount() {
    const input = document.querySelector("#product-price")

    const originalPrice = document.querySelector("#original-price")
    const discountValue = document.querySelector("#discount-value")
    const finalPrice = document.querySelector("#final-price")
    const message = document.querySelector("#message")

    const productPrice = Number(input.value)

    if (input.value === "" || productPrice < 0) {
        message.textContent = "Digite um preço válido."
        return
    }

    let discount = 0
    let priceWithDiscount = productPrice

    if (productPrice > 30) {
        discount = productPrice * 0.10
        priceWithDiscount = productPrice - discount

        message.textContent = "Desconto de 10% aplicado!"
    } else {
        message.textContent = "Este produto não recebe desconto."
    }

    originalPrice.textContent = formatCurrency(productPrice)
    discountValue.textContent = formatCurrency(discount)
    finalPrice.textContent = formatCurrency(priceWithDiscount)
}