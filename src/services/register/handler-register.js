import { promptGet } from "../../prompt-schema/schema-main.js";
import wineRegister from "./register.js";
import chalk from "chalk";
import Database from "../../database/database.js";


async function handlerRegister() {
    let selection = await promptGet();
    console.log(selection);
        switch (selection) {
            case "1":
                console.log(`\n`);
                console.log(chalk.yellow("Iniciando registro de produto..."));
                console.log(`\n`);
                await wineRegister();
                break;

                case "2": 
                console.log(chalk.yellow("Acessando banco de dados:"));
                console.table(Database);
                break;

                case "3": 
                console.log(chalk.red("Saindo do aplicativo..."));
                process.exit();
                break;

            default:
                process.exit();
                break;
        }
}

export default handlerRegister;