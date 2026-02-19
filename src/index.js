import ShopService from "./services/ShopService.js";
import CartService from "./services/CartService.js";
import StorageService from "./services/StorageService.js";
import Wine from "./domain/wine.js";
import chalk from "chalk";

console.log(chalk.white.bgMagentaBright.bold("\n🍷 Boas vindas ao sistema de gerenciamento de adega! 🍷 \n"));

console.log(chalk.white.bgBlue.bold("\n🍾 Informe o produto a ser adicionado no estoque! 🍾 \n"));


    const storageService = new StorageService();
    const cartService = new CartService();
    const shopService = new ShopService(storageService, cartService);

    shopService.addToStorage(1,5);

    shopService.addToCart(1, 5);

    console.log(storageService);
    console.log(cartService);

// tarefa: tirar o preço da tabela de vinhos (do objeto vinho) e mudar os construtores e métodos para informar o preço do que você gastou para montar o estoque e o preço do carrinho do cliente.









