//criar o item garrafa de vinho com as informações relevantes

export default class CartItem {
    wine;
    quantity;

    constructor (wine, quantity) {
        this.wine = wine;
        this.quantity = quantity
    }

    addItem(quantity) {
        this.quantity += quantity;
    }

    removeItem(quantity) {
    let quantityToRemove = quantity;
    if(quantityToRemove > this.quantity) {
        console.log("[CartItem] - A quantidade a ser removida excede a quantidade disponível no carrinho!");
        quantityToRemove = this.quantity;
    }
        this.quantity -= quantityToRemove;
        return quantityToRemove;
    }
}


