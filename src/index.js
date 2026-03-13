import ShopService from "./services/ShopService.js";
import CartService from "./services/CartService.js";
import StorageService from "./services/storage/StorageService.js";
import Wine from "./domain/wine.js";
import prompt from "prompt";
import chalk from "chalk";
import {promptSchemaMain, promptGet} from "./prompt-schema/schema-main.js";
import wineRegister from "./services/register/register.js";
import createBatch from "./services/batch-generator/handle.js";
import handlerRegister from "./services/register/handler-register.js";
import handlerStorage from "./services/storage/handler-storage.js";
import { promptGetStorage } from "./prompt-schema/schema-storage.js";


async function main() {
    await handlerRegister();
    }
   


await main();

export default main;

//modelo

//1) variável de controle = código 1;
// 2) loop while - atribuir momento de parada e definir quando o loop será encerrado. No loop, você chama os métodos com o switch-case para entrar na compartimentalização adequada.



   /* const storageService = new StorageService();
    const cartService = new CartService();
    const shopService = new ShopService(storageService, cartService);*/


// tarefa: tirar o preço da tabela de vinhos (do objeto vinho) e mudar os construtores e métodos para informar o preço do que você gastou para montar o estoque e o preço do carrinho do cliente.









