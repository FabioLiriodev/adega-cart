import Database from "../database/database.js";
import Wine from "../domain/wine.js";
import CartService from "./CartService.js";
import StorageService from "./StorageService.js";

export default class ShopService {
    storageService;
    cartService;

    constructor(storageService, cartService) {
        this.storageService = storageService;
        this.cartService = cartService;
    }

    addToCart(id, quantity) {
        let wine = Database.findById(id);
        if (wine == null) {
            console.log("[ShopService] - Erro ao tentar encontrar o produto!");
            return
        }
        let removedQuantity = this.storageService.removeFromStorage(wine, quantity);

        if (removedQuantity !== -1) {
            this.cartService.addToCart(wine, removedQuantity);
        }
    }

    removeFromCart(id, quantity) {
        let wine = Database.findById(id);
        if (wine == null) {
            console.log("[ShopService] - Erro ao tentar remover o produto!");
            return
        }
        let removedQuantity = this.cartService.removeFromCart(wine, quantity);

        if (removedQuantity !== -1) {
            this.storageService.addToStorage(wine, quantity);
        }
    }

    addToStorage(id, quantity) {
        let wine = Database.findById(id);
        if (wine) {
            this.storageService.addToStorage(wine, quantity);
        }
    }

}