import CartItem from "../domain/CartItem.js";

export default class CartService {
        cart = new Map(); //<wine.id, cartItem>

    
    findItem(id) {
       return this.cart.get(id);
    }


    addToCart(wine, quantity) {
        let cartItem = this.findItem(wine.id);
        if(cartItem == null) {
            cartItem = new CartItem(wine,quantity);
            this.cart.set(wine.id,cartItem);
        } else {
            cartItem.addItem(quantity);
        }
    }

    removeFromCart(wine, quantity) {
        let cartItem = this.findItem(wine.id);
        if (cartItem !== null) {
            return cartItem.removeItem(quantity);
        }
        console.log("[CartService] - Vinho inexistente no carrinho!");
        return -1;
    }

    // 2 - deletar o último item inserido no carrinho;

    deleteWineOfCart(wine) {
        this.wines.filter(item => item.name !== wine.name);
        console.log("Item removido do carrinho!");
        this.updateTotalPrice();
    }

    removeWineFromCart(wine) {
        const indexFound = this.wines.findIndex((item) => item.name === wine.name)

        if (indexFound == -1) {
            console.log(" 🍾Item não encontrado! 🍾");
            return
        }
        this.wines.splice(indexFound, 1);
        console.log("Vinho removido do carrinho!")
        this.updateTotalPrice();
    }

    updateTotalPrice() {
        this.totalPrice = 0.0;
        this.wines.forEach(wine => {
            this.totalPrice += wine.quantity * wine.price;
        });
    }

    displayCart() {
        console.log("\n🛒 O seu carrinho contém: \n");
        this.wines.forEach((wine, index) => {
            console.log(`${index + 1} - Vinho: ${wine.name} || Tipo: ${wine.typeOfWine} || Tipo de uva: ${wine.typeOfGrape} || Safra: ${wine.harvest}
            Origem: ${wine.origin} || Preço: R$ ${wine.price} || Quantidade: x ${wine.quantity} --> Total: R$ ${this.totalPrice}\n`);
        });
    }
}



