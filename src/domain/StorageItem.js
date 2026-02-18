//criar o item garrafa de vinho com as informações relevantes

let counter = 0;

export default class StorageItem {
    wine;
    quantity;

    constructor (wine, quantity) {
        this.wine = wine;
        this.quantity = quantity;
    }

    addItem(quantity) {
        this.quantity += quantity;
    }

    removeItem(quantity) {
        let quantityToRemove = quantity;
        if (quantityToRemove > this.quantity) {
            console.log("[StorageItem] - A quantidade a ser removida excede a quantidade disponível no estoque!");
            quantityToRemove = this.quantity;
        }
        this.quantity -= quantityToRemove;
        return quantityToRemove;
    }
}


