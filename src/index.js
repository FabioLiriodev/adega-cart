import ShopService from "./services/ShopService.js";
import CartService from "./services/CartService.js";
import StorageService from "./services/StorageService.js";

let initialMensage = "";
initialMensage = initialMensage.concat("\n🍷 Boas vindas ao sistema de gerenciamento de adega! 🍷\n");

console.log(initialMensage);

    const storageService = new StorageService();
    const cartService = new CartService();
    const shopService = new ShopService(storageService, cartService);

    shopService.addToStorage(1, 3);
    shopService.addToStorage(13, 9);
    shopService.addToStorage(15, 8);

    console.log(storageService.storage);

    shopService.addToCart(1,4);
    shopService.addToCart(13,5);
    shopService.addToCart(15,7);
    
    console.log(storageService.storage);
    console.log(cartService.cart);

    shopService.removeFromCart(1,1)
    shopService.removeFromCart(13,3)
    shopService.removeFromCart(15,15)

    console.log(storageService.storage);
    console.log(cartService.cart);













