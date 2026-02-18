//criar o item garrafa de vinho com as informações relevantes

let counter = 0;

export default class StorageItem {
    wine;
    quantity; //total quantity
    price;   //preço médio
    totalvalue;



    constructor (wine, quantity, price) {
        this.wine = wine;
        this.totalvalue = price * quantity;
        this.quantity = quantity;
        this.price = price;
        
    }

    addItem(quantity, price) {
        this.quantity += quantity;
        this.totalvalue += quantity * price;
        this.price = this.totalvalue / this.quantity;
    }

    removeItem(quantity) {
        let quantityToRemove = quantity;
        if (quantityToRemove > this.quantity) {
            console.log("[StorageItem] - A quantidade a ser removida excede a quantidade disponível no estoque!");
            quantityToRemove = this.quantity;
        }
        this.quantity -= quantityToRemove;
        this.totalvalue -= quantity * this.price;
        return quantityToRemove;
    }
}


