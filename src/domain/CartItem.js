//criar o item garrafa de vinho com as informações relevantes

export default class CartItem {
    wine;
    quantity;
    totalsellingprice;
    averagesellingprice;


    constructor (wine, quantity) {
        this.wine = wine;
        this.quantity = quantity;
        this.totalsellingprice = (quantity * wine.price) * wine.sellingmargin;
        this.averagesellingprice = (this.totalsellingprice / this.quantity);
    }

    addItem(quantity) {
        this.quantity += quantity;
        this.totalsellingprice += (quantity + this.averageprice) * this.wine.sellingmargin;
        this.averagesellingprice = (this.totalsellingprice / this.quantity);
    }

    removeItem(quantity) {
    let quantityToRemove = quantity;
    if(quantityToRemove > this.quantity) {
        console.log("[CartItem] - A quantidade a ser removida excede a quantidade disponível no carrinho!");
        quantityToRemove = this.quantity;
    }
        this.quantity -= quantityToRemove;
        this.totalsellingprice -= (this.averageprice * quantity) *this.wine.sellingmargin;
        this.averageprice = (this.totalsellingprice / quantity); 
        return quantityToRemove;
    }
}


