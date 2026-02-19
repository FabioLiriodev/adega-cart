import ShopService from "./services/ShopService.js";
import CartService from "./services/CartService.js";
import StorageService from "./services/StorageService.js";
import Wine from "./domain/wine.js";
import chalk from "chalk";

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

console.log(chalk.white.bgMagentaBright.bold("\n🍷 Boas vindas ao sistema de gerenciamento de adega! 🍷 \n"));

console.log(chalk.white.bgBlue.bold("\n🍾 Informe o produto a ser adicionado no estoque! 🍾 \n"));

const rl = readline.createInterface({ input, output });

async function wineRegister() {
    
    let valid = "n";
    let wine;
    while(valid !== "S" && valid !== "s") {

    const name = await rl.question(chalk.red('1 - Informe o nome do vinho a ser cadastrado: '));
    const type = await rl.question(chalk.red('2 - Informe o tipo de vinho: '));
    const grape = await rl.question(chalk.red('3 - Informe o tipo de uva: '));
    const origin = await rl.question(chalk.red('4 - Informe a origem do vinho: '));
    const harvest = await rl.question(chalk.red('5 - Informe a safra do vinho: '));
    const price = await rl.question(chalk.red('6 - Informe o preço unitário: '));
    const sellingMargin = await rl.question(chalk.red('7 - Informe a margem de lucro: '));

    wine = new Wine (name, type, grape, origin, harvest, price, sellingMargin);
    console.table(wine); 

    valid = (await rl.question('\n Confirma os dados de cadastro? S/N ')).trim();  
}

    rl.close()
    
}

await wineRegister();





   /* const storageService = new StorageService();
    const cartService = new CartService();
    const shopService = new ShopService(storageService, cartService);*/


// tarefa: tirar o preço da tabela de vinhos (do objeto vinho) e mudar os construtores e métodos para informar o preço do que você gastou para montar o estoque e o preço do carrinho do cliente.









