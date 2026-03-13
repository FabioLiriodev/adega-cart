import { promptGetStorage } from "../../prompt-schema/schema-storage.js";
import StorageService from "./StorageService.js";
import wineRegister from "../register/register.js";
import Database from "../../database/database.js";
import chalk from "chalk";
import prompt from "prompt";

async function handlerStorage() {
    let option = await promptGetStorage();
    console.log(option);
        switch (option) {
            case "1":
                console.log(`\n`);
                console.log(chalk.yellow("Iniciando registro do vinho no estoque"));
                console.log(`\n`);
                await addToStorage();
                break;

                case "2": 
                console.log(chalk.yellow("Removendo vinho do estque:"));
                console.table(Database);
                break;

                case "3": 
                console.table(StorageService);
                break;

                case "4": 
                chalk.red("Retornando ao menu anterior...");
                break;

            default:
                process.exit();
                break;
        }
}

export default handlerStorage;